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
        const newButton = document.createElement("button");
            
        newSpan1.classList.add("surv-info-item");
        newSpan2.classList.add("surv-info-item");
        newSpan2.classList.add("surv-info-topic");
        newButton.classList.add("go-button");
        newButton.classList.add("surv-button");

        newSpan1.textContent = obj.title;
        newSpan2.textContent = obj.topic;
        newButton.textContent = "Пройти";
        newButton.href = "create_survey.html";

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



const btn = document.getElementById("get-by-uuid");
// On click event
console.log(btn)
btn.addEventListener("click", get_by_uuid);

function get_by_uuid() {
    div = document.getElementById("get-by-uuid");
    // form = document.createElement("form");
    // input = document.createElement("input");
    // button = document.createElement("button");
    // div.innerHTML = ""
    // form.appendChild(input);
    // form.appendChild(button);
    // div.appendChild(form);
    div.innerHTML = '<form class="uuid-form"><input type="text"> <button>Поиск</button></form>';
    
}

// Out click event

main = document.getElementsByTagName("main")[0];
main.addEventListener("click", out_of_uuid);

function out_of_uuid(event) {
    event.preventDefault()
    button = document.getElementById("get-by-uuid");
    button.innerHTML = '<a type="button" class="go-button">Пройти</a>';
    
}


