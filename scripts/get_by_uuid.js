
// code for show form
let btn = document.getElementById("get-by-uuid");

// On click event
btn.addEventListener("click", get_by_uuid);

function get_by_uuid() {

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
    button.setAttribute("onclick", "get_survey_by_uuid()")
    form.appendChild(input);
    form.appendChild(button);
    header_buttons.appendChild(form);

}

// Out click event
uuid_form = document.getElementsByClassName("uuid-form")
if (uuid_form) {
    main = document.getElementsByTagName("main")[0];
    main.addEventListener("click", out_of_uuid);
    function out_of_uuid(event) {
      // event.preventDefault()
      div = document.querySelector(".uuid-form");
      div.remove()
      
      div = document.querySelector("#get-by-uuid")
      div.style.display = "block";
      
  }
}





// code for fetch GET data and redirect

function get_survey_by_uuid() {
    window.location.href = 'newPage.html';
    // let params = new URLSearchParams(location.search);
    // let uuid = params.get('uuid')

    // // get current URL 
    // let url = window.location.href.split('/');
    // url[url.length - 1] = "pass.html?uuid=" + uuid;
    // url = url.join('/')
    // console.log(url)

    // // redirect
    // // window.location = "file:///D:/lmr-survey-frontend/pass.html?uuid=6f34d13a-a510-4e15-9d9c-705424073f38";
    // window.location.href = url
    // console.log(window.location.href)
    
}

