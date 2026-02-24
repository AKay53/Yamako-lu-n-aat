// C++'taki Class mantığıyla aynı: Bir proje listesi oluşturuyoruz
const projelerim = [
    {
        baslik: "Yamaoğlu Sahil Villaları",
        aciklama: "Denize sıfır, akıllı ev sistemli lüks konutlar.",
        resim: "proje1.jpg"
    },
    {
        baslik: "Yamaoğlu Sky Plaza",
        aciklama: "Şehrin kalbinde, 40 katlı modern iş merkezi.",
        resim: "proje2.jpg"
    },
    {
        baslik: "Lojistik Merkezi",
        aciklama: "Avrupa standartlarında dev depolama alanı.",
        resim: "proje3.jpg"
    }
];
function projeleriYukle() {
    const grid = document.querySelector('.proje-grid');
    grid.innerHTML = ""; // İçini bir temizleyelim

    projelerim.forEach(proje => {
        // Her proje için bir kart oluşturuyoruz (Template Literals kullanarak)
        const kartHTML = `
            <div class="proje-kart" onclick="detayAc('${proje.baslik}', '${proje.aciklama}')">
                <img src="${proje.resim}" alt="${proje.baslik}">
                <div class="proje-bilgi">
                    <h3>${proje.baslik}</h3>
                    <p>Detayları görmek için tıkla</p>
                </div>
            </div>
        `;
        grid.innerHTML += kartHTML; // HTML'in sonuna ekle
    });
}

// Sayfa yüklendiğinde bu motoru çalıştır
window.onload = projeleriYukle;


// Fonksiyon: Detay Penceresini Açar
function detayAc(baslik, aciklama) {
    // HTML'deki elemanları yakalıyoruz
    const modal = document.getElementById('pencereKapsayici');
    const modalBaslik = document.getElementById('pencereBaslik');
    const modalAciklama = document.getElementById('pencereAciklama');

    // Pencerenin içindeki yazıları, tıkladığımız karta göre değiştiriyoruz
    modalBaslik.innerText = baslik;
    modalAciklama.innerText = aciklama;

    // Pencereyi görünür yapıyoruz
    modal.style.display = "block";
}

// Fonksiyon: Detay Penceresini Kapatır
function detayKapat() {
    const modal = document.getElementById('pencereKapsayici');
    modal.style.display = "none";
}