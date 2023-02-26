class Ship{
    constructor(name,hull,firepower,accuracy){
        this.name = name;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }

    attack(victim){
            if (this.accuracy >= victim.accuracy){
                victim.hull -= this.firepower;
            }
            else{
                this.hull -= victim.firepower;
            }      
            return;
    }
}

class humanShip extends Ship{
    constructor(name){
       super(name);
    }
}

class alienShip extends Ship{
    constructor(name,hull,firepower,accuracy){
        super(name);
        this.hull = Math.round(Math.random() * (6 - 3) + 3);
        this.firepower = Math.ceil(Math.random ()*3)+1;
        this.accuracy = (Math.floor(Math.random()*3) + 6) / 10;
    }
}

const human = new humanShip('USSship');
const alienArray = [];
for(let i=1;i<=6;i++){
    const alien = new alienShip(`alien${i}`);
    alienArray.push(alien);
}

console.log(human);
console.log(alienArray);
for(let i=0;i<alienArray.length;i++){
    console.log(`${alienArray[i].name}'s ship is generating itself to go in field`);
    
    while(human.hull > 0 ){
        console.log(`Human ship is attacking ${alienArray[i].name}'s ship`);
        human.attack(alienArray[i]);
        console.log(`human's ship is having a hull value of ${human.hull}`);
        console.log(`${alienArray[i].name}'s ship is having a hull value of ${alienArray[i].hull}`)
        
        if(alienArray[i].hull <= 0) break;
        if(alienArray[i].hull > 0){
            console.log(`${alienArray[i].name}'s ship is attacking Human ship`);
            alienArray[i].attack(human);
            console.log(`human's ship is having a hull value of ${human.hull}`);
            console.log(`${alienArray[i].name}'s ship is having a hull value of ${alienArray[i].hull}`)
            if(alienArray[i].hull <= 0) break;   
            if(alienArray[i].hull > 0){
                
            }
        }
    }
    if(human.hull<=0){
        console.log(`Human ship has lost the battle with ${alienArray[i].name}`);
        break;
        }
}

    if(alienArray[5].hull<0){
        console.log('Human ship wins the battle after battling with 6 alien ships');
    }

