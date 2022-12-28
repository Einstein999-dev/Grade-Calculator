function login(){

    let username,password
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "admin" && password == "admin1" || password == "admin123"){
        window.open('../asset/123.html','_self');
    }
    else if(username == ""){
        alert("please enter username");
    }
    else if(password == ""){
        alert("please enter password");
    }
    else{
        alert("Incorrect Username or Password");
        }
}