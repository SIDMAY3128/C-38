class Game {
    constructor(){}

    readGameState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val()
        })
    }
    updateGameState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            console.log("HELLO")
            form.display()
        }

        car1 = createSprite(100,200)
        car1.addImage(car1Image)
        car2 = createSprite(300,200)
        car2.addImage(car2Image)
        car3 = createSprite(500,200)
        car3.addImage(car3Image)
        car4 = createSprite(700,200)
        car4.addImage(car4Image)
        cars = [car1,car2,car3,car4]
    }

    end(){
        console.log("GAME ENDED")
    }

    play(){
        form.hide()
        Player.getPlayerInfo()
        if(allPlayers !== undefined){
            background (198,135,103)
            image(trackImage,0,-windowHeight*4,windowWidth,windowHeight*5)
            var index = 0
            var x = 270,y
            for (var plr in allPlayers){
                index = index + 1
                x = x+270
                y = windowHeight - allPlayers[plr].distance
                cars[index - 1].x = x
                cars[index - 1].y = y
                if(index === player.index){
                    cars[index - 1].shapeColor = "blue"
                    camera.position.x = windowWidth/2
                    camera.position.y = cars[index-1].y
                }
   
            }
        }

        if (keyIsDown(UP_ARROW) && player.index != null){
            player.distance += 10
            player.update()
        }

        if (player.distance > 4440){
            gameState = 2
        }
        drawSprites()
    }

}