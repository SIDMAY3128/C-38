class Player {
    constructor(){
        this.index = null,
        this.distance = 0,
        this.name = null
    }

    getCount(){
      database.ref('playerCount').on("value",function(data){playerCount = data.val()}) 
    }
    updatePlayerCount(count){
        console.log(count)
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+ this.index
        database.ref(playerIndex).set({name:name, distance:this.distance})
    }

    static getPlayerInfo(){
        database.ref('players').on("value",function(data){allPlayers = data.val()})
    }
}
