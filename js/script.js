// elements
var vote_btn = document.querySelector(".submit-btn");
var stateSelect = document.querySelectorAll("select")[0];
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

// calculate total votes of the contestants
function updateVoteTotal(el, ed){
    totalvotes = el + ed;
    voteTotal.innerText = String(totalvotes);
}

// refresh progresschart
function refreshProgress(elon,edward, total){
    let elonprogress = Math.floor(elon/total*100);
    let edwardprogress = Math.floor(edward/total*100);

    // update progress chart
    elonChart.style.width = String(elonprogress)+"%";
    edwardChart.style.width = String(edwardprogress) +"%";
}


vote_btn.addEventListener("click", voteEvent)

function voteEvent(e){
    e.preventDefault();
    if (candidate !== ""){
        if (candidate === "elonCount"){
            alert("you have selected Elon");
            elonCont += 1
            spanElon.innerText = elonCont;
            refreshProgress(elonCont, edwardCount, totalvotes)

        }else if(candidate === "edwardCount"){
            alert("you have selected Edward");
            edwardCount += 1;
            spanEdward.innerText = edwardCount;
            refreshProgress(elonCont, edwardCount, totalvotes)
        }

        // update total votes label
        updateVoteTotal(elonCont, edwardCount);
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
        case "new-york" :
        if (candidate === "edwardCount") {
         NY_ED++;
        }
        else if (candidate === "elonCount") {
         NY_EL++;
         }
         break;

    // GEORGIA
         case "georgia" :
        if (candidate === "edwardCount") {
         GA_ED++;
        }
        else if (candidate === "elonCount") {
         GA_EL++;
         }
         break;

     // ALABAMA
         case "alabama" :
        if (candidate === "edwardCount") {
         AL_ED++;
        }
        else if (candidate === "elonCount") {
         AL_EL++;
         }
         break;

    // ALASKA
         case "alaska" :
        if (candidate === "edwardCount") {
         AK_ED++;
        }
        else if (candidate === "elonCount") {
         AK_EL++;
         }
         break;

    // ARIZONA
         case "arizona" :
        if (candidate === "edwardCount") {
         AZ_ED++;
        }
        else if (candidate === "elonCount") {
         AZ_EL++;
         }
         break;

    // ARKANSAS
         case "arkansas" :
        if (candidate === "edwardCount") {
         AR_ED++;
        }
        else if (candidate === "elonCount") {
         AR_EL++;
         }
         break;

    // CALIFORNIA
         case "california" :
        if (candidate === "edwardCount") {
         CA_ED++;
        }
        else if (candidate === "elonCount") {
         CA_EL++;
         }
         break;

    // COLORADO
         case "colorado" :
        if (candidate === "edwardCount") {
         CO_ED++;
        }
        else if (candidate === "elonCount") {
         CO_EL++;
         }
         break;

    // CONNECTIUIT
         case "montana" :
        if (candidate === "edwardCount") {
         MT_ED++;
        }
        else if (candidate === "elonCount") {
         MT_EL++;
         }
         break;

    // TEXAS
         case "texas" :
        if (candidate === "edwardCount") {
         TX_ED++;
        }
        else if (candidate === "elonCount") {
         TX_EL++;
         }
         break;

 // FLORIDA
         case "florida" :
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
    // NEW YORK
    if(NY_ED || NY_EL != 0) {
       simplemaps_usmap_mapdata.state_specific['NY'].description=`Edward:${NY_ED} and Elon:${NY_EL}`;

       if (NY_ED > NY_EL){
           simplemaps_usmap_mapdata.state_specific['NY'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (NY_EL > NY_ED){
           simplemaps_usmap_mapdata.state_specific['NY'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

         else
         {
            simplemaps_usmap_mapdata.state_specific['NY'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
     }

    // GEORGIA
     if(GA_ED || GA_EL != 0) {
      simplemaps_usmap_mapdata.state_specific['GA'].description=`Edward:${GA_ED} and Elon:${GA_EL}`;

         if (GA_ED > GA_EL){
           simplemaps_usmap_mapdata.state_specific['GA'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (GA_EL > GA_ED){
           simplemaps_usmap_mapdata.state_specific['GA'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['GA'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

    // ALABAMA
     if(AL_ED || AL_EL != 0) {
        simplemaps_usmap_mapdata.state_specific['AL'].description=`Edward:${AL_ED} and Elon:${AL_EL}`;

         if (AL_ED > AL_EL){
           simplemaps_usmap_mapdata.state_specific['AL'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (AL_EL > AL_ED){
           simplemaps_usmap_mapdata.state_specific['AL'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['AL'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

    // ALASKA
     if(AK_ED || AK_EL != 0) {
     simplemaps_usmap_mapdata.state_specific['AK'].description=`Edward:${AK_ED} and Elon:${AK_EL}`;

         if (AK_ED > AK_EL){
           simplemaps_usmap_mapdata.state_specific['AK'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (AK_EL > AK_ED){
           simplemaps_usmap_mapdata.state_specific['AK'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['AK'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

    // ARIZONA
     if(AZ_ED || AZ_EL != 0) {
     simplemaps_usmap_mapdata.state_specific['AZ'].description=`Edward:${AZ_ED} and Elon:${AZ_EL}`;

         if (AZ_ED > AZ_EL){
           simplemaps_usmap_mapdata.state_specific['AZ'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (AZ_EL > AZ_ED){
           simplemaps_usmap_mapdata.state_specific['AZ'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['AZ'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

    // ARKANSAS
     if(AR_ED || AR_EL != 0) {
     simplemaps_usmap_mapdata.state_specific['AR'].description=`Edward:${AR_ED} and Elon:${AR_EL}`;

         if (AR_ED > AR_EL){
           simplemaps_usmap_mapdata.state_specific['AR'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (AR_EL > AR_ED){
           simplemaps_usmap_mapdata.state_specific['AR'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['AR'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

    // CALIFONRIA
     if(CA_ED || CA_EL != 0) {
     simplemaps_usmap_mapdata.state_specific['CA'].description=`Edward:${CA_ED} and Elon:${CA_EL}`;

         if (CA_ED > CA_EL){
           simplemaps_usmap_mapdata.state_specific['CA'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (CA_EL > CA_ED){
           simplemaps_usmap_mapdata.state_specific['CA'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['CA'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

     // COLORADO
     if(CO_ED || CO_EL != 0) {
     simplemaps_usmap_mapdata.state_specific['CO'].description=`Edward:${CO_ED} and Elon:${CO_EL}`;

         if (CO_ED > CO_EL){
           simplemaps_usmap_mapdata.state_specific['CO'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (CO_EL > CO_ED){
           simplemaps_usmap_mapdata.state_specific['CO'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['CO'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

    // CONNECTICUT
     if(MT_ED || MT_EL != 0) {
     simplemaps_usmap_mapdata.state_specific['MT'].description=`Edward:${MT_ED} and Elon:${MT_EL}`;

         if (MT_ED > MT_EL){
           simplemaps_usmap_mapdata.state_specific['MT'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (MT_EL > MT_ED){
           simplemaps_usmap_mapdata.state_specific['MT'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['MT'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

    // TEXAS
     if(TX_ED || TX_EL != 0) {
     simplemaps_usmap_mapdata.state_specific['TX'].description=`Edward:${TX_ED} and Elon:${TX_EL}`;

         if (TX_ED > TX_EL){
           simplemaps_usmap_mapdata.state_specific['TX'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (TX_EL > TX_ED){
           simplemaps_usmap_mapdata.state_specific['TX'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['TX'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }

  // FLORIDA
     if(FL_ED || FL_EL != 0) {
     simplemaps_usmap_mapdata.state_specific['FL'].description=`Edward:${FL_ED} and Elon:${FL_EL}`;

         if (FL_ED > FL_EL){
           simplemaps_usmap_mapdata.state_specific['FL'].color='#1499C3';
            simplemaps_usmap.refresh();
         }

         else if (FL_EL > FL_ED){
           simplemaps_usmap_mapdata.state_specific['FL'].color='#DFF6FF';
            simplemaps_usmap.refresh();
         }

      else
         {
            simplemaps_usmap_mapdata.state_specific['FL'].color="#2c3b47";
            simplemaps_usmap.refresh();
         }
    }


}
