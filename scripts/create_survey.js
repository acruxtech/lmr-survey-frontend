let number = 1;

question_1 = document.getElementById("question-1")
question_1_field = question_1.children[0]
question_1_field.children[0].innerText = "Вопрос №" + number
question_1_field.children[1].setAttribute('name', 'question-' + number)


function create_answer_field(button) {
    question_id = button.id.split('-')[2];

    let answer_block = document.createElement("div")
    answer_block.className = "answer-block";

    let radio = document.createElement('input');
    radio.setAttribute("type", "radio")
    radio.setAttribute("name", "question-" + question_id)

    let input = document.createElement('input');

    let remove_button = document.createElement("button")
    remove_button.className = "remove-button"
    remove_button.setAttribute("onclick", "remove_answer_field(this)")
    remove_button.innerHTML = "X"

    let li = document.createElement('li');
    
    answer_block.appendChild(radio)
    answer_block.appendChild(input)
    answer_block.appendChild(remove_button)

    li.appendChild(answer_block);
    li.className = 'li-answer';
    let ol = document.getElementById("list-answers-" + question_id);
    ol.appendChild(li);
}

function remove_answer_field(btn){
    ((btn.parentNode).parentNode).removeChild(btn.parentNode);
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

    let answer_block = document.createElement("div")
    answer_block.className = "answer-block";

    let radio = document.createElement('input');
    radio.setAttribute("type", "radio")
    radio.setAttribute("name", "question-" + number)

    let ol_li_input = document.createElement('input');

    answer_block.appendChild(radio)
    answer_block.appendChild(ol_li_input)

    ol_li.appendChild(answer_block);
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
    for (let i = 0; i < question_blocks.length; i++) {
        answers_block = question_blocks[i].children[1].children[1]
        answers = []
        for (let i = 0; i < answers_block.children.length; i++) {
            answers.push(answers_block.children[i].children[0].value)
        }
        questions.push({
            "title": question_blocks[i].children[0].children[0].innerText,
            "text": question_blocks[i].children[0].children[1].value,
            "answers": answers,
            "correct_answer": answers[0],
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






