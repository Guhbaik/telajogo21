let pj=0;//vareavel pontos jogador
let pr=0;//varea pontos robot
    let b1 =["A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠"];
     let b2 =["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣"];
     let b3 =["A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"];
     let b4 =["A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦"];
     let baralho= b1.concat(b2,b3,b4);
let b=[a,];//vareavel para baralho
let mj=[];//vareavel mao jogador
let mb=[];//vareavel mao robot
let resposta;b
function jogo(){//rotina
    baralho.sort(ramdOrd);
    baralho.sort(ramdOrd);
    baralho.sort(ramdOrd);
    mj.push=b.shift;
    mj.push=b.shift;
    mb.push=b.shift;
    mb.push=b.shift;
}

function ramdOrd(){
return(Math.round(Math.random())-0.5);
}

