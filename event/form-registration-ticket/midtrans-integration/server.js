const rateLimit = require('express-rate-limit');
require('dotenv').config();
require('./db');      
const express = require('express');
const midtransClient = require('midtrans-client');
const cors = require('cors');
const path = require('path');
const lokasi = require('./lokasi');
           // ← MongoDB connection
const Pendaftar = require('./models/Pendaftar');  // ← Mongoose model
const app = express();
const PORT = process.env.PORT || 3000;


// 🟢 Ini bagian penting
app.use(express.static('public'));
app.use(express.json()); // biar bisa parsing JSON body

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});



app.get('/api/wilayah', (req, res) => {
  res.json(Object.keys(lokasi));
});

app.get('/api/provinsi', (req, res) => {
  const wilayah = req.query.wilayah;
  const provinsi = lokasi[wilayah];
  if (!provinsi) return res.status(404).json([]);
  res.json(Object.keys(provinsi));
});

app.get('/api/kota', (req, res) => {
  const { wilayah, provinsi } = req.query;
  const kota = lokasi[wilayah]?.[provinsi];
  if (!kota) return res.status(404).json([]);
  res.json(kota);
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 10, //
  message: {
    status: 429,
    message: "Terlalu banyak permintaan dari IP ini. Coba lagi nanti."
  }
});
app.use('/create-transaction', limiter);

app.post('/register', async (req, res) => {
  try {
    const peserta = new Pendaftar(req.body);
    await peserta.save();
    res.status(201).json({ message: 'Data tersimpan', id: peserta._id });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Gagal simpan data' });
  }
});


let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

app.post('/create-transaction', async (req, res) => {
  try {
    const orderId = 'ORDER-' + Date.now();
    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: 200000
      },
      customer_details: {
        first_name: req.body.nama_lengkap,
        email: req.body.email,
        phone: req.body.nomor_telepon,
      },
    };

    const transaction = await snap.createTransaction(parameter);
    res.json({ token: transaction.token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal membuat transaksi' });
  }
});

app.get('/midtrans-client-key', (req, res) => {
  res.json({ clientKey: process.env.MIDTRANS_CLIENT_KEY });
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
