// elements
var vote_btn = document.querySelector(".vote-btn");
var stateSelect = document.querySelectorAll("select")[0];
var candidateSelect = document.querySelectorAll("select")[1];
var progressBar = document.querySelector("progress")
var spanElon = document.querySelector(".elon");
var spanEdward = document.querySelector(".edward");
var voteTotal = document.querySelector(".votetotal");


// var
let elonCont = 0;
let edwardCount = 0;

function getTotalVotes(el, ed){
    return el + ed;
}

function calcProgress(elon, total){
    result = Math.floor(elon/total*100)
    return result;
}


vote_btn.addEventListener("click", voteEvent)

function voteEvent(){
    let candidate = candidateSelect.value;
    
    if (candidate !== "0"){
        if (candidate === "2"){
            elonCont += 1
            spanElon.innerText = elonCont;
        }else{
            edwardCount += 1;
            spanEdward.innerText = edwardCount;
        }
        let totalvotes = getTotalVotes(elonCont, edwardCount);
        let progressCount = calcProgress(elonCont, totalvotes);
        voteTotal.innerText = String(totalvotes) + " :vote(s)";
        progressBar.value = progressCount;
    }
    else{
        alert("Please choose a candidate!")
    }

}