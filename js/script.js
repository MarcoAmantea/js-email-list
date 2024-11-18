const mailElem = document.getElementById("mail");
const refreshBtn = document.getElementById("refresh")

function randomMail(numEmail){
    for (let i = 0; i < numEmail; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
            mailElem.innerHTML += `<a href=""><li>${resp.data.response}</li></a>`    
        })
    };
}
randomMail(10)
