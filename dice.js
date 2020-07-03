var player1=prompt("Player1:Enter your name");
if(player1 === ""){
    console.log("what!");
    player1="Player1";
}
document.getElementById("p1").innerHTML=player1;

var player2=prompt("Player2:Enter your name");
if(player2 === ""){
    player2="Player2";
}
document.getElementById("p2").innerHTML=player2;

var playerFlag1=false,playerFlag2=false;
var num1,num2;

  function play1() {
    if (playerFlag1 === false) {
      playerFlag1 = true;
      num1 = Math.floor(Math.random() * 6) + 1;
      var selectImage1 = "images/dice" + num1 + ".png";
      document.querySelector(".dice .img1").setAttribute("src", selectImage1);
    } else {
      document.querySelector("#result").innerHTML =
        "<h4>Hey, it's " + player2 + "'s chance</h4>";
    }
    if(playerFlag2 === true){
        check();
    }
  }



  function play2() {
    if (playerFlag2 === false) {
      playerFlag2 = true;
      num2 = Math.floor(Math.random() * 6) + 1;
      var selectImage2 = "images/dice" + num2 + ".png";
      document.querySelector(".dice .img2").setAttribute("src", selectImage2);
    } else {
      document.querySelector("#result").innerHTML =
        "Hey, it's " + player1 + "'s chance";
    }
    if(playerFlag1 === true){
        check();
    }
  }


function check(){
    if(num1>num2){
        document.getElementsByTagName("h1")[0].innerHTML=player1+" Wins!";
        document.querySelector("h1").style.color="green";
    }
    else if(num1==num2){
        document.getElementsByTagName("h1")[0].innerHTML="Draw";
        document.querySelector("h1").style.color="green";
    }
    else{
        document.getElementsByTagName("h1")[0].innerHTML=player2+" Wins!";
        document.querySelector("h1").style.color="green";
    }
    console.log(player1);
}


