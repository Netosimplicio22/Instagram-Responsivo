function press(){
    var input = document.getElementById("num-email")
    var lab = document.getElementById("label1")

    if(input.value.length >= 1){
        input.style.marginTop = "8px"
        lab.style.display = "block"
    }
}

function depress(){
    var input = document.getElementById("num-email")
    var lab = document.getElementById("label1")

    if(input.value.length == 0){
        input.style.marginTop = "0px"
        lab.style.display = "none"
    }
}

function press2(){
    var input = document.getElementById("nome")
    var lab = document.getElementById("label2")

    if(input.value.length >= 1){
        input.style.marginTop = "8px"
        lab.style.display = "block"
    }
}

function depress2(){
    var input = document.getElementById("nome")
    var lab = document.getElementById("label2")

    if(input.value.length == 0){
        input.style.marginTop = "0px"
        lab.style.display = "none"
    }
}

function press3(){
    var input = document.getElementById("user")
    var lab = document.getElementById("label3")

    if(input.value.length >= 1){
        input.style.marginTop = "8px"
        lab.style.display = "block"
    }
}

function depress3(){
    var input = document.getElementById("user")
    var lab = document.getElementById("label3")

    if(input.value.length == 0){
        input.style.marginTop = "0px"
        lab.style.display = "none"
    }
}

function press4(){
    var input = document.getElementById("password")
    var lab = document.getElementById("label4")
    var span1 = document.getElementById("span-pass1")
    var span2 = document.getElementById("span-pass2")

    if(input.value.length >= 1){
        input.style.marginTop = "8px"
        lab.style.display = "block"
    }

    else if(input.type == "password"){
        span1.style.display = "block"
        span2.style.display = "none"
    }

    else if(input.type == "text"){
        span1.style.display = "none"
        span2.style.display = "block"
    }

}

function depress4(){
    var input = document.getElementById("password")
    var lab = document.getElementById("label4")
    var span1 = document.getElementById("span-pass1")
    var span2 = document.getElementById("span-pass2")

    if(input.value.length == 0){
        input.style.marginTop = "0px"
        lab.style.display = "none"
        span1.style.display = "none"
        span2.style.display = "none"
    }
}

function ver(){
    var input = document.getElementById("password")
    var span1 = document.getElementById("span-pass1")
    var span2 = document.getElementById("span-pass2")

    if(input.type = "password"){
        input.type = "text"
        span1.style.display = "none"
        span2.style.display = "block"
    }
}

function esconder(){
    var input = document.getElementById("password")
    var span1 = document.getElementById("span-pass1")
    var span2 = document.getElementById("span-pass2")

    if(input.type = "text"){
        input.type = "password"
        span1.style.display = "block"
        span2.style.display = "none"
    }
}