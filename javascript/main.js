const navi = document.querySelector(".nav-list");
const toggle = document.querySelector(".nav-btn-toggle");
const submit = document.querySelector(".submit-btn");


toggle.addEventListener('click',()=>{
    const visibility = navi.getAttribute("data-visible");

    if(visibility === "false"){
        navi.setAttribute("data-visible",true);
        toggle.setAttribute("aria-expanded",true);
    }
    else if(visibility === "true"){
        navi.setAttribute("data-visible",false);
        toggle.setAttribute("aria-expanded",false);
    }
});

function checkValidity(){
    const email = document.getElementById("user-mail");
    const number = document.getElementById("user-number");
    email.addEventListener('input',()=>{

        if(email.validity.typeMismatch){
            email.setCustomValidity("Please enter the correct form of email (abc@xyz.com)");
        }
        else{
            email.setCustomValidity("");
        }
    });
    number.addEventListener('input',()=>{
        if(number.validity.patternMismatch){
            number.setCustomValidity("Please enter only digits(0-9)")
        }
        else
        {
            if(number.validity.tooLong){
                number.setCustomValidity("Digits exceeded! please enter valid phone number")
            }
            else if(number.validity.tooShort){
                number.setCustomValidity("Please complete the phone number ")
            }
        }
    });
}

submit.addEventListener('click', checkValidity());


