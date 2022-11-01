// 1. Creeaza o clasa care poate fi folosita pentru a crea mai multe ferme. Fiecare ferma va contine un id, o locatie si un array cu animale. Fiecare animal are nume si cantitate (deci practic un animal va fi un obiect).

// Clasa va contine si doua metode:
// 1. listAnimals: metoda va afisa la consola un sir de caractere, ce contine toate animalele din ferma.
// EX: farm1.listAnimals() => "Ferma contine urmatoarele animale: cal, gaina, pisica"
// 2. listRareAnimals: metoda va afisa la consola un sir de caractere, care va contine numele tuturor animalelor ale caror cantitate este mai mica decat 5.

// Creeaza minim 2 ferme, care sa contina cel putin 3 animale.
console.log('Exercitiul 1.');
class farm  {
    constructor (id, location, animals) {
        this.id = id;
        this.location = location;
        this.animals = animals;
        }

        listAnimals() {
            let animalList = '';
            this.animals.forEach(animals => { 
                animalList = animalList + animals.name + ', ';
            } ); 
            console.log("In cadrul fermei noastre veti gasi urmatoarele animale: ", animalList, 'care sunt foarte dragalase.');
        }

        listRareAnimals () {
            let rareAnimalsList ='';
            this.animals.forEach(animals => {
                if (animals.quantity < 5) {
                    rareAnimalsList = rareAnimalsList + animals.name + ', ';
                }})
            console.log("In cadrul fermei noastre veti gasi si urmatoarele animale mai rare, cum ar fi: ", rareAnimalsList, 'de care avem foarte multa grija.');
           
        }
    }


const animalsPetsFarm = [
    { name: 'pisica',
    quantity: 13,},

    {name: 'caine',
    quantity: 7,},

    {name: 'hamster',
    quantity: 3},
]

const animalsZooFarm = [
    {name: 'elefant',
    quantity: 3},

    {name: 'zebra',
    quantity: 7},

    {name: 'sarpe',
    quantity: 9},
]

const petsFarm = new farm(1, 'Oradea', animalsPetsFarm);
// console.log(petsFarm);
const zooFarm = new farm(2, 'Cluj-Napoca', animalsZooFarm);
// console.log(zooFarm);

petsFarm.listAnimals();
petsFarm.listRareAnimals();
zooFarm.listAnimals();
zooFarm.listRareAnimals();

console.log('');
    


// 2. Se da urmatorul array:
const salaries = [2300, 5000, 3500];
// Sa se creeze o metoda disponibila pe orice array (hint: prototype), numita sum, care atunci cand este apelata calculeaza suma elementelor din array.
// EX: salaries.sum() => 10800;

console.log("Exercitiul 2.");

Array.prototype.sum = function () {
    let sum = 0;
    for ( i=0; i < this.length; i++ ) {
        sum = sum + this[i];
    }
    
    return sum;
}

console.log(salaries.sum());