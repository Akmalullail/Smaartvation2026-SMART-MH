const chatBox = document.getElementById("chatBox")

function sendAnswer(text){

addUserMessage(text)

showTyping()

setTimeout(()=>{

removeTyping()

addAIMessage("Terimakasih atas respon Anda. Mari beranjak ke pertanyaan selanjutnya.")

},1200)

}

function addUserMessage(text){

const message = document.createElement("div")
message.className="message user"

message.innerHTML=`
<div class="bubble">${text}</div>
`

chatBox.appendChild(message)

scrollBottom()

}

function addAIMessage(text){

const message = document.createElement("div")
message.className="message ai"

message.innerHTML=`
<div class="bubble">${text}</div>
`

chatBox.appendChild(message)

scrollBottom()

}

function showTyping(){

const typing=document.createElement("div")
typing.className="message ai typing"
typing.id="typing"

typing.innerHTML=`
<div class="bubble">AI sedang mengetik...</div>
`

chatBox.appendChild(typing)

scrollBottom()

}

function removeTyping(){

const typing=document.getElementById("typing")
if(typing) typing.remove()

}

function scrollBottom(){

chatBox.scrollTop = chatBox.scrollHeight

}

let finished = false;

function finishChat(){
    const btn = document.getElementById('finishBtn');
    if (!finished) {
        // first click: show final message and mark finished
        addAIMessage("Terima kasih! Proses selesai.");
        finished = true;
        if(btn) btn.textContent = 'Klik lagi untuk lanjut';
    } else {
        // second click: go to next page
        window.location.href = '2Bubble.html';
    }
}