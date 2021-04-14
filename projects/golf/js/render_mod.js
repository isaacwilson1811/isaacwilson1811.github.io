import {Form} from './form_submit_mod.js';
import {numberOfPlayers, selectedTeeBox, gameData, updateScore} from './main.js';

export class Render {
    static drawSetup1(data,domElm){
        domElm.innerHTML = `
        <div class="container-sm">
            <div class="row">
                <div class="col-sm"><h4>Select The Golf Course</h4></div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="${data[0].id}" class="form-check-input" type="radio" name="radio_course" checked>
                        <label class="form-check-label">${data[0].name}</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="${data[1].id}" class="form-check-input" type="radio" name="radio_course">
                        <label class="form-check-label">${data[1].name}</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="${data[2].id}"class="form-check-input" type="radio" name="radio_course">
                        <label class="form-check-label">${data[2].name}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-sm">
            <div class="row">
                <div class="col-sm"><h4>Select Number Of Players</h4></div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="numPlayers1" class="form-check-input" type="radio" name="radio_playerNum" checked>
                        <label class="form-check-label">1 Player</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="numPlayers2" class="form-check-input" type="radio" name="radio_playerNum">
                        <label class="form-check-label">2 Players</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="numPlayers3" class="form-check-input" type="radio" name="radio_playerNum">
                        <label class="form-check-label">3 Players</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="numPlayers4" class="form-check-input" type="radio" name="radio_playerNum">
                        <label class="form-check-label">4 Players</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <button id="submitSetup1btn" type="button" class="btn btn-primary">OK</button>
                </div>
            </div>
        </div>
        `;
        document.getElementById("submitSetup1btn").addEventListener("click", function(){ Form.submitSetup1(data); });
    }
    static drawSetup2(data,domElm){

        let teeBoxNames = [];
        for (let i=0; i < data.length; i++){
            if (data[i].teeType == 'auto change location'){
                continue;
            }
            teeBoxNames.push(data[i].teeType);
        }
        console.log(teeBoxNames);

        let htmlPart1 =`
        <div class="container-sm">
        <div class="row">
            <div class="col-sm"><h4>Select The Tee Box For All Players</h4></div>
        </div>
        `;
        
        let buffer = '';

        teeBoxNames.forEach(function(name){
            let chunk = `
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="${name}" class="form-check-input" type="radio" name="radio_teeBox">
                        <label class="form-check-label">${name.toUpperCase()}</label>
                    </div>
                </div>
            </div>
            `;
            buffer += chunk;
        })
        htmlPart1 += (buffer + '</div>');

        buffer = '';

        for (let i = 0; i < numberOfPlayers; i++){
            let chunk =`
            <div class="row">
                <div class="col-sm">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text">Player ${i+1}</span>
                        <input id="nameP${i+1}" type="text" class="form-control">
                    </div>
                </div>
            </div>
            `;
            buffer+=chunk;
        }
        let htmlPart2 =`
        <div class="container-sm">
            <div class="row">
                <div class="col-sm"><h4>Enter Player Names</h4></div>
            </div>

        
        `;
        let htmlPart3 = `
        <div class="row">
            <div class="col-sm">
                <button id="submitSetup2btn" type="button" class="btn btn-primary">OK</button>
            </div>
            <div class="col-sm">
                <span id="warning" class="warning-text" style="display:none">Please Enter Unique Names</span>
            </div>
        </div>
        </div>`;

        htmlPart2 += (buffer+htmlPart3);


        domElm.innerHTML = htmlPart1+htmlPart2;
        document.getElementById(teeBoxNames[0]).checked = true;


        document.getElementById("submitSetup2btn").addEventListener("click", function(){ Form.submitSetup2(teeBoxNames); });
    }
    static drawScores(data,domElm){
        console.log(data);
        console.log(gameData);
        let boxNum = 0;
        data.holes[0].teeBoxes.forEach(function(box,index){
            if (box.teeType == selectedTeeBox){
                boxNum = index;
            }
        });

        let yardsOUT = 0;
        for(let i = 0; i < 9; i++){yardsOUT+= data.holes[i].teeBoxes[boxNum].yards};
        let yardsIN = 0;
        for(let i = 9; i < 18; i++){yardsIN += data.holes[i].teeBoxes[boxNum].yards};
        let yardsTOTAL = yardsOUT + yardsIN;

        let hcpOUT = 0;
        for(let i = 0; i < 9; i++){hcpOUT += data.holes[i].teeBoxes[boxNum].hcp};
        let hcpIN = 0;
        for(let i = 9; i < 18; i++){hcpIN += data.holes[i].teeBoxes[boxNum].hcp};
        let hcpTOTAL = hcpOUT + hcpIN;

        let parOUT = 0;
        for(let i = 0; i < 9; i++){parOUT += data.holes[i].teeBoxes[boxNum].par};
        let parIN = 0;
        for(let i = 9; i < 18; i++){parIN += data.holes[i].teeBoxes[boxNum].par};
        let parTOTAL = parOUT + parIN;
        

        let staticHTML = `
        <div class="container-sm" style="overflow-x:auto;white-space:nowrap;">
        <div class="row">
            <div class="col-sm">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">HOLE</th>
                            <th scope="col">1</th>
                            <th scope="col">2</th>
                            <th scope="col">3</th>
                            <th scope="col">4</th>
                            <th scope="col">5</th>
                            <th scope="col">6</th>
                            <th scope="col">7</th>
                            <th scope="col">8</th>
                            <th scope="col">9</th>
                            <th scope="col">OUT</th>
                            <th scope="col">10</th>
                            <th scope="col">11</th>
                            <th scope="col">12</th>
                            <th scope="col">13</th>
                            <th scope="col">14</th>
                            <th scope="col">15</th>
                            <th scope="col">16</th>
                            <th scope="col">17</th>
                            <th scope="col">18</th>
                            <th scope="col">IN</th>
                            <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">YARDS</th>
                            <td>${data.holes[0].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[1].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[2].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[3].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[4].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[5].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[6].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[7].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[8].teeBoxes[boxNum].yards}</td>
                            <td>${yardsOUT}</td>
                            <td>${data.holes[9].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[10].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[11].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[12].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[13].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[14].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[15].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[16].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[17].teeBoxes[boxNum].yards}</td>
                            <td>${yardsIN}</td>
                            <td>${yardsTOTAL}</td>
                        </tr>
                        <tr>
                            <th scope="row">HCP</th>
                            <td>${data.holes[0].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[1].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[2].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[3].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[4].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[5].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[6].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[7].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[8].teeBoxes[boxNum].hcp}</td>
                            <td>${hcpOUT}</td>
                            <td>${data.holes[9].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[10].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[11].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[12].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[13].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[14].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[15].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[16].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[17].teeBoxes[boxNum].hcp}</td>
                            <td>${hcpIN}</td>
                            <td>${hcpTOTAL}</td>
                        </tr>
                        <tr>
                            <th scope="row">PAR</th>
                            <td>${data.holes[0].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[1].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[2].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[3].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[4].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[5].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[6].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[7].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[8].teeBoxes[boxNum].par}</td>
                            <td>${parOUT}</td>
                            <td>${data.holes[9].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[10].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[11].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[12].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[13].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[14].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[15].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[16].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[17].teeBoxes[boxNum].par}</td>
                            <td>${parIN}</td>
                            <td>${parTOTAL}</td>
                        </tr>
        `;

        let buffer = '';
        gameData.players.forEach(function(player){
            player.updateTotals();
            let prefix = `p${player.index}`;
            let chunk = `
            <tr>
                <th scope="row">${player.name}</th>
                <td><input type="number" id="${prefix}out0" min="0" value="${player.strokesOUT[0]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}out1" min="0" value="${player.strokesOUT[1]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}out2" min="0" value="${player.strokesOUT[2]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}out3" min="0" value="${player.strokesOUT[3]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}out4" min="0" value="${player.strokesOUT[4]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}out5" min="0" value="${player.strokesOUT[5]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}out6" min="0" value="${player.strokesOUT[6]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}out7" min="0" value="${player.strokesOUT[7]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}out8" min="0" value="${player.strokesOUT[8]}" step="1" oninput="validity.valid||(value='');"></td>
                <td id="${prefix}outT" >${player.outTotal}</td>
                <td><input type="number" id="${prefix}in0" min="0" value="${player.strokesIN[0]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}in1" min="0" value="${player.strokesIN[1]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}in2" min="0" value="${player.strokesIN[2]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}in3" min="0" value="${player.strokesIN[3]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}in4" min="0" value="${player.strokesIN[4]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}in5" min="0" value="${player.strokesIN[5]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}in6" min="0" value="${player.strokesIN[6]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}in7" min="0" value="${player.strokesIN[7]}" step="1" oninput="validity.valid||(value='');"></td>
                <td><input type="number" id="${prefix}in8" min="0" value="${player.strokesIN[8]}" step="1" oninput="validity.valid||(value='');"></td>
                <td id="${prefix}inT" >${player.inTotal}</td>
                <td id="${prefix}courseT" >${player.courseTotal}</td>
            </tr>                            
            `;
            buffer+=chunk;
        });

        let closeHTML = `</tbody></table></div></div></div>`;

        let dynamicHTML = buffer + closeHTML;

        domElm.innerHTML = staticHTML + dynamicHTML;

        gameData.players.forEach(function(player){
            for (let i = 0; i < 9; i++){
                let elmID = 'p'+player.index.toString()+'out'+i.toString();
                document.getElementById(elmID).addEventListener("change", function(){ updateScore(elmID,player.index,"strokesOUT",i); });
            }
            for (let i = 0; i < 9; i++){
                let elmID = 'p'+player.index.toString()+'in'+i.toString();
                document.getElementById(elmID).addEventListener("change", function(){ updateScore(elmID,player.index,"strokesIN",i); });
            }
        });
    }
}