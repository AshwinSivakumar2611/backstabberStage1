var database;
var gameState=0,playerCount=0;
var form,player,game;
var welcomeScreen,homeScreen,sampleMap;
var allPlayers;

function preLoad(){
    welcomeScreen = LoadImage("images/WelcomeScreen.png");
    homeScreen = LoadImage("images/HomeScreen.png");
    sampleMap = LoadImage("images/SampleMap.png");
}

function setup(){
    database = firebase.database();
    createCanvas(1366,620);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("black");
}