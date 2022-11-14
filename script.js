const btn1 = document.querySelector('.btn-send');
const btn2 = document.querySelector('.btn-show');
const list = document.querySelector('.history');

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message{
    constructor(author, history, text) {
        this.author = author;
        this.history = history;
        this.text = text;
    }
    toHtml(){
        var a = String(`${this.history} ${this.author}: ${this.text}`);
        return a;
    }
}
let array = [];
class Messenger extends Message{
    show_history(){
        let labels = document.querySelectorAll(".labelClass");
        labels.forEach((item)=>{
            item.remove();
        })
        for(let i = 0; i < array.length; i++){
            let newLabel = document.createElement("label");
            list.append(newLabel);
            newLabel.classList.add("labelClass");
            newLabel.innerHTML = array[i];
            console.log(array[i]);
        }
    }
    send(author, text){
        this.author = author;
        this.text = text;
        this.history = gettime();
        array.push(this.toHtml());
    }
}
let messenger = new Messenger()
btn1.addEventListener("click",()=>{
    let name = document.querySelector('#name').value;
    let text = document.querySelector('#message').value;
    messenger.send(name, text);
    document.querySelector('#name').value = '';
    document.querySelector('#message').value = '';
})
btn2.addEventListener('click', ()=>{
    messenger.show_history();
})