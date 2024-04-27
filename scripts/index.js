result = {
    "surveys": [
        {
            "title": "мой опрос1",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос2",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос3",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос4",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос5",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос6",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос7",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос1",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос2",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос3",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос4",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос5",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос6",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        },
        {
            "title": "мой опрос7",
            "topic": "какая то категория",
            "show_result_after_passing": false,
            questions: []
        }
    ]
}


function get_surveys() {
    let count = cnt;
    for (let i = 0; i < count; i += 1) {
        const list_surveys = result.surveys[i] // СБОР ДАННЫХ с i-го опроса 
        const obj = JSON.parse(JSON.stringify(list_surveys))

        const newDiv = document.createElement("div");
        newDiv.classList.add("surv");

        const surv_info = document.createElement("div")
        surv_info.classList.add("surv-info")

        const newSpan1 = document.createElement("span");
        const newSpan2 = document.createElement("span");
        const newButton = document.createElement("a");
            
        newSpan1.classList.add("surv-info-item");
        newSpan2.classList.add("surv-info-item");
        newSpan2.classList.add("surv-info-topic");
        newButton.classList.add("go-button");
        newButton.classList.add("surv-button");

        newSpan1.textContent = obj.title;
        newSpan2.textContent = obj.topic;
        newButton.innerHTML = "Пройти";
        newButton.setAttribute("href", "pass_survey.html");
        newButton.setAttribute("type", "button");

        const surveysElement = document.querySelector(".surveys");
        surveysElement.appendChild(newDiv);

        surv_info.appendChild(newSpan1);
        surv_info.appendChild(newSpan2);
        newDiv.appendChild(surv_info);
        newDiv.appendChild(newButton);
    } 
}



// main


const numSurveys = result.surveys.length;
window.cnt = numSurveys;
let data = "Количество опросов: " + cnt;
document.getElementById("bc").textContent = data;



// 
get_surveys()



let btn = document.getElementById("get-by-uuid");
// On click event
// console.log(btn)
btn.addEventListener("click", get_by_uuid);

function get_by_uuid() {

    div = document.querySelector("#get-by-uuid")
    div.style.display = "none";
    // div.remove()

    header_buttons = document.querySelector(".header-buttons");
    // new_div = document.createElement("div")
    // new_div.id = "get-by-uuid"

    form = document.createElement("form");
    form.className = "uuid-form";
    form.setAttribute("action", "")
    input = document.createElement("input");
    button = document.createElement("button");
    button.innerHTML = "Поиск"
    form.appendChild(input);
    form.appendChild(button);
    header_buttons.appendChild(form);

    // header_buttons.appendChild(new_div)
    // div.innerHTML = '<form class="uuid-form"><input class="enter-uuid" placeholder="Введите id: " type="text"> <button>Поиск</button></form>';
    
}

// Out click event
uuid_form = document.getElementsByClassName("uuid-form")
if (uuid_form) {
    main = document.getElementsByTagName("main")[0];
    main.addEventListener("click", out_of_uuid);

}



function out_of_uuid(event) {
    // event.preventDefault()
    div = document.querySelector(".uuid-form");
    div.remove()
    
    div = document.querySelector("#get-by-uuid")
    div.style.display = "block";


    // header_buttons = document.querySelector(".header-buttons");
    // new_div = document.createElement("div")
    // new_div.id = "get-by-uuid"

    // a = document.createElement("a")
    // a.className = "go-button";
    // a.innerHTML = "Пройти"
    // new_div.appendChild(a);
    // header_buttons.appendChild(new_div)
    // btn = document.getElementById("get-by-uuid");

    
}


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 