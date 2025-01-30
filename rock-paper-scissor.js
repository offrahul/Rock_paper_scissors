let userScore=0;
let computerScore=0;

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userchoice=choice.getAttribute("id");
           // console.log("choice was clicked", userchoice);
            playGame(userchoice);
        })
}) ;  


const genComputchoice=()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissor
    const randIdx=Math.floor(Math.random()* 3);
return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin, userchoice,compChoice)=>{
    if(userwin){
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText=`you win. Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    }else{
        
        computerScore++;
        compScorepara.innerText=computerScore;
        msg.innerText=`you lose. ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

//Generate computer choice-> modular

const playGame=(userchoice)=>{ 
   // console.log("user choice=",userchoice);
    const compChoice=genComputchoice();
  //  console.log("comp choice=",compChoice);
    if(userchoice==compChoice){
        //draw game
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
           // compchoice=scissors,rock;
          userwin= compChoice==="paper" ? false:true;
        }else if(userchoice==="paper"){//userchoice=paper
            //compchoice=rock,scissors
            userwin= compChoice==="scissors" ? false:true;

        }else{
            //userchoice=scissors//,      //compchoice=rock,paper

            userwin= compChoice==="rock" ?false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }

}
