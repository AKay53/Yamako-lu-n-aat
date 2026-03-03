const projeler = [
    {
        baslik: "Yamakoğlu Sahil Villaları",
        aciklama: "Denize sıfır, akıllı ev sistemli lüks konutlar.",
        resim: "resimler/IMG_7877.JPG",
        link: "sahil-villalari.html" // Yeni sayfanın adı
    },
    {
        baslik: "Yamakoğlu Apartman",
        aciklama: "Şehrin kalbinde, modern ve güvenli yaşam alanı.",
        resim: "resimler/IMG_7876.JPG",
        link: "apartman-projesi.html"
    },
    {
        baslik: "Modern Villa",
        aciklama: "Avrupa standartlarında estetik dokunuşlar.",
        resim: "resimler/IMG_7875.JPG",
        link: "modern-villa.html"
    }
];

function projeleriYukle() {
    const grid = document.querySelector('.proje-grid');
    if (!grid) return;

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

// Sayfa tamamen yüklendiğinde projeleri çalıştır
window.onload = projeleriYukle;

// 3. Detay Penceresi (Modal) Fonksiyonları
function detayAc(baslik, aciklama) {
    const modal = document.getElementById('pencereKapsayici');
    const modalBaslik = document.getElementById('pencereBaslik');
    const modalAciklama = document.getElementById('pencereAciklama');

    if (modal && modalBaslik && modalAciklama) {
        modalBaslik.innerText = baslik;
        modalAciklama.innerText = aciklama;
        modal.style.display = "block";
    }
}

function detayKapat() {
    const modal = document.getElementById('pencereKapsayici');
    if (modal) {
        modal.style.display = "none";
    }
}

// Modal dışına tıklandığında kapatma özelliği (Ekstra Konfor)
window.onclick = function(event) {
    const modal = document.getElementById('pencereKapsayici');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}