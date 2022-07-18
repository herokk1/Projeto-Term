// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

//Som de Tecla
const tec = document.querySelector('#tec')
//Músicas
const boogie = document.querySelector("#boogiee")
const inkspots = document.querySelector("#inkspots")
const fox = document.querySelector("#fox")
const billie = document.querySelector("#billie")

const whitenoise = document.querySelector("#whitenoise")


//Login
const bloco = document.querySelector('#infoblock')
const btn = document.querySelector('#btninit')
const getspace = document.querySelector('#getdiv')

btn.addEventListener('click', function (e) {
    e.preventDefault();

    tec.play()

    const login = document.querySelector('#logininit');
    const password = document.querySelector('#passinit');

    var valorlogin = login.value;
    var valorpass = password.value;

    console.log(valorlogin);
    console.log(valorpass);

    if (valorlogin == "admin" && valorpass == "admin") {
        bloco.classList.remove("hidden")
        getspace.classList.remove("hidden")
        whitenoise.play()
        btn.classList.add("hidden")
    }
});

//Sumário

//Decoração

//ASCII
const anime = document.querySelector("#anime")
const box = document.querySelector("boombox")

//Botão Get
const getbtn = document.querySelector("#getg")
//Botão Getsong
const getsongbtn = document.querySelector("#getsongbtn")
//Botão Stop
const stopp = document.querySelector("#stop")
stopp.addEventListener("click", function(j){
    boogie.pause()
    inkspots.pause()
    fox.pause()
    billie.pause()
})

//Bloco Help
const opcoes = document.querySelector("#opt")
//Bloco Time
const horario = document.querySelector("#tempoaba")
//Bloco Songs
const musicas = document.querySelector("#songsaba")

//Botão GET

getbtn.addEventListener('click', function (f) {
    f.preventDefault();

    tec.play()

    const getobj = document.querySelector('#getobj')

    var valorget = getobj.value;

    console.log(valorget)

    if (valorget == "help") {
        getspace.classList.add("hidden")
        opcoes.classList.remove("hidden")
        limpar.classList.remove("hidden")
    }
    if (valorget == "time") {
        getspace.classList.add("hidden")
        horario.classList.remove("hidden")
        limpar.classList.remove("hidden")
    }
    if (valorget == "logoff") {
        getspace.classList.add("hidden")
        bloco.classList.add("hidden")
        btn.classList.remove("hidden")
        fixon.classList.remove("underline")
        fixoff.classList.add("underline")
        listinha.classList.add("hidden")
        clockon.classList.remove("underline")
        clockoff.classList.add("underline")
        clockzinho.classList.add("hidden")
    }
    if (valorget == "songs") {
        getspace.classList.add("hidden")
        musicas.classList.remove("hidden")
        limpar.classList.remove("hidden")
        anime.classList.add("hidden")

        getsongbtn.addEventListener("click",function(x){

            x.preventDefault();

            tec.play();

            const getsong = document.querySelector("#getsong");
            const valorgetsong = getsong.value;

            

            if(valorgetsong == "1" || valorgetsong == "boogieman" || valorgetsong == "boogieman.mp3"){
                boogie.play()
                inkspots.pause()
                fox.pause()
                billie.pause()
            }
            if(valorgetsong == "2" || valorgetsong == "theinkspots" || valorgetsong == "theinkspots.mp3"){
                boogie.pause()
                inkspots.play()
                fox.pause()
                billie.pause()
            }
            if(valorgetsong == "3" || valorgetsong == "gerhardtrede" || valorgetsong == "gerhardtrede.mp3"){
                boogie.pause()
                inkspots.pause()
                fox.play()
                billie.pause()
            }
            if(valorgetsong == "4" || valorgetsong == "easyliving" || valorgetsong == "easyliving.mp3"){
                boogie.pause()
                inkspots.pause()
                fox.pause()
                billie.play()
            }
        })
    }

})

//Help - Fixar na lateral

const fixon = document.querySelector("#fixon")
const fixoff = document.querySelector("#fixoff")
const listinha = document.querySelector("#helpfix")

fixon.addEventListener("click", function(a){
    fixon.classList.add("underline")
    fixoff.classList.remove("underline")
    listinha.classList.remove("hidden")
})

fixoff.addEventListener("click", function(b){
    fixon.classList.remove("underline")
    fixoff.classList.add("underline")
    listinha.classList.add("hidden")
})

//Relogio

const clockon = document.querySelector("#clockon")
const clockoff = document.querySelector("#clockoff")
const clockzinho = document.querySelector("#clock2")

clockon.addEventListener("click", function(g){
    clockon.classList.add("underline")
    clockoff.classList.remove("underline")
    clockzinho.classList.remove("hidden")
})

clockoff.addEventListener("click", function(g){
    clockon.classList.remove("underline")
    clockoff.classList.add("underline")
    clockzinho.classList.add("hidden")
})

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;
    document.getElementById("clock2").innerText = time; 
    let t = setTimeout(function () { currentTime() }, 1000);
}

const limpar = document.querySelector("#clean")

limpar.addEventListener('click',function(g){

    tec.play()

    getspace.classList.remove("hidden")
    anime.classList.remove("hidden")

    horario.classList.add("hidden")
    opcoes.classList.add("hidden")
    musicas.classList.add("hidden")
    limpar.classList.add("hidden")

})

currentTime();
