let heroCreator = (name) => {
    let creator = {
        create: {
            hero : {
                name: name,
                health: 100
            },
            mage: (name) => {
                let mage = creator.create.hero;
                mage.name = name;
                mage.mana = 100;
                mage.cast = function (spell) {
                    mage.mana--;
                    console.log(`${mage.name} cast ${spell}`);
                }
                return mage;
            },
            fighter: (name) => {
                let fighter = creator.create.hero;
                fighter.name = name;
                fighter.stamina = 100;
                fighter.fight = () => {
                    fighter.stamina--;
                    console.log(`${fighter.name} slashes at the foe!`);
                }
                return fighter;
            }
        }
    }

    return creator.create;
}
let create = heroCreator('asdas');
let scorcher = create.mage('Scorcher');

scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);