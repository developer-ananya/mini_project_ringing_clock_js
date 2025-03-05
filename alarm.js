
let inn

inn=setInterval(()=>{
let now=new Date()
let timer = document.querySelector("#timer")

timer.innerHTML=now.toLocaleTimeString()

},1000)


let boldd=document.querySelector("#bold")

let clockk=()=>
{
    
    let alarminp=document.querySelector("#inp").value
    let musicc=document.querySelector("#music")
    let vid=document.querySelector("#vid")


    if(!alarminp){
        boldd.innerHTML="Select valid time"

    }


    inn=setInterval(()=>{

    let now=new Date()
    let currenttime= `${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}`
   


    if(alarminp){

        if( currenttime==alarminp)
        {
            musicc.play()
            vid.play()
            boldd.innerHTML=" ⏰ alarm is ringing..."

    }
    else
    {
        boldd.innerHTML="Alarm is set for "+ alarminp
    }
}   
},1000)


}

let stop=()=>
{
    setTimeout(() => {
        clearInterval(inn)
        music.pause()
        vid.pause()
        boldd.innerHTML="Alarm stopped"
    })
}



