const games = {
    level1:{
        images: ["./level1/horse.PNG", "./level1/horse2.PNG", "./level1/horse3.PNG", "./level1/horse4.PNG" ],
        answers: "horse",
        letters: ['h', 'f', 'g', 'n', 'e', 'r', 'p', 's', 'd', 'k', 'o', 'l']
    },
    level2:{
        images: ["./level2/c1.PNG", "./level2/c2.PNG", "./level2/c3.PNG", "./level2/c4.PNG"],
        answers: "cat",
        letters: ['h', 'f', 'a', 'n', 'e', 'c', 'p', 's', 'd', 'k', 't', 'l']
    },   
    level3:{
        images: ["./level3/r1.PNG", "./level3/r2.PNG", "./level3/r3.PNG", "./level3/r4.PNG" ],
        answers: "rabbit",
        letters: ['t', 'f', 'i', 'n', 'e', 'r', 'b', 's', 'd', 'b', 'o', 'a']
    },
    level4:{
        images: ["./level4/l1.PNG", "./level4/l2.PNG", "./level4/l3.PNG", "./level4/l4.PNG"],
        answers: "lion",
        letters: ['h', 'o', 'a', 'n', 'e', 'c', 'p', 'i', 'd', 'k', 't', 'l']
    },
    level5:{
        images: ["./level5/sh1.PNG", "./level5/sh2.PNG", "./level5/sh3.PNG", "./level5/sh4.PNG" ],
        answers: "sheep",
        letters: ['h', 'f', 'i', 'n', 'e', 'r', 'b', 's', 'e', 'p', 'o', 'a']
    },
    level6:{
        images: ["./level6/w1.PNG", "./level6/w2.PNG", "./level6/w3.PNG", "./leve6/w4.PNG"],
        answers: "wolf",
        letters: ['h', 'o', 'a', 'w', 'e', 'c', 'p', 'i', 'd', 'f', 't', 'l']
    }
}

let player = {
    level: 1,
    answer: ''
}

function beginGames(){
    document.querySelector('.images').innerHTML =""
    document.getElementById('answer').innerHTML =""
    document.querySelector('.letter-box').innerHTML = ""
 for(let i = 0; i < games[`level${player.level}`].images.length; i++){
    let html = `
    <div class="box"><img src="${games[`level${player.level}`].images[i]}" alt=""></div>
    `
    document.querySelector('.images').innerHTML += html
 }
 for (let i = 0; i < games[`level${player.level}`].answers.length; i++){
    let html = `
    <div class="ans-box" onclick="rev(this)"></div>
    `
    document.getElementById('answer').innerHTML += html
 }
 for(let i =0; i < games[`level${player.level}`].letters.length; i++){
    let html = `
    <div onclick="handlerButton(this)" class="let-box">${games[`level${player.level}`].letters[i]}</div>
    `
    document.querySelector('.letter-box').innerHTML += html
 }
}
beginGames()
function adding(){
    let ans = document.querySelectorAll('.ans-box')
    ans[0].textContent =   games[`level${player.level}`].answers[0]
   
    let price = document.getElementById('price')
    
    if(price.textContent <= 0){
        price.textContent = "0"
        ans[0].textContent = ""
        player.answer = ""
    }
    else{
        price.textContent = +price.textContent - 4 
        player.answer = ans[0].textContent
    }
}


function handlerButton  (btn){
    let ans = document.querySelectorAll('.ans-box')

    for(let i = 0; i < ans.length; i++ ){
        if(ans[i].textContent ===""){
            ans[i].textContent = btn.textContent
            player.answer += btn.textContent
            btn.style.visibility = "hidden"
            if (player.answer.length === games[`level${player.level}`].answers.length) checkProcess()
            break
        }
    }
}

function checkProcess(){
    let ans = document.querySelectorAll('.ans-box')
    let lbox = document.querySelectorAll('.let-box')
    let lev = document.getElementById('levels')
    if(player.answer === games[`level${player.level}`].answers){
        player.answer =""
        player.level = player.level +1
        console.log(player.answer)
        let price = document.getElementById('price')
        price.textContent = +price.textContent+ Number(document.querySelector('.bt').textContent)
        lev.textContent = player.level
        
        beginGames()
    }
    else{
        for(let i =0; i < ans.length; i++){
            ans[i].textContent = ""

        }
        for(let i =0; i < lbox.length; i++){
            lbox[i].style.visibility = 'visible'
            player.answer = ''
        }
    }
}

function rev(bt){
    let ansBox = document.querySelectorAll('.ans-box')
    let lbox = document.querySelectorAll('.let-box')
    bt.textContent = ''
    player.answer = ''
    player.answer.length = ''
    for(let i =0; i < lbox.length; i++){ 
    lbox[i].style.visibility = 'visible'
        player.answer = ''
    }
}