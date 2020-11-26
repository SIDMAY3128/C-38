class Form {
    constructor(){
        this.title = createElement('h2')
        this.input = createInput('Name')
        this.button = createButton('Submit')
        this.greeting = createElement('h3')
        this.reset = createButton("Reset")
    }
    hide(){
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
        this.title.hide()
    }
 
    display(){
        this.title.html("Car Racing Game")
        this.title.position(windowWidth/2 ,0)
        this.input.position(windowWidth/2,windowHeight/5)
        this.button.position(windowWidth/2 + 50,windowHeight/4)
        this.reset.position(windowWidth-100,20)
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            console.log(playerCount)
            playerCount = playerCount + 1 
            player.index = playerCount
            player.update()
            player.updatePlayerCount(playerCount)
            this.greeting.html("Welcome "+ player.name)
            this.greeting.position(windowWidth/2,windowHeight/5)
        })

        this.reset.mousePressed(()=>{
            player.updatePlayerCount(0)
            game.updateGameState(0)
            database.ref('players').remove()
        })
    }

}