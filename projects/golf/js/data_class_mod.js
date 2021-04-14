export class GameData {
    constructor(nP,cID,tB){
        this.numPlayers = nP;
        this.cID = cID;
        this.teeBox = tB;
        this.players = [];
    }
}

export class Player {
    constructor(name,index){
        this.index = index;
        this.name = name;
        this.strokesOUT = [0,0,0,0,0,0,0,0,0];
        this.strokesIN = [0,0,0,0,0,0,0,0,0];
        this.outTotal = 0;
        this.inTotal = 0;
        this.courseTotal = 0;
    }
    updateTotals(){
        this.outTotal = this.strokesOUT.reduce(function(acc,val){
            return acc + (val || 0);
        }, 0);
        this.inTotal = this.strokesIN.reduce(function(acc,val){
            return acc + (val || 0);
        }, 0);
        this.courseTotal = this.outTotal + this.inTotal;
    }
}