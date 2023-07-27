const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    if (Number(inp.value) > 10 && Number(inp.value) < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
});