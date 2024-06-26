let number = 1;

question_1 = document.getElementById("question-1")
question_1_field = question_1.children[0]
question_1_field.children[0].innerText = "Вопрос №" + number
question_1_field.children[1].setAttribute('name', 'question-' + number)


function create_answer_field(button) {
    question_id = button.id.split('-')[2];
    let li = document.createElement('li');
    let input = document.createElement('input');
    li.appendChild(input);
    li.className = 'li_answer';
    let ol = document.getElementById("list-answers-" + question_id);
    ol.appendChild(li);
}

function remove_answer_field(btn){
    let parent = btn.parentNode.parentNode;
    parent.remove()
}



function create_question() {
    let number = document.getElementsByClassName('question-number').length;
    number++;
    let new_question = document.createElement('li');
    new_question.id = "question-" + number;
    new_question.className = "question"

    let div = document.createElement('div')
    div.className = 'survey_field'
    let span = document.createElement('span');
    span.className = 'question-number'
    span.innerText = "Вопрос № " + number;
    let input = document.createElement('input');
    input.setAttribute("name", "question-" + number);
    input.className = 'input_name_question';
    div.appendChild(span)
    div.appendChild(input)
    new_question.appendChild(div)

    let div2 = document.createElement('div')
    div2.className = 'survey_field'
    let span2 = document.createElement('span');
    span2.innerText = "Варианты ответов"
    ol = document.createElement('ol');
    ol.id = 'list-answers-' + number;
    let ol_li = document.createElement('li');
    ol_li.className = "li-answer"
    let ol_li_input = document.createElement('input');
    ol_li.appendChild(ol_li_input);
    ol.appendChild(ol_li);
    div2.appendChild(span2)
    div2.appendChild(ol)
    new_question.appendChild(div2)

    let button = document.createElement('button');
    button.setAttribute('type', 'button')
    button.innerText = "Добавить вариант"
    button.setAttribute('onclick', "create_answer_field(this)")
    button.id = "add-answer-" + number;
    button.className ='button add-question-button';
    new_question.appendChild(button)


    let list_questions = document.getElementById('list-questions');
    list_questions.appendChild(new_question);
}


let form = document.getElementById("new-survey-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    title = document.getElementById("title").value;
    topic = document.getElementById("topic").value;
    show_result = document.getElementById("show_result").value;
    question_blocks = document.getElementsByClassName("question");
    let questions = []

    // get answers
    for (let i = 0; i < question_blocks.length; i++) {
        answers_block = question_blocks[i].children[1].children[1]
        answers = []

        for (let a of answers_block.children) {
            for (let div of a.children) {
                let radio = div.children[0];
                let input = div.children[1];
                answers.push(input.value)
                if (radio.checked) {
                    var correct_answer = input.value;
                }
            }
        }
        
        questions.push({
            "title": question_blocks[i].children[0].children[0].innerText,
            "text": question_blocks[i].children[0].children[1].value,
            "answers": answers,
            "correct_answer": correct_answer,
        });
    }

    new_survey = {
        "title": title,
        "topic": topic,
        "show_result_after_passing": true,
        "questions": questions,
    }

    fetch(
        `${root}/create`, {
            method: "POST",
            body: JSON.stringify(new_survey),
        }
    )
    .then(res => res.json())
    .then(data => {
        alert(`Опрос успешно создан!\nuuid: ${data["uuid"]}\naccess_hash: ${data["access_hash"]}`)
    })
    .catch(res => console.error(res));
});







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
}






// function reset() {
//     let answer = confirm("Вы уверены, что хотите сбросить всё?");
//     if (answer == true) {
//         return form.reset
//     }
   
// }