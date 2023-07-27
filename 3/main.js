const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    if (inp.value.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
});