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
    // console.log(cnt)
    for (let i = 0; i < count; i += 1) {
        const list_surveys = result.surveys[i] // СБОР ДАННЫХ с i-го опроса 
        const obj = JSON.parse(JSON.stringify(list_surveys))

        const newDiv = document.createElement("div");
        newDiv.classList.add("surv");

        const surv_info = document.createElement("div")
        surv_info.classList.add("surv-info")

        const newSpan1 = document.createElement("span");
        const newSpan2 = document.createElement("span");
        const newA = document.createElement("a");
            
        newSpan1.classList.add("surv-info-item");
        newSpan2.classList.add("surv-info-item");
        newSpan2.classList.add("surv-info-topic");
        newA.classList.add("start-button");

        newSpan1.textContent = obj.title;
        newSpan2.textContent = obj.topic;
        newA.textContent = "Пройти";
        newA.href = "create_survey.html";

        const surveysElement = document.querySelector(".surveys");
        surveysElement.appendChild(newDiv);

        surv_info.appendChild(newSpan1);
        surv_info.appendChild(newSpan2);
        newDiv.appendChild(surv_info);
        newDiv.appendChild(newA);
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
    button = document.getElementById("get-by-uuid");
    button.innerHTML = '<form class="uuid-form"><input type="text"> <button>Поиск</button></form>';
    
}

// Out click event

main = document.getElementsByTagName("main");
main.addEventListener("click", out_of_uuid);

function out_of_uuid() {
    button = document.getElementById("get-by-uuid");
    button.innerHTML = '<a type="button" class="go-button">Пройти по uuid</a>';
    
}


