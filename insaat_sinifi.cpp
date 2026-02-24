#include <iostream>
#include <string>
using namespace std;

class Bina {
public: // Her yerden erişilebilir demek
    string isim;
    int katSayisi;
    double butce;

    // Metot (Sınıf içindeki fonksiyon)
    void bilgileriGoster() {
        cout << "Proje Adi: " << isim << endl;
        cout << "Kat Sayisi: " << katSayisi << endl;
        cout << "Tahmini Maliyet: " << butce << " TL" << endl;
        cout << "-------------------------" << endl;
    }
};

int main() {
    // Nesne oluşturuyoruz (Proje hayata geçiyor)
    Bina villa1;
    villa1.isim = "Yamaoglu Sahil Villalari";
    villa1.katSayisi = 2;
    villa1.butce = 5000000;

    Bina rezidans1;
    rezidans1.isim = "Yamaoglu Sky Tower";
    rezidans1.katSayisi = 35;
    rezidans1.butce = 150000000;

    // Fonksiyonları çağıralım
    villa1.bilgileriGoster();
    rezidans1.bilgileriGoster();

    return 0;
}