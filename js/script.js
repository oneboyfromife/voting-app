// elements
var vote_btn = document.querySelector(".submit-btn");
var candidateSelect = document.querySelectorAll(".who-form-img");

var spanElon = document.querySelector(".elon-vote-count");
var spanEdward = document.querySelector(".edward-vote-count");
var state = document.getElementById("state");

// display the total vote
var voteTotal = document.querySelector(".total-votes");

// the progress bar chart of the candidates
var elonChart = document.querySelector(".elon-progress");
var edwardChart = document.querySelector(".edward-progress");


// global variables
let elonCont = 0;
let edwardCount = 0;
let totalvotes = 0;
let candidate = "";
let elonprogress = 0;
let edwardprogress = 0;
let splashScreen = "";

// STATE VARIABLES
let NY_ED = 0;
let NY_EL = 0;
let GA_ED = 0;
let GA_EL = 0;
let AL_ED = 0;
let AL_EL = 0;
let AK_ED = 0;
let AK_EL = 0;
let AZ_ED = 0;
let AZ_EL = 0;
let AR_ED = 0;
let AR_EL = 0;
let CA_ED = 0;
let CA_EL = 0;
let CO_ED = 0;
let CO_EL = 0;
let CT_ED = 0;
let CT_EL = 0;
let TX_ED = 0;
let TX_EL = 0;
let MT_ED = 0;
let MT_EL = 0;
let FL_ED = 0;
let FL_EL = 0;

// getting img id
for(var x = 0; x<2; x++){
    candidateSelect[x].addEventListener("click", function(e){
        e.preventDefault();
        candidate = e.target.getAttribute("id");

// Add opacity and scale the images
        if (candidate === "edwardCount") {
        document.getElementById(candidate).classList.remove("opacity");
        document.getElementById("elonCount").classList.add("opacity");
        }
        else
        {
        document.getElementById(candidate).classList.remove("opacity");
        document.getElementById("edwardCount").classList.add("opacity");
        }
    })
}

// get Splash Message
function getSplashScreen(candidate, votes, chart, state){
    let msg = `DETAILS
    ===============================
     voted: ${candidate}
     state: ${state}
     votes: ${votes}
     ${candidate} chart: ${chart}%
     Thanks for voting
    ===============================`
     return msg;
}

// calculate total votes of the contestants
function updateVoteTotal(el, ed){
    totalvotes = el + ed;
}

// function calcPercentage of vote
function getPercent(x, t){
    return Math.floor(x/t*100);
}

// refresh progresschart
function refreshProgress(elon,edward, total){
    elonprogress = getPercent(elon,total);
    edwardprogress = getPercent(edward,total);
        
    // update progress chart
    elonChart.style.width = String(elonprogress)+"%";
    edwardChart.style.width = String(edwardprogress) +"%";
}


vote_btn.addEventListener("click", voteEvent)

function voteEvent(e){
    e.preventDefault();
    if (candidate !== ""){
        if(totalvotes < 100){
            if (candidate === "elonCount"){
                elonCont += 1
                updateVoteTotal(elonCont, edwardCount);
                spanElon.innerText = elonCont;
                refreshProgress(elonCont, edwardCount, totalvotes)
                alert(getSplashScreen("Elon Musk", elonCont, elonprogress, state.value));
    
            }else if(candidate === "edwardCount"){
                edwardCount += 1;
                updateVoteTotal(elonCont, edwardCount);
                spanEdward.innerText = edwardCount;
                refreshProgress(elonCont, edwardCount, totalvotes)
                alert(getSplashScreen("Edward Cambell", edwardCount, edwardprogress, state.value));
            }
            voteTotal.innerText = String(totalvotes);
        }else{
            alert("Votes are closed for now")
        }
    }
    else{
        alert("Please choose a candidate!")
    }

// implement map functionality
    mapEvent();

 // Clean up and remove image class
    document.getElementById("elonCount").classList.remove("opacity");
    document.getElementById("edwardCount").classList.remove("opacity");
    candidate = ""
}


 // UPDATE VOTE VARIABLE FOR EACH STATE ON THE MAP
function mapEvent () {
    switch(state.value) {
    // NEW YORK
        case "NY" :
        if (candidate === "edwardCount") {
         NY_ED++;
        }
        else if (candidate === "elonCount") {
         NY_EL++;
         }
         break;

    // GEORGIA
         case "GA" :
        if (candidate === "edwardCount") {
         GA_ED++;
        }
        else if (candidate === "elonCount") {
         GA_EL++;
         }
         break;

     // ALABAMA
         case "AL" :
        if (candidate === "edwardCount") {
         AL_ED++;
        }
        else if (candidate === "elonCount") {
         AL_EL++;
         }
         break;

    // ALASKA
         case "AK" :
        if (candidate === "edwardCount") {
         AK_ED++;
        }
        else if (candidate === "elonCount") {
         AK_EL++;
         }
         break;

    // ARIZONA
         case "AZ" :
        if (candidate === "edwardCount") {
         AZ_ED++;
        }
        else if (candidate === "elonCount") {
         AZ_EL++;
         }
         break;

    // ARKANSAS
         case "AR" :
        if (candidate === "edwardCount") {
         AR_ED++;
        }
        else if (candidate === "elonCount") {
         AR_EL++;
         }
         break;

    // CALIFORNIA
         case "CA" :
        if (candidate === "edwardCount") {
         CA_ED++;
        }
        else if (candidate === "elonCount") {
         CA_EL++;
         }
         break;

    // COLORADO
         case "CO" :
        if (candidate === "edwardCount") {
         CO_ED++;
        }
        else if (candidate === "elonCount") {
         CO_EL++;
         }
         break;

    // CONNECTIUIT
         case "MT" :
        if (candidate === "edwardCount") {
         MT_ED++;
        }
        else if (candidate === "elonCount") {
         MT_EL++;
         }
         break;

    // TEXAS
         case "TX" :
        if (candidate === "edwardCount") {
         TX_ED++;
        }
        else if (candidate === "elonCount") {
         TX_EL++;
         }
         break;

 // FLORIDA
         case "FL" :
        if (candidate === "edwardCount") {
         FL_ED++;
        }
        else if (candidate === "elonCount") {
         FL_EL++;
         }
         break;

        default : alert("Please choose a state!");
    }




// CHANGE COLOR BASED ON NUMBER OF VOTES
if(eval(`${state.value}_ED`) || eval(`${state.value}_EL`) != 0) {

       simplemaps_usmap_mapdata.state_specific[state.value].description= "Edward:"+ eval(state.value+"_ED") + " and Elon:" + eval(state.value+"_EL");

       if (eval(`${state.value}_ED`) > eval(`${state.value}_EL`)){
           simplemaps_usmap_mapdata.state_specific[state.value].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (eval(`${state.value}_EL`) > eval(`${state.value}_ED`)){
           simplemaps_usmap_mapdata.state_specific[state.value].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

         else
         {
            simplemaps_usmap_mapdata.state_specific[state.value].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
     }

}
