const home = document.querySelector("#home");
const nickName = document.querySelector(".nick-name");
const startBtn = document.querySelector(".startBtn");
const info = document.querySelector(".info");
let nickArea = document.querySelector(".nick-area");
let moneyArea = document.querySelector(".money-area");
const amountMoney = document.getElementById("amount-money");
const sendBtn = document.getElementById("send-money");
const infoWin = document.querySelector(".info-win");
const gameArea = document.getElementById("game-area");
const amoutWin = document.getElementById("amountwin");
let winArea = document.querySelector(".mywin");
const receive = document.getElementById("receive");
const area = document.querySelector(".area");
const endGameArea = document.getElementById("endgame");
const resetGame = document.getElementById("resetGame");
let nick = "";
let currentFunds = 100000;
let counter = 0;

//Rate Variables
let rate = 0;
let payment = 0;

//Extra Buttons
const betAllFunds = document.getElementById("all");
const betHalfFunds = document.getElementById("half");

//Investors
const InvestorNameArea = document.querySelector(".investor-name h2");
const InvestorPhotoArea = document.querySelector(".investor-image img");
const InvestorDealArea = document.querySelector(".investor-image p");
const Investors = [
    {
     name: "Bill Gates",
     photo: "img/investors/billgates.jpg",
     deal: "Hello. I am Bill Gates, owner of Microsoft. Two weeks ago, we started working on new software that increases the security of Windows users. We have heard that you are interested in investing in it! How much money do you want to invest?"
    },

    {
     name: "Mark Zuckerberg", 
     photo: "img/investors/markzuckerberg.jpg",
     deal: "Hello. I am Mark Zuckerberg, founder of the social networking site Facebook. We are working on a new application that will improve the location of other users around the world. We have heard that you are interested in investing in it! How much money do you want to invest?"
    }, 

     {
     name: "Google", 
     photo: "img/investors/google.png", 
     deal: "Hello. We are a management group of the online Google Play store. We have created a new payment module that we plan to implement into our system. We hope it will be popular all over the world! We have heard that you are interested in investing in it! How much money do you want to invest?"
    }, 

    {
     name: "Steve Jobs", 
     photo: "img/investors/stevejobs.jpg", 
     deal: "Hello, I am Steve Jobs, the owner of the American corporation Apple. In 2019, we plan to launch the new Iphon XI. It will be the best device available all over the world. Iphone X1 will have a built-in projector. We have heard that you are interested in investing in it! How much money do you want to invest?"
    }, 

     {
     name: "Nokia", 
     photo: "img/investors/nokia.jpg", 
     deal: "Hello, we are the management board of the Finnish company Nokia. By 2020, we plan to launch a new operating system for our smartphones. We have heard that you are interested in investing in it! How much money do you want to invest?"
    }
    ];

    const endGame = () => {
    document.getElementById("totalearnings").innerHTML = `Total Earnings: ${currentFunds}$`;
    gameArea.style = "display: none";
    endGameArea.style = "display: inline-block";

    resetGame.addEventListener("click", function() {
        currentFunds = 100000;
        payment = 0;
        rate = 0;
        counter = 0;
        newArea();
    })
}


        const newAreaFinish = () => {
            endGame();
        }

    const paymentMoney = () => {
    winArea.style = "display: none";
    currentFunds = currentFunds + payment;
    moneyArea.innerHTML = `Your money: ${currentFunds}$`;
    if(currentFunds == 0) {
    endGame();
    }
    else if(counter == 5) {
        newAreaFinish(); 
    }
    else {
       newArea();
    }

}

const sendMoney = () => {
    infoWin.style = "display: none";
    if(amountMoney.value > currentFunds || amountMoney.value < 1) {
        infoWin.innerHTML = "You do not have that much money!";
        infoWin.style = "display: inline-block";
    }

    else {
        counter++;
        infoWin.style = "display: none";
        currentFunds = currentFunds - amountMoney.value;
        moneyArea.innerHTML = `Your money: ${currentFunds}$`;
        rate = (Math.random() * (0 - 2) + 2).toFixed(1);
        payment = Math.round(amountMoney.value * rate);
        amoutWin.innerHTML = `Investment: ${payment}$`;
        winArea.style = "display: inline-block";
        area.style = "display: none";
    }
}

    receive.addEventListener("click", function() {
        paymentMoney();
    });

    betAllFunds.addEventListener("click", function(){
        amountMoney.value = currentFunds;
    });

    betHalfFunds.addEventListener("click", function(){
        amountMoney.value = (currentFunds/2);
    });

const newArea = () => {
    endGameArea.style = "display: none";
    endGameArea.style = "display: none";
    amountMoney.value = "";
    nickArea.innerHTML = `Your name: ${nick}`;
    moneyArea.innerHTML = `Your money: ${currentFunds}$`;
    InvestorNameArea.innerHTML = Investors[counter].name;
    InvestorPhotoArea.setAttribute("src", Investors[counter].photo);
    InvestorDealArea.innerHTML = Investors[counter].deal;
    winArea.style = "display: none";
    gameArea.style = "display: inline-block";
    area.style = "display: inline-block";
}

    amountMoney.addEventListener("keypress", function(e) {
        if(e.keyCode == 13) {
        sendMoney(); 
        }
    });

    sendBtn.addEventListener("click", function() {
        sendMoney();
    });

const startGame = () => {
    if(nickName.value.length < 1) {
        info.innerHTML = "You must write your name!";
        info.style = "opacity: 1";
    }

    else if(nickName.value.length > 15) {
        info.innerHTML = "Your name is too long!";
        info.style = "opacity: 1";
    }

    else {
        nick = nickName.value;
        home.classList.add("hide");
        endGameArea.classList.add("hide");
        newArea();
    }
}
startBtn.addEventListener("click", startGame);