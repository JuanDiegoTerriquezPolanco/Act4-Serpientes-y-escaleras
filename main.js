//|==|BOARD|==|
let board=[];
for (let i = 0; i < 110; i++) {
    board[i]=i;
}
//|==|LADDERS|==|
board[1] = 19;
board[7] = 25;
board[17] = 31;
board[22] = 50;
board[32] = 48;
board[45] = 80;
board[56] = 76;
board[66] = 92;
board[71] = 100;
//|==|SNAKES|==|
board[17] = 7;
board[25] = 4;
board[33] = 22;
board[57] = 27;
board[65] = 30;
board[77] = 45;
board[86] = 25;
board[90] = 82;
board[95] = 8;

class Dice{
    throw(){
        return Math.ceil(Math.random()*6);
    }
}
let d=0;
class Player{
    constructor(){
        this.position=0;
    }
    getPosition(){
        return this.position;
    }
    step(){
        d=dice.throw();
        this.position = board[d+this.position];
    }
}
let dice = new Dice();
let p1 = new Player();
let p2 = new Player(),r=1;

while(p1.getPosition() < 100 && p2.getPosition() < 100){
    console.log(`|=========|Round: ${r++}|=========|`);
    p1.step();
    console.log(`Player 1 got ${d}, now he's at ${p1.getPosition()}`);
    p2.step();
    console.log(`Player 2 got ${d}, now he's at ${p2.getPosition()}`);
}

console.log(`|=========|FINAL|=========|`);
if (p1.getPosition() >= 100) {
    console.log(`Player 1 was the winner with: ${p1.getPosition()}`);
} else {
    console.log(`Player 2 was the winner with: ${p2.getPosition()}`);
}