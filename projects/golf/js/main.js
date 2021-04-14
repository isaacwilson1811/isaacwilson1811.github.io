import {API} from './api_handler_mod.js';
import {Render} from './render_mod.js';
import {GameData, Player} from './data_class_mod.js';

const renderTo = document.getElementById('rendered_content');
export var gameData;
export let numberOfPlayers = 0;
export let namesOfPlayers = [];
export let selectedCourseID = null;
export let selectedTeeBox = null;

export function showAppPage(page,courseID,numPlayers = 1){
    switch(page){
        case 'setup1':
            API.fetchCourses().then( data => Render.drawSetup1(data,renderTo) );
        break;
        case 'setup2':
            numberOfPlayers = numPlayers;
            selectedCourseID = courseID;
            API.fetchTeeBoxes(courseID).then( data => Render.drawSetup2(data,renderTo) );
        break;
    }
}

export function showScores(playerNames,teeBox){
    namesOfPlayers = playerNames;
    selectedTeeBox = teeBox;
    gameData = new GameData(numberOfPlayers,selectedCourseID,selectedTeeBox);

    namesOfPlayers.forEach(function(name,index){
        let player = new Player(name,index);
        gameData.players.push(player);
    });

    API.fetchGame(selectedCourseID).then( data => Render.drawScores(data,renderTo) );
}

export function updateScore(elmID,playerIndex,array,hole){
    
    let val = parseInt(document.getElementById(elmID).value);
    gameData.players[playerIndex][array][hole] = val;

    console.log(gameData.players[playerIndex][array][hole]);

    gameData.players[playerIndex].updateTotals();

    let outTID = 'p'+playerIndex+'outT';
    document.getElementById(outTID).innerText =  ''+gameData.players[playerIndex].outTotal;
    console.log(outTID);
    let inTID = 'p'+playerIndex+'inT';
    document.getElementById(inTID).innerText = gameData.players[playerIndex].inTotal;
    console.log(inTID);
    let courseTID = 'p'+playerIndex+'courseT';
    document.getElementById(courseTID).innerText = gameData.players[playerIndex].courseTotal;
    console.log(courseTID);
}


showAppPage('setup1');