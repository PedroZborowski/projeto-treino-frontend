const saveButton = document.querySelector(".save-button");
const template = document.querySelector(".caixa div").cloneNode(true);
document.querySelector(".caixa div").remove();
saveButton.addEventListener("click", () => {
    const clone = template.cloneNode(true)
    clone.querySelector("h1").textContent = document.querySelector(".input-1").value;
    clone.querySelector(".fs-2").textContent = document.querySelector(".input-2").value;
    clone.querySelector(".fs-3").textContent = document.querySelector(".input-3").value;
    document.querySelector(".caixa").appendChild(clone);
})