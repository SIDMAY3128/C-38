var gameState = 0
var form,player,game,playerCount
var database
var allPlayers
var car1,car2,car3,car4
var cars

function preload(){
    trackImage = loadImage("images/track.jpg")
    car1Image = loadImage("images/car1.png")
    car2Image = loadImage("images/car2.png")
    car3Image = loadImage("images/car3.png")
    car4Image = loadImage("images/car4.png")
}

function setup(){
    database = firebase.database()
    createCanvas(windowWidth,windowHeight);
    game = new Game()
    game.readGameState()
    game.start()

    
  
}

function draw(){

    if(playerCount === 4){
        game.updateGameState(1)
    }

    if (gameState === 1){
        game.play()
    }

    if (gameState === 2){
        game.end()
    }
 
}

