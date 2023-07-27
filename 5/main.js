const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const inp3 = document.querySelector("#inp3");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    if (inp1.value.length > 3 && inp2.value.includes("@.") && inp3.value.length > 6) {
        window.location.href = "https://www.facebook.com/";
    } else {
        alert("Сталася помилка. Данні введені не вірно");
    }
});