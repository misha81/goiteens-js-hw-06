const ta1 = document.querySelector("#ta1");
const ta2 = document.querySelector("#ta2");
const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
    if (ta1.value.length && ta2.value.length) {
        alert('Обидва поля заповнені');
    } else {
        alert('Не всі поля заповнені');
    }
});


