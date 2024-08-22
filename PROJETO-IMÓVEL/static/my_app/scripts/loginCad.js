document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');
});

let eye = document.getElementById('eye')
let att = false
let attInfo = false
function change(type){
  if (type == 'eye') {
    if (!att) {
      eye.classList.remove('fa-eye-slash')
      eye.classList.add('fa-eye')
      att = true
      document.getElementById('pass').type = 'text'
    }else{
      eye.classList.remove('fa-eye')
      eye.classList.add('fa-eye-slash')
      att = false
      document.getElementById('pass').type = 'password'
    }
  }else{
    if (!attInfo) {
      document.querySelector('#title h3').innerHTML = 'Cadastro'
      document.querySelector('#submit button').textContent = 'Cadastrar'
      document.querySelector('#es').innerHTML = 'Já tem uma conta? <span onclick="change()">Clique aqui.</span>'
      document.querySelector('#inputLineUser').style.display = 'flex'
      attInfo = 'True'
    }else{
      document.querySelector('#title h3').innerHTML = 'Login'
      document.querySelector('#submit button').textContent = 'Logar'
      document.querySelector('#es').innerHTML = 'Ainda não tem uma conta? <span onclick="change()">Clique aqui.</span>'
      document.querySelector('#inputLineUser').style.display = 'none'
      attInfo = false
    }
  }
}


let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d_.-]{8,}$/
let userregex = /^[a-zA-Z0-9.-_]{2,}$/
function verify(){
  let emailInput = document.getElementById('email')
  let passInput = document.getElementById('pass')
  let userInput = document.getElementById('user')
  if (attInfo) {
    if (!userregex.test(userInput.value)) {
      setTimeout(() => {
        document.getElementById('inputLineUser').style.borderColor = '#007ea7'
      }, 1000)
      document.getElementById('inputLineUser').style.borderColor = 'red'
      return
    }
  }
  if(!emailregex.test(emailInput.value)){
    setTimeout(() => {
      document.getElementById('inputLineEmail').style.borderColor= '#007ea7'
    },1000)
    document.getElementById('inputLineEmail').style.borderColor = 'red'
    return
    }
  if(!passregex.test(passInput.value)){
    setTimeout(() => {
      document.getElementById('inputLine').style.borderColor= '#007ea7'
      },1000)
      document.getElementById('inputLine').style.borderColor = 'red'
      return
    }
    if (!attInfo) {
      var dados = [emailInput.value,
                 passInput.value]
    }else{
      var dados = [userInput.value,
                 emailInput.value,
                 passInput.value]
    }
}
