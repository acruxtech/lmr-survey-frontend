
// code for show form
let btn = document.getElementById("get-by-uuid");

// On click event
btn.addEventListener("click", e => {
    div = document.querySelector("#get-by-uuid")
    div.style.display = "none";

    header_buttons = document.querySelector(".header-buttons");
    form = document.createElement("form");
    form.className = "uuid-form";
    form.setAttribute("action", "")
    input = document.createElement("input");
    input.setAttribute("id", "search-form")
    input.setAttribute("name", "uuid")
    button = document.createElement("button");
    button.innerHTML = "Поиск"

    button.addEventListener("click", e => {
        e.preventDefault();
        window.location.href = "pass.html?uuid=" + input.value;
    })

    form.appendChild(input);
    form.appendChild(button);
    header_buttons.appendChild(form);
});
