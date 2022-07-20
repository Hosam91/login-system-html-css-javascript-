let loginEmail = document.getElementById('loginEmail')
let LoginPassword = document.getElementById('LoginPassword')
let loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener('click', login)
function login() {
  let loginRecord = {
    email: loginEmail.value,
    password: LoginPassword.value,
  }

  let rec = JSON.parse(localStorage.getItem('emails'))
  

    for (let i = 0; i < rec.length; i++) {
      console.log(rec[i])
      if (
        loginRecord.email === rec[i].email &&
        loginRecord.password == rec[i].password
      ) {
            document.querySelector('.welcome').style.display="block"
            document.querySelector('.welcome h1').innerHTML=`Welcom  ${rec[i].name}`
            document.getElementById("login").style.display="none"
      } else
      {
        document.getElementById("wrong").style.display="block"
      }
    }
  }

  function validEmail()
  {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(loginEmail.value)) {
      document.getElementById("validEmail").style.display='none'
    } else {
      document.getElementById("validEmail").style.display='block'
  }
  }
  loginEmail.addEventListener('blur', validEmail);
  
  function validPassword()
  {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/
    if (regex.test(LoginPassword.value)) {
      document.getElementById("validPswd").style.display='none'
    } else {
      document.getElementById("validPswd").style.display='block'
  }
  }
  LoginPassword.addEventListener('blur', validPassword);
  