/*Local Storage*/
function setLocalData() {
    localStorage.setItem("userName","Nirali")
}
function setLocalDataObject() {
    let Profile = {
    firstName:'Nirali',
    lastName:'Sanghani',
    age:33
  }

  let string = JSON.stringify(Profile)

  localStorage.setItem('username' , string)
  localStorage.setItem('password' , '1234567890')
}
function getLocalData() {
    let data = localStorage.getItem("userName");
    document.getElementById("output").innerHTML=data
}
function removeLocalData() {
    localStorage.removeItem("userName")
}
function removeAllLocalData() {
    localStorage.clear()
}

/*Session Storage */
function setSessionData() {
    sessionStorage.setItem("userName","Nirali")
}
function setSessionDataObject() {
    let Profile = {
    firstName:'Nirali',
    lastName:'Sanghani',
    age:33
  }

  let string = JSON.stringify(Profile)

  sessionStorage.setItem('username' , string)
  sessionStorage.setItem('password' , '1234567890')
}
function getSessionData() {
    let data = sessionStorage.getItem("userName");
    document.getElementById("output").innerHTML=data
}
function removeSessionData() {
    sessionStorage.removeItem("userName")
}
function removeAllSessionData() {
    sessionStorage.clear()
}