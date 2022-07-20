// signUp
let signupBtn = document.getElementById('signupBtn')
let signupName = document.getElementById('signupName')
let signupEmail = document.getElementById('signupEmail')
let signupPassword = document.getElementById('signupPassword')

let records
if (localStorage.getItem('emails') !== null) {
  records = JSON.parse(localStorage.getItem('emails'))
} else {
  records = []
}

function addPerson() {
  let record = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  }
  records.push(record)
  localStorage.setItem('emails', JSON.stringify(records))
  clear()
  console.log(records)
}
function clear() {
  signupName.value = ''
  signupEmail.value = ''
  signupPassword.value = ''
}
signupBtn.addEventListener('click', addPerson)

function validName() {
  let regex = /[A-Z][a-z0-9]{3,15}/
  if (regex.test(signupName.value)) {
    document.getElementById('validName').style.display = 'none'
  } else {
    document.getElementById('validName').style.display = 'block'
  }
}
signupName.addEventListener('blur', validName)

function validEmail() {
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (regex.test(signupEmail.value)) {
    document.getElementById('validEmail').style.display = 'none'
  } else {
    document.getElementById('validEmail').style.display = 'block'
  }
}
signupEmail.addEventListener('blur', validEmail)

function validPassword() {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/
  if (regex.test(signupPassword.value)) {
    document.getElementById('validPswd').style.display = 'none'
  } else {
    document.getElementById('validPswd').style.display = 'block'
  }
}
signupPassword.addEventListener('blur', validPassword)
