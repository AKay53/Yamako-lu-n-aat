// 1. Proje Verileri
const projeler = [
    {
        baslik: "Yamakoğlu Sahil Villaları",
        aciklama: "Denize sıfır, akıllı ev sistemli lüks konutlar.",
        resim: "resimler/IMG_7877.JPG",
        link: "referans.html" 
    },
    {
        baslik: "Yamakoğlu Apartman",
        aciklama: "Şehrin kalbinde, modern ve güvenli yaşam alanı.",
        resim: "resimler/IMG_7876.JPG",
        link: "app.html"
    },
    {
        baslik: "Modern Villa",
        aciklama: "Avrupa standartlarında estetik dokunuşlar.",
        resim: "resimler/IMG_7875.JPG",
        link: "referans.html"
    }
];

// 2. Projeleri Ana Sayfaya Yükleme
function projeleriYukle() {
    const grid = document.querySelector('.proje-grid');
    if (!grid) return; // Eğer o sayfada .proje-grid yoksa hata vermez

    grid.innerHTML = ""; // İçini temizleyip baştan doldurur
    projeler.forEach(proje => {
        grid.innerHTML += `
            <a href="${proje.link}" class="proje-kart-link">
                <div class="proje-kart">
                    <img src="${proje.resim}" alt="${proje.baslik}">
                    <div class="proje-bilgi">
                        <h3>${proje.baslik}</h3>
                        <p>Detayları Gör →</p>
                    </div>
                </div>
            </a>
        `;
    });
}

// 3. Sidebar Menü Fonksiyonu
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// 4. Dropdown (Alt Menü) Mekanizması
// DOMContentLoaded kullanarak sayfa hazır olduğunda butonları dinlemeye başlarız
document.addEventListener("DOMContentLoaded", function() {
    projeleriYukle(); // Projeleri yükle

    const dropdownBtns = document.querySelectorAll(".dropdown-btn");
    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            this.classList.toggle("active");
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent) {
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            }
        });
    });
});

// 5. Modal / Dış Tıklama Kapatma
window.addEventListener("click", function(event) {
    const modal = document.getElementById('pencereKapsayici');
    const sidebar = document.getElementById("sidebar");
    
    // Modal dışına tıklandığında kapat
    if (event.target == modal) {
        modal.style.display = "none";
    }
});