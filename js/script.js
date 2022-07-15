// elements
var vote_btn = document.querySelector(".submit-btn");
var stateSelect = document.querySelectorAll("select")[0];
var candidateSelect = document.querySelectorAll(".who-form-img");
var progressBar = document.querySelector("progress")
var spanElon = document.querySelector(".elon-vote-count");
var spanEdward = document.querySelector(".edward-vote-count");
var voteTotal = document.querySelector(".total-votes");


// global variables
let elonCont = 0;
let edwardCount = 0;
let candidate = "";

// getting img id
for(var x = 0; x<2; x++){
    candidateSelect[x].addEventListener("click", function(e){
        e.preventDefault();
        candidate = e.target.getAttribute("id");
    })
}

function getTotalVotes(el, ed){
    return el + ed;
}

function calcProgress(elon, total){
    result = Math.floor(elon/total*100)
    return result;
}


vote_btn.addEventListener("click", voteEvent)

function voteEvent(e){
    e.preventDefault();
    if (candidate !== ""){
        if (candidate === "elonCount"){
            alert("you have selected Elon");
            elonCont += 1
            spanElon.innerText = elonCont;
        }else if(candidate === "edwardCount"){
            alert("you have selected Edward");
            edwardCount += 1;
            spanEdward.innerText = edwardCount;
        }
        let totalvotes = getTotalVotes(elonCont, edwardCount);
        let progressCount = calcProgress(elonCont, totalvotes);
        voteTotal.innerText = String(totalvotes) + " :vote(s)";
        //progressBar.value = progressCount;
    }
    else{
        alert("Please choose a candidate!")
    }
}