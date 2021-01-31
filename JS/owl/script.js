const LOGIN_SAVE = "test@netflix.com";
const PASSWORD_SAVE = "test"

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function buttonHidden(){
    // Configurando a visilidade da div com as informações sobre reCaptcha

    var div = document.getElementById("label-hidden");

    div.style.visibility = 'visible';

    // Ocultando o valor do hidden do button 'button-term'

    console.log(div.style.visibility);

    var divButton = document.getElementById('button-term');

    divButton.style.visibility = 'hidden';
}

function sendLogin(){
    var nameLogin = document.getElementById('name').value;
    var passLogin = document.getElementById('password').value;
    
    if(nameLogin === LOGIN_SAVE){
        if(passLogin === PASSWORD_SAVE){
            window.location.href = "netflix.html";   
        }
    }else{
        window.location.href = "/";
    } 
}