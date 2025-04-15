// ----------- Menu bar ---------
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    (sidebar.style.display = "flex"), sidebar.classList.add("show");
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  
  // --------------- scroll -------------
  window.addEventListener("scroll", function () {
    var navBawah = document.querySelector(".nav-bawah");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      navBawah.classList.add("show");
    } else {
      navBawah.classList.remove("show");
    }
  });


// --------NUMBER VALUE FORM--------
document.getElementById("no_whatsapp").addEventListener("input", function() {
    var no_whatsapp = this.value;
    if (no_whatsapp.length > 15) {
      this.value = no_whatsapp.substring(0, 15);
    }
  });

  document.getElementById("kontak_darurat").addEventListener("input", function() {
    var kontak_darurat = this.value;
    if (kontak_darurat.length > 15) {
      this.value = kontak_darurat.substring(0, 15);
    }
  });

  document.getElementById("golongan_darah").addEventListener("input", function() {
    var golongan_darah = this.value;
    if (golongan_darah.length > 15) {
      this.value = golongan_darah.substring(0, 15);
    }
  });
  // document.getElementsByClassName("ukuran_baju").addEventListener("input", function() {
  //   var ukuran_baju = this.value;
  //   if (ukuran_baju.length > 15) {
  //     this.value = ukuran_baju.substring(0, 15);
  //   }
  // });
  
  // -----------sweetjs ALERT---------
  document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault(); // prevent the default form submission
  
    // Check if all required fields are filled in
    const requiredFields = document.querySelectorAll('input[required]');
    const allFieldsFilled = Array.from(requiredFields).every(field => field.value !== '');
  
    if (allFieldsFilled) {
      Swal.fire({
        title: "Testing Success Later Connection Yeah",
        icon: "success",
        draggable: true
      });
    } else {
      // If not all fields are filled in, display an error message
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields",
        icon: "error"
      });
    }
  });
  


  // ------------FORM ARROW DROPBOX Jenis kelamin---------
  document.getElementById('arrowIcon').addEventListener('click', function() {
    document.getElementById('list').classList.toggle('hide');
  });
  
  document.getElementById('selectText').addEventListener('click', function() {
    document.getElementById('list').classList.toggle('hide');
  });


const list = document.getElementById('list');
const jenisKelaminInput = document.getElementById('selectText');

list.addEventListener('click', function(event) {
  if (event.target.closest('li')) {
    const optionText = event.target.closest('li').querySelector('p').textContent;
    if (optionText === 'Laki-laki') {
      jenisKelaminInput.value = 'Laki-laki';
    } else if (optionText === 'Perempuan') {
      jenisKelaminInput.value = 'Perempuan';
    }

    list.classList.add('hide');
  }
});

const arrowIcon = document.getElementById('arrowIcon');
const selectText = document.getElementById('selectText');

selectText.addEventListener('click', function() {
  arrowIcon.classList.toggle('rotate');
});

arrowIcon.addEventListener('click', function() {
  arrowIcon.classList.toggle('rotate');
});


selectText.addEventListener('input', function(event) {
  if (event.target.value !== 'Laki-laki' && event.target.value !== 'Perempuan') {
    event.target.value = '';
  }
});

  // ------------FORM ARROW DROPBOX Lomba---------

  document.getElementById('arrowIcon2').addEventListener('click', function() {
    document.getElementById('list2').classList.toggle('hide');
  });
  
  document.getElementById('selectText2').addEventListener('click', function() {
    document.getElementById('list2').classList.toggle('hide');
  });


const list_2 = document.getElementById('list2');
const KategoriLombaInput = document.getElementById('selectText2');


list_2.addEventListener('click', function(event) {
  if (event.target.closest('li')) {
    const optionText = event.target.closest('li').querySelector('p').textContent;
    if (optionText === '5K') {
      KategoriLombaInput.value = '5K';
    } else if (optionText === '10K') {
      KategoriLombaInput.value = '10K';
    }

    list_2.classList.add('hide');
  }
});

const arrowIcon_2 = document.getElementById('arrowIcon2');
const selectText_2 = document.getElementById('selectText2');

selectText_2.addEventListener('click', function() {
  arrowIcon_2.classList.toggle('rotate');
});

arrowIcon_2.addEventListener('click', function() {
  arrowIcon_2.classList.toggle('rotate');
});

  // ------------FORM ARROW DROPBOX Baju---------

  document.getElementById('arrowIcon3').addEventListener('click', function() {
    document.getElementById('list3').classList.toggle('hide');
  });
  
  document.getElementById('selectText3').addEventListener('click', function() {
    document.getElementById('list3').classList.toggle('hide');
  });


const list_3 = document.getElementById('list3');
const ukuranBaju = document.getElementById('selectText3');


list_3.addEventListener('click', function(event) {
  if (event.target.closest('li')) {
    const optionText = event.target.closest('li').querySelector('p').textContent;
    if (optionText === 'S') {
      ukuranBaju.value = 'S';
    } else if (optionText === 'M') {
      ukuranBaju.value = 'M';
    } else if (optionText === 'L') {
      ukuranBaju.value = 'L';
    } else if (optionText === 'XL') {
      ukuranBaju.value = 'XL';
    } 

    list_3.classList.add('hide');
  }
});

const arrowIcon_3 = document.getElementById('arrowIcon3');
const selectText_3 = document.getElementById('selectText3');

selectText_3.addEventListener('click', function() {
  arrowIcon_3.classList.toggle('rotate');
});

arrowIcon_3.addEventListener('click', function() {
  arrowIcon_3.classList.toggle('rotate');
});

