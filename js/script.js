const mailElem = document.getElementById("mail");
const refreshBtn = document.getElementById("refresh");

function randomMail(){
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
            mailElem.innerHTML += `<a href=""><li>${resp.data.response}</li></a>`;
            })   
        }
    };
randomMail();
refreshBtn.addEventListener("click", randomMail);