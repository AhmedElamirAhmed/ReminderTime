/*--- بسم الله الرحمن الرحيم ----*/
/*-------------------------*/




window.onload = setTimeout(function(){

document.getElementById("door-left").style.backgroundColor = "rgba(113, 88, 226,0.5)";
document.getElementById("door-right").style.backgroundColor = "rgba(113, 88, 226,0.5)";},3000)
setTimeout(function(){

document.getElementById("door-left").style.backgroundColor = "rgba(113, 88, 226,0.5)";
document.getElementById("door-right").style.backgroundColor = "rgba(113, 88, 226,0.5)";
document.getElementById("door-left").style.width = "0px";
document.getElementById("door-right").style.width = "0px";

},5000)


/*---------------------------------------------------------*/
//===> for input
function myinput (x){
    x.value = "";
}
//===>Dentist
document.getElementById("dentist-main-img").onclick =function(){
    let audio = new Audio("Audio/dentistwearwhitecoat.mp3");
    audio.play();

document.getElementById('dentist').style.opacity = "1";
document.getElementById("dentist").style.transform = "translate(150px, 0)";
document.getElementById('dentist').style.width = "200px";
document.getElementById('dentist').style.height = "300px";
document.getElementById('dentist1').style.opacity = "1";
document.getElementById('dentist1').style.color = "red";


    setTimeout(function(){
document.getElementById('coat').style.opacity = "1";
document.getElementById("coat").style.transform = "translate(-80px, 0)";
document.getElementById('coat').style.width = "200px";
document.getElementById('coat').style.height = "300px";
document.getElementById('coat1').style.opacity = "1";
document.getElementById('coat1').style.color = "red";
    },8000);
    setTimeout(function(){
document.getElementById('the1').style.opacity = "1";
document.getElementById('a-white').style.opacity = "1";
document.getElementById('wear1').style.opacity = "1";

    },13000)};
//===>Engineer
document.getElementById("engineer-main-img").onclick =function(){
    let audio = new Audio("Audio/engineerwearshirt.mp3");
    audio.play();
document.getElementById('shirt').style.opacity = "1";
document.getElementById("shirt").style.transform = "translate(150px, 0)";
document.getElementById('shirt').style.width = "200px";
document.getElementById('shirt').style.height = "300px";
document.getElementById('shirt1').style.opacity = "1";
document.getElementById('shirt1').style.color = "red";
    
    setTimeout(function(){
document.getElementById('engineer').style.opacity = "1";
document.getElementById("engineer").style.transform = "translate(-80px, 0)";
document.getElementById('engineer').style.width = "200px";
document.getElementById('engineer').style.height = "300px";
document.getElementById('engineer1').style.opacity = "1";
document.getElementById('engineer1').style.color = "red";
    },4000);
    setTimeout(function(){
document.getElementById('my').style.opacity = "1";
document.getElementById('like').style.opacity = "1";
document.getElementById('ss').style.opacity = "1";

    },8000)
}
//===>WaiterSuit
document.getElementById("waiterSuit-main-img").onclick =function(){
    let audio = new Audio("Audio/waitersuittie.mp3");
    audio.play();
document.getElementById('suit').style.opacity = "1";
document.getElementById("suit").style.transform = "translate(200px, 0)";
document.getElementById('suit').style.width = "200px";
document.getElementById('suit').style.height = "300px";
document.getElementById('suit1').style.opacity = "1";
document.getElementById('suit1').style.color = "red";
    
    setTimeout(function(){
document.getElementById('tie').style.opacity = "1";
document.getElementById("tie").style.transform = "translate(-20px, 0)";
document.getElementById('tie').style.width = "200px";
document.getElementById('tie').style.height = "300px";
document.getElementById('tie1').style.opacity = "1";
document.getElementById('tie1').style.color = "red";
    },6000);
    
    setTimeout(function(){
document.getElementById('waiter').style.opacity = "1";
document.getElementById("waiter").style.transform = "translate(-240px, 0)";
document.getElementById('waiter').style.width = "200px";
document.getElementById('waiter').style.height = "300px";
document.getElementById('waiter1').style.opacity = "1";
document.getElementById('waiter1').style.color = "red";
    },11000);
    setTimeout(function(){
document.getElementById('the2').style.opacity = "1";
document.getElementById('wear2').style.opacity = "1";
document.getElementById('and').style.opacity = "1";

    },16000)
}
//===>WaiterVest
document.getElementById("waiterVest-main-img").onclick =function(){
    let audio = new Audio("Audio/WAITERVESTBOWTIE.mp3");
    audio.play();
document.getElementById('bowtie').style.opacity = "1";
document.getElementById("bowtie").style.transform = "translate(200px, 0)";
document.getElementById('bowtie').style.width = "200px";
document.getElementById('bowtie').style.height = "300px";
document.getElementById('bowtie1').style.opacity = "1";
document.getElementById('bowtie1').style.color = "red";
    
    setTimeout(function(){
document.getElementById('vest').style.opacity = "1";
document.getElementById("vest").style.transform = "translate(-20px, 0)";
document.getElementById('vest').style.width = "200px";
document.getElementById('vest').style.height = "300px";
document.getElementById('vest1').style.opacity = "1";
document.getElementById('vest1').style.color = "red";
    },6000);
    
    setTimeout(function(){
document.getElementById('the3').style.opacity = "1";
document.getElementById('waiter2').style.opacity = "1";
document.getElementById('and1').style.opacity = "1";

    },10000)
}
//===>Waitress
document.getElementById("waitress-main-img").onclick =function(){
    let audio = new Audio("Audio/waitresswearsaskirt.mp3");
    audio.play();
document.getElementById('skirt').style.opacity = "1";
document.getElementById("skirt").style.transform = "translate(200px, 0)";
document.getElementById('skirt').style.width = "200px";
document.getElementById('skirt').style.height = "300px";
document.getElementById('skirt1').style.opacity = "1";
document.getElementById('skirt1').style.color = "red";
    
    setTimeout(function(){
document.getElementById('waitress').style.opacity = "1";
document.getElementById("waitress").style.transform = "translate(-20px, 0)";
document.getElementById('waitress').style.width = "200px";
document.getElementById('waitress').style.height = "300px";
document.getElementById('waitress1').style.opacity = "1";
document.getElementById('waitress1').style.color = "red";
    },4000);
    
    setTimeout(function(){
document.getElementById('the4').style.opacity = "1";
document.getElementById('wear3').style.opacity = "1";

    },8000)
}

//===> tailor
document.getElementById("tailor-main-img").onclick =function(){
    let audio = new Audio("Audio/tailorvideo.mp3");
    audio.play();
document.getElementById('sew').style.opacity = "1";
document.getElementById("sew").style.transform = "translate(200px, 0)";
document.getElementById('sew').style.width = "200px";
document.getElementById('sew').style.height = "300px";
document.getElementById('sew1').style.opacity = "1";
document.getElementById('sew1').style.color = "red";
    
    setTimeout(function(){
document.getElementById('tailor').style.opacity = "1";
document.getElementById("tailor").style.transform = "translate(-20px, 0)";
document.getElementById('tailor').style.width = "200px";
document.getElementById('tailor').style.height = "300px";
document.getElementById('tailor1').style.opacity = "1";
document.getElementById('tailor1').style.color = "red";
    },4000);
    
    setTimeout(function(){
document.getElementById('my1').style.opacity = "1";
document.getElementById('but').style.opacity = "1";

    },8000)
}

//===> uniform
document.getElementById("uniform-main-img").onclick =function(){
    let audio = new Audio("Audio/uniform.mp3");
    audio.play();
document.getElementById('jacket').style.opacity = "1";
document.getElementById("jacket").style.transform = "translate(-240px, 46px)";
document.getElementById('jacket').style.width = "200px";
document.getElementById('jacket').style.height = "300px";
document.getElementById('jacket1').style.opacity = "1";
document.getElementById('jacket1').style.color = "red";
    
    setTimeout(function(){
document.getElementById("jacket").style.transform = "translate(275px, -11px)";
document.getElementById('jacket').style.width = "150px";
document.getElementById('jacket').style.height = "250px";
document.getElementById('pants').style.opacity = "1";
document.getElementById("pants").style.transform = "translate(-240px, 46px)";
document.getElementById('pants').style.width = "200px";
document.getElementById('pants').style.height = "300px";
document.getElementById('pants1').style.opacity = "1";
document.getElementById('pants1').style.color = "red";
    },4000);
    setTimeout(function(){
document.getElementById("pants").style.transform = "translate(110px, -11px)";
document.getElementById('pants').style.width = "150px";
document.getElementById('pants').style.height = "250px";
document.getElementById('firefighter').style.opacity = "1";
document.getElementById("firefighter").style.transform = "translate(-240px, 46px)";
document.getElementById('firefighter').style.width = "200px";
document.getElementById('firefighter').style.height = "300px";
document.getElementById('firefighter1').style.opacity = "1";
document.getElementById('firefighter1').style.color = "red";
    },9000);
    setTimeout(function(){
document.getElementById("firefighter").style.transform = "translate(-60px, -11px)";
document.getElementById('firefighter').style.width = "150px";
document.getElementById('firefighter').style.height = "250px";
document.getElementById('uniform').style.opacity = "1";
document.getElementById("uniform").style.transform = "translate(-260px, 46px)";
document.getElementById('uniform').style.width = "200px";
document.getElementById('uniform').style.height = "300px";
document.getElementById('uniform1').style.opacity = "1";
document.getElementById('uniform1').style.color = "red";
    },13000);
    
    setTimeout(function(){
document.getElementById("uniform").style.transform = "translate(-230px, -11px)";
document.getElementById('uniform').style.width = "150px";
document.getElementById('uniform').style.height = "250px";
document.getElementById('thef').style.opacity = "1";
document.getElementById('wearsf').style.opacity = "1";
document.getElementById('andf').style.opacity = "1";
document.getElementById('itf').style.opacity = "1";


    },17000);
}

//===> sweatshirt
document.getElementById("sweatshirt-main-img").onclick =function(){
    let audio = new Audio("Audio/sweatshirtvideo.mp3");
    audio.play();
document.getElementById('sweatshirt').style.opacity = "1";
document.getElementById("sweatshirt").style.transform = "translate(200px, 0)";
document.getElementById('sweatshirt').style.width = "200px";
document.getElementById('sweatshirt').style.height = "300px";
document.getElementById('sweatshirt1').style.opacity = "1";
document.getElementById('sweatshirt1').style.color = "red";
    
    setTimeout(function(){
document.getElementById('coach').style.opacity = "1";
document.getElementById("coach").style.transform = "translate(-20px, 0)";
document.getElementById('coach').style.width = "200px";
document.getElementById('coach').style.height = "300px";
document.getElementById('coach1').style.opacity = "1";
document.getElementById('coach1').style.color = "red";
    },5500);
    
    setTimeout(function(){
document.getElementById('myw').style.opacity = "1";
document.getElementById('wearw').style.opacity = "1";

    },8000)
}

//===> sweater
document.getElementById("sweater-main-img").onclick =function(){
    let audio = new Audio("Audio/sweatervideo.mp3");
    audio.play();
document.getElementById('sweater').style.opacity = "1";
document.getElementById("sweater").style.transform = "translate(200px, 0)";
document.getElementById('sweater').style.width = "200px";
document.getElementById('sweater').style.height = "300px";
document.getElementById('sweater1').style.opacity = "1";
document.getElementById('sweater1').style.color = "red";
    
    setTimeout(function(){
document.getElementById('myww').style.opacity = "1";
    },7500);
}

//===> boots
document.getElementById("boot-main-img").onclick =function(){
    let audio = new Audio("Audio/boots.mp3");
    audio.play();
document.getElementById('boot').style.opacity = "1";
document.getElementById("boot").style.transform = "translate(-240px, 46px)";
document.getElementById('boot').style.width = "200px";
document.getElementById('boot').style.height = "300px";
document.getElementById('boot1').style.opacity = "1";
document.getElementById('boot1').style.color = "red";
    
    setTimeout(function(){
document.getElementById("boot").style.transform = "translate(275px, -11px)";
document.getElementById('boot').style.width = "150px";
document.getElementById('boot').style.height = "250px";
document.getElementById('army').style.opacity = "1";
document.getElementById("army").style.transform = "translate(-240px, 46px)";
document.getElementById('army').style.width = "200px";
document.getElementById('army').style.height = "300px";
document.getElementById('army1').style.opacity = "1";
document.getElementById('army1').style.color = "red";
    },4000);
    setTimeout(function(){
document.getElementById("army").style.transform = "translate(110px, -11px)";
document.getElementById('army').style.width = "150px";
document.getElementById('army').style.height = "250px";
document.getElementById('soldier').style.opacity = "1";
document.getElementById("soldier").style.transform = "translate(-240px, 46px)";
document.getElementById('soldier').style.width = "200px";
document.getElementById('soldier').style.height = "300px";
document.getElementById('soldier1').style.opacity = "1";
document.getElementById('soldier1').style.color = "red";
    },9000);
    setTimeout(function(){
document.getElementById("soldier").style.transform = "translate(-60px, -11px)";
document.getElementById('soldier').style.width = "150px";
document.getElementById('soldier').style.height = "250px";
document.getElementById('thef').style.opacity = "1";
document.getElementById('wear4').style.opacity = "1";
    },16000);
}

//===> lawyer
document.getElementById("lawyer-main-img").onclick =function(){
    let audio = new Audio("Audio/lawyer.mp3");
    audio.play();
document.getElementById('lawyer').style.opacity = "1";
document.getElementById("lawyer").style.transform = "translate(200px, -31px)";
document.getElementById('lawyer').style.width = "200px";
document.getElementById('lawyer').style.height = "300px";
document.getElementById('lawyer1').style.opacity = "1";
document.getElementById('lawyer1').style.color = "red";
    
    setTimeout(function(){
document.getElementById('some').style.opacity = "1";
document.getElementById('wear5').style.opacity = "1";
document.getElementById('wear6').style.opacity = "1";
document.getElementById('lawyer2').style.color = "red";

    },7500);
}


