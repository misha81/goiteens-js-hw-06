const i1 = document.querySelector("#i1");
const i2 = document.querySelector("#i2");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    if (Number(i1.value) + Number(i2.value) > 10) {
        alert('Сума більша за 10');        
    } else {
        alert('Сума менша або дорівнює 10');
        console.log(i1.value + i2.value);
    }
});