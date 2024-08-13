function deger(x:number):number{
    return x;
}

let sayi = deger(10)
console.log(sayi)

function deger3<T>(x:T):T{
    return x;
}

let sayi3=deger3<number>(2)
let sehir3=deger3<string>('Ankara')

class GenericClass<T>{
    degisken : T;
    fonksiyon(parameter : T):T{
        return parameter;
    }
}

let sinif=new GenericClass<string>()

sinif.fonksiyon('Ankara')
