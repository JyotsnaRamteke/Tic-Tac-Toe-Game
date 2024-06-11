let btns=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#rst");
let count=0;
console.log(btns);
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8] 
]

let urturn=true;

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       
        if(urturn){
            btn.innerText="O";
            btn.setAttribute("style","color:red")
            urturn=false;
        }
        else{
            btn.innerText="X";
            btn.setAttribute("style","color:yellow")
            urturn=true;
        }
      
        count++
    
    let iswinner=winner()
    if(count===9 && !iswinner){
        let para=document.querySelector("p").innerText="The game has draw";
    }
        btn.disabled=true
       
       
    })
    console.log(count);
});


btns.forEach((btn)=>{
resetbtn.addEventListener("click",()=>{
    count=0;
    urturn=true;
    btn.disabled=false;
    console.log( btn.innerText="");
    let para=document.querySelector("p").innerText="";
   
    
})
});
const disableboxes=()=>{
   
    for (let btn of btns){
        btn.disabled=true;

    }
}

const winner=()=>{
    for(let pattern of winpattern){
        
       console.dir([btns[pattern[0]]]);

      let positval0=btns[pattern[0]].innerText;
      let positval1=btns[pattern[1]].innerText;
      let positval2=btns[pattern[2]].innerText;
      console.log(positval0,positval1,positval2);
    if(positval0 != "" && positval1 !="" && positval2 !="") {
        if(positval0===positval1 && positval1===positval2){
            console.log('winner');
            let para=document.querySelector("p").innerText="winner is"+' '+positval0;
          
            disableboxes();
            
           
        }
     

    }
}
}

