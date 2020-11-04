const form1 = document.querySelector(".signup-form");
const btn1 = document.querySelector(".create_button");
btn1.addEventListener("click", function() {
    form1.classList.remove("hidden");
});

const form2 = document.querySelector(".form2");
const btn2 = document.querySelector(".your_forgot");
console.log(btn2);

btn2.addEventListener("click", function(e) {
    e.preventDefault();
    form2.classList.remove("hidden");
});

var btn_toggle = document.querySelector('.term-service');
var item = document.querySelector('.tem')

btn_toggle.addEventListener('click', function() {
    item.classList.toggle('hidden')
    btn_toggle.style.textDecoration = "underline";
    if (btn_toggle.innerHTML === "Terms of service") {
        btn_toggle.innerHTML = "Hidden"
    } else {
        btn_toggle.innerHTML = "Terms of service"
    }
})