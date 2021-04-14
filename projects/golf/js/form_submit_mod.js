import {showAppPage, showScores, numberOfPlayers} from './main.js';

export class Form {
    static submitSetup1(data){
        let courseID = null;
            data.forEach(function(course){
                if (document.getElementById(course.id).checked){
                    courseID = course.id;
                }
            });
        let numPlayers = 0;
        if (document.getElementById("numPlayers1").checked){
            numPlayers = 1;
        }else if (document.getElementById("numPlayers2").checked){
            numPlayers = 2;
        }else if (document.getElementById("numPlayers3").checked){
            numPlayers = 3;
        }else if (document.getElementById("numPlayers4").checked){
            numPlayers = 4;
        }
        showAppPage('setup2',courseID,numPlayers);
    }
    static submitSetup2(teeBoxNames){
        let teeBox = null;
        teeBoxNames.forEach(function(name){
            if (document.getElementById(name).checked){
                teeBox = name;
            }
        });
        let playerNames = [];
        for(let i=0; i < numberOfPlayers; i++){
            if (!document.getElementById(`nameP${i+1}`).value == ''){
                playerNames.push(document.getElementById(`nameP${i+1}`).value);
            }else{
                document.getElementById(`nameP${i+1}`).value = `Player ${i+1}`;
                playerNames.push(document.getElementById(`nameP${i+1}`).value);
            }
        }
        let uniqueNames = new Set(playerNames);
        if(playerNames.length !== uniqueNames.size){
            document.getElementById('warning').style.display = 'inline';
        }else{
            showScores(playerNames,teeBox);
        }
    }
}