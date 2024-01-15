let messageText = document.querySelector('.message-input');
let sendButton = document.querySelector('.send-Button');
let chat = document.querySelector('.messages')
let obaidButton = document.querySelector('.obaid-Button');
let dinaButton = document.querySelector('.dina-Button')
let nameOfchat = document.querySelector('.name');
let user = "obaid";


obaidButton.addEventListener('click',()=>{
nameOfchat.innerHTML = 'Dina';
obaidButton.style.backgroundColor = 'royalBlue';
obaidButton.style.color = 'white';
dinaButton.style.backgroundColor = 'white';
dinaButton.style.border = '1px solid royalBlue';
dinaButton.style.color = 'royalBlue';
user = "obaid";
})
dinaButton.addEventListener('click',()=>{
nameOfchat.innerHTML = 'Obaid';
dinaButton.style.backgroundColor = 'royalBlue';
dinaButton.style.color = 'white';
obaidButton.style.backgroundColor = 'white';
obaidButton.style.border = '1px solid royalBlue';
obaidButton.style.color = 'royalBlue';
user = "dina";
})



sendButton.addEventListener("click",function(){
    let time = new Date()
    if(messageText.value !== ""){
    if(user == "obaid"){
    let div = document.createElement("div")
    div.classList.add("ObaidmessageSender")
    div.innerHTML += `<div class="imgOfSender"></div><p class="senderName">${user}</p> <p class="msgg">${messageText.value}</p> <p class="time"> ${time.getHours()}:${time.getMinutes()} </p>`
    chat.appendChild(div)
    div.style.backgroundColor ='#2c51c1';
    messageText.value = ""
    }
    if(user == "dina"){
    let div = document.createElement("div")
    div.classList.add("ObaidmessageSender")
    div.innerHTML += `<div class="imgOfSender"></div><p class="senderName">${user}</p> <p class="msgg">${messageText.value}</p> <p class="time"> ${time.getHours()}:${time.getMinutes()} </p>`
    chat.appendChild(div)
    messageText.value = ""
     }}
   })

// 


