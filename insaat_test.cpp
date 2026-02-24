#include <iostream>
#include <vector>

using namespace std;

void kopyaylaDegistir(int kat){
    kat = kat+1;
}
void adresleDegistir(int &kat){
    kat = kat+1;
}
int main(){
    int güncelKat=5;
    cout<< başlangıç katı: << güncelKat<<endl;
    kopyaylaDegistir(güncelKat);
    cout<<kopyalama sonrası: << güncelKat << endl;
    adresleDegistir(güncelKat);
    cout<<referans sonrası : <<güncelKat<<endl;
    return 0;
}