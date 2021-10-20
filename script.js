var raw = {
    "email": "rachel.howell@reqres.in",
    "password": "gg"
};
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: 'POST',
  body: JSON.stringify(raw),
  headers:myHeaders,
  redirect: 'follow'
};

fetch("https://reqres.in/api/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));     

  const loginprocess=()=>{
      var mail=document.getElementById("logemail").value;
      var password=document.getElementById("logpass").value;
    var raw = {
        "email": mail,
        "password": password
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),
      headers:myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://reqres.in/api/login", requestOptions)
      .then(response => response.text())
      .then(result => {
          if (result) {
              location.replace("./home.html");
          }
      })
      .catch(error => console.log('error', error)); 
  }