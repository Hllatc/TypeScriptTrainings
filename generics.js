function deger(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
function deger3(x) {
    return x;
}
var sayi3 = deger3(2);
var sehir3 = deger3('Ankara');
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parameter) {
        return parameter;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon('Ankara');
