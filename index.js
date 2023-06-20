var score_1 = 0;
var score_2 = 0;
var s1 = document.querySelector(".score1").innerHTML;
var s2 = document.querySelector(".score2").innerHTML;
document.querySelector(".score1").innerHTML = s1 + score_1;
document.querySelector(".score2").innerHTML = s2 + score_2;
document.querySelector(".btn button").addEventListener("click", function(){

    var randomNUmber1 = Math.random();
    randomNUmber1 = Math.floor(randomNUmber1*6 +1);
    

    document.querySelector("img").setAttribute("src","dice" + randomNUmber1 + ".png");
    var randomNUmber2 = Math.random();
   

    randomNUmber2 = Math.floor(randomNUmber2*6 +1);
    document.querySelector(".img2").setAttribute("src","dice" + randomNUmber2 + ".png");
    
    if (randomNUmber1 > randomNUmber2){
        document.querySelector("h1").innerHTML = "🚩 Player Wins!!";
        score_1 = score_1+1;
        
        document.querySelector(".score1").innerHTML = s1 + score_1;
    }
    else if(randomNUmber1===randomNUmber2){
        document.querySelector("h1").innerHTML = "--Match Draw--";
    }
    else{
        document.querySelector("h1").innerHTML = "Computer 🚩";
        score_2 +=1;
        document.querySelector(".score2").innerHTML = s2 + score_2;
    }
    
});






