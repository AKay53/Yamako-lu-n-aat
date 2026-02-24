#include <iostream>
#include <string>
using namespace std;

class Dükkan{
    public:
    string isim;
    string konum;
    double ciro;
    Dükkan(string _isim, string _konum, double _ciro){
        isim=_isim;
        konum=_konum;
        ciro=_ciro;
    }
    void genelBilgi(){
        cout<<"Dükkan İsmi:  "<<isim<<
        " Dükkan konum"<<konum<<
        " Aylık ciro"<<ciro<<"TL"<<endl;
    }
};

class Seramik : public Dükkan{
    public:
    Seramik(string _isim, string _konum, double _ciro):Dükkan(_isim,_konum,_ciro){
        
    }
    void seramikDetay(){
        genelBilgi();
    }
};
int main(){
    Seramik s1("Akaydın","Yenidoğan",50.000);
    s1.seramikDetay();
    return 0;
}