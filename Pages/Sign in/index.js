function sub(){
    var input = document.getElementById("user")
    var label = document.getElementById("label1")

    if(input.value.length >= 1){
        label.style.display = "block"
        input.style.marginTop = "12px"
    }
}

function regress(){
    var input = document.getElementById("user")
    var label = document.getElementById("label1")

    if(input.value.length == 0){
        label.style.display = "none"
        input.style.marginTop = "0px"
    }
}

function sub2(){
    var input = document.getElementById("password")
    var label = document.getElementById("label2")
    var span = document.getElementById("span-pass1")
    var span2 = document.getElementById("span-pass2")

    if(input.value.length >= 1){
        label.style.display = "block"
        input.style.marginTop = "8px"
    }

    else if(input.type == "password"){
        span.style.display = "block"
        span2.style.display = "none"
    }

    else if(input.type == "text"){
        span.style.display = "none"
        span2.style.display = "block"
    }
}

function regress2(){
    var input = document.getElementById("password")
    var label = document.getElementById("label2")
    var span = document.getElementById("span-pass1")
    var span2 = document.getElementById("span-pass2")

    if(input.value.length == 0){
        label.style.display = "none"
        input.style.marginTop = "0px"
        span.style.display = "none"
        span2.style.display = "none"
    }
}

function ver(){
    var pass = document.getElementById("password")
    var lab1 = document.getElementById("span-pass1")
    var lab2 = document.getElementById("span-pass2")

    if(pass.type == "password"){
        pass.type = "text"
        lab1.style.display = "none"
        lab2.style.display = "block"
    }
}

function esconder(){
    var pass = document.getElementById("password")
    var lab1 = document.getElementById("span-pass1")
    var lab2 = document.getElementById("span-pass2")

    if(pass.type == "text"){
        pass.type = "password"
        lab1.style.display = "block"
        lab2.style.display = "none"   
    }
}

function border(){
    var user = document.getElementById("input-user")
    var pass = document.getElementById("input-password")

    user.style.border = "1px solid black"
    pass.style.border = "1px solid rgba(var(--b6a, 219, 219, 219),1)"
}

function border2(){
    var user = document.getElementById("input-password")
    var pass = document.getElementById("input-user")

    user.style.border = "1px solid black"
    pass.style.border = "1px solid rgba(var(--b6a, 219, 219, 219),1)"
}
