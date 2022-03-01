/**/

var  tomb = [];
var tomb2 = [1,2,3,4,5,6,7];
var tomb3 = [5];
console.log(tomb.length)
console.log(tomb2.length)
console.log(tomb3.length)
console.log(tomb[0])

var  gyumolcs = ["alam","citrom","narancs","idk", "eper"];
var gyumolcsSzin = ["piros","sárga","narancs","kék", "piros"]
var gyumolcsAr = [200, 300, 600, 1000]

for (let index = 0; index < gyumolcs.length; index++) {
    console.log(gyumolcs[index])
    
}
var i = 0;
while(i < gyumolcsSzin.length && !(gyumolcsSzin[i]==="sárga")){

    i++;
}
var sargavan = i < gyumolcsSzin.length;
console.log(sargavan)
/**Hány sárga? */
i = 0;
var sargaDb = 0;
while(i < gyumolcsSzin.length && !(gyumolcsSzin[i]==="sárga")){
    if(gyumolcsSzin[i] == "sárga")
        sargaDb++;
    i++;
}
/** mennyi a gyümölcsök összértéke? */
var osszeg = 0;
for (let index = 0; index < gyumolcsAr.length; index++) {
    osszeg += gyumolcsAr[index];
    
}
console.log(osszeg)



/**Piros vagy sárgábol van több */

var pirosDb = 0;
i = 0;
while(i < gyumolcsSzin.length && !(gyumolcsSzin[i]==="sárga")){
    if(gyumolcsSzin[i] == "sárga")
        sargaDb++;
    if(gyumolcsSzin[i] == "piros")
        pirosDb++;
    i++;
}
if(pirosDb > sargaDb){
    console.log("Pirosbol van több!")
}else{
    console.log("Sárgábol van több!")
}
/**Van e 100 ft alatti gyümölcs */
i = 0;
while(i < gyumolcsSzin.length && !(gyumolcsAr[i] < 100)){
    i++;
}
var kissebbszaz = i < gyumolcsSzin.length;
console.log(kissebbszaz)

console.log("Átlagösszeg: "+osszeg/gyumolcsAr.length)

for (let index = 0; index < gyumolcsAr.length; index++) {
    if (gyumolcsAr[index] > 500){
        console.log(gyumolcs[index])
    }
}