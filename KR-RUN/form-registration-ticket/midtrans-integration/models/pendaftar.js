// models/Pendaftar.js
const mongoose = require('../db');

const PendaftarSchema = new mongoose.Schema({
  nama_lengkap: { type: String, required: true },
  jenis_kelamin: { type: String, required: true },
  tanggal_lahir: { type: Date,   required: true },
  nomor_telepon: { type: String, required: true },
  email:          { type: String, required: true },
  kategori_lomba: { type: String, required: true },
  komunitas_lari: { type: String, required: true },
  ukuran_kaos:    { type: String, required: true },
  riwayat_kesehatan:      { type: String, required: true },
  golongan_darah:         { type: String, required: true },
  tipe_nomor:             { type: String, required: true },
  nomor_identitas:        { type: String, required: true },
  asuransi:               { type: String, required: true },
  alamat_domisili:        { type: String, required: true },
  nama_kontak_darurat:    { type: String, required: true },
  number_kontak_darurat:  { type: String, required: true },
  pekerjaan:              { type: String },
  tshirt_panjang:         { type: Boolean },
  agree_terms:            { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pendaftar', PendaftarSchema);