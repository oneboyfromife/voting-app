// elements
var vote_btn = document.querySelector(".submit-btn");
var stateSelect = document.querySelectorAll("select")[0];
var candidateSelect = document.querySelectorAll(".who-form-img");

var spanElon = document.querySelector(".elon-vote-count");
var spanEdward = document.querySelector(".edward-vote-count");

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


// getting img id
for(var x = 0; x<2; x++){
    candidateSelect[x].addEventListener("click", function(e){
        e.preventDefault();
        candidate = e.target.getAttribute("id");
    })
}

// calculate total votes of the contestants
function updateVoteTotal(el, ed){
    totalvotes = el + ed;
    voteTotal.innerText = String(totalvotes) + " :vote(s)";
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
}