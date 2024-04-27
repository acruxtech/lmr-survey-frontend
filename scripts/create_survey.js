let number = 1;


// attributes and values for first question
document.getElementById("first-question-h2").innerText = "Вопрос №" + number;
document.getElementById("first-question-label").setAttribute('for', 'question' + number)
document.getElementById("first-question-input").setAttribute('name', 'question' + number)
// document.getElementById("first-question-ol").id = 'list-answers-' + number
// document.getElementById("first-question-button").id = 'list-answers-' + number



function create_answer_field(button) {
    question_id = button.id.split('-')[2];
    console.log(question_id)
    let number = document.getElementsByClassName('question-number').length;
    let li = document.createElement('li');
    let input = document.createElement('input');
    li.appendChild(input);
    li.className = 'li_answer';

    // div with id="question-{{ number }}"
    // div = document.getElementById(question_id)

    let ol = document.getElementById("list-answers-" + question_id);
    ol.appendChild(li);


}

function create_question() {
    let number = document.getElementsByClassName('question-number').length;
    number++;
    let li = document.createElement('li');

    // h2
    let h2 = document.createElement('h2');
    h2.className = 'question-number'
    h2.innerText = "Вопрос № " + number;


    

    // label
    let label = document.createElement('label');
    label.setAttribute("for", "question-" + number);
    label.innerText = "Название вопроса:"
    label.className = "name_question";
    // input
    let input = document.createElement('input');
    input.setAttribute("name", "question-" + number);
    input.className = 'input_name_question';
 


    // h3

    let h3 = document.createElement('h3');
    h3.innerText = "Варианты ответов"
    h3.className = 'list_answer'

    // is_checkbox
    let label2 = document.createElement('label');
    label2.setAttribute("for", "question-" + number);
    label2.innerText = "Выбор нескольких вариантов";
    label2.className = 'several';
    let input2 = document.createElement('input');
    input2.setAttribute("name", "question-" + number);
    input2.setAttribute("type", "checkbox");
    input2.className = 'input_name_question';


    // ol
    let ol = document.createElement('ol');
    ol.id = 'list-answers-' + number;

    //ol_li
    let ol_li = document.createElement('li');
    let ol_li_input = document.createElement('input');
    ol_li.appendChild(ol_li_input);
    ol.appendChild(ol_li);

    // button
    button =  document.createElement('button');
    button.setAttribute('type', 'button')
    button.innerText = "Добавить вариант"
    button.setAttribute('onclick', "create_answer_field(this)")
    button.id = "add-answer-" + number;
    button.className ='add-answer';

    br = document.createElement("br")
    br2 = document.createElement("br")

    li.appendChild(h2);
    li.appendChild(label);
    li.appendChild(br);
    li.appendChild(input);
    li.appendChild(br2);
    li.appendChild(label2)
    li.appendChild(input2)
    li.appendChild(h3);
    li.appendChild(ol);
    li.appendChild(button);
    
    li.className = 'question'
    let list_questions = document.getElementById('list-questions');

    

    list_questions.appendChild(li);


}

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