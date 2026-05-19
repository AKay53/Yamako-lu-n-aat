// 1. Sidebar Menü Açma/Kapatma
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

// 2. Sayfa Yüklendiğinde Çalışacak Motorlar
document.addEventListener("DOMContentLoaded", function() {
    
    // Üç Katlı Dropdown Mekanizması
    const dropdowns = document.querySelectorAll(".dropdown-btn, .sub-dropdown-btn");
    dropdowns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            const container = this.nextElementSibling;
            if (container) {
                if (container.style.display === "block") {
                    container.style.display = "none";
                    if(this.querySelector("span")) this.querySelector("span").innerText = this.classList.contains("dropdown-btn") ? "▼" : "▶";
                } else {
                    container.style.display = "block";
                    if(this.querySelector("span")) this.querySelector("span").innerText = "▼";
                }
            }
            e.stopPropagation();
        });
    });

    // --- SAHİBİNDEN TARZI GALERİ MOTORU ---
    const galeriKapsayici = document.querySelector('.sahibinden-galeri');
    if (galeriKapsayici) {
        const gizliResimler = galeriKapsayici.querySelectorAll('.gizli-resimler img');
        const anaResim = document.getElementById('galeriAnaResim');
        const sayac = document.getElementById('galeriSayac');
        const okSol = document.getElementById('galeriOkSol');
        const okSag = document.getElementById('galeriOkSag');
        const lightbox = document.getElementById('lightboxKapsayici');
        const lightboxResim = document.getElementById('lightboxResim');

        let aktifIndeks = 0;
        const toplamResim = gizliResimler.length;

        // Resimleri diziye alalım
        const resimKaynaklari = [];
        gizliResimler.forEach(img => resimKaynaklari.push(img.getAttribute('src')));

        // Resim ve Sayacı Güncelleyen Fonksiyon
        function resmiGoster(indeks) {
            if (indeks >= toplamResim) indeks = 0;
            if (indeks < 0) indeks = toplamResim - 1;
            aktifIndeks = indeks;
            
            anaResim.setAttribute('src', resimKaynaklari[aktifIndeks]);
            if(sayac) sayac.innerText = `${aktifIndeks + 1} / ${toplamResim}`;
        }

        // İlk resmi yükle
        if(toplamResim > 0) resmiGoster(0);

        // Ok Tıklama Olayları
        if(okSag) okSag.addEventListener('click', (e) => { e.stopPropagation(); resmiGoster(aktifIndeks + 1); });
        if(okSol) okSol.addEventListener('click', (e) => { e.stopPropagation(); resmiGoster(aktifIndeks - 1); });

        // Sahibinden Mantığı: Ana resmin sağ yarısına tıklayınca sonraki resme geçsin
        if(anaResim) {
            anaResim.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left; // Tıklanan X koordinatı
                
                if (x > rect.width / 2) {
                    // Sağ tarafa tıklandı: Sonraki Resim
                    resmiGoster(aktifIndeks + 1);
                } else {
                    // Sol tarafa tıklandı: Tam Ekran Yap (Lightbox)
                    if(lightbox && lightboxResim) {
                        lightboxResim.setAttribute('src', resimKaynaklari[aktifIndeks]);
                        lightbox.style.display = 'flex';
                    }
                }
            });
        }

        // Lightbox Kapatma
        if(lightbox) {
            lightbox.addEventListener('click', () => { lightbox.style.display = 'none'; });
        }
    }
});

// Eski Modal Kapatma Fonksiyonları (Hata vermemesi için korundu)
function detayKapat() {
    const modal = document.getElementById('pencereKapsayici');
    if (modal) modal.style.display = "none";
}