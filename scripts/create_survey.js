// let a = document.getElementById("create-field").addEventListener("click", create_answer_field);

let number = 1;

document.getElementById("first-question-h2").innerText = "Вопрос №" + number;
document.getElementById("first-question-label").setAttribute('for', 'question' + number)
document.getElementById("first-question-input").setAttribute('name', 'question' + number)
document.getElementById("first-question-ol").id = 'list-answers-' + number



function create_answer_field() {
    let number = document.getElementsByClassName('question-number').length;
    let li = document.createElement('li');
    let input = document.createElement('input');
    li.appendChild(input);

    let ol = document.getElementById('list-answers-' + number);
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
    label.setAttribute("for", "question" + number);
    label.innerText = "Название вопроса:"

    // input
    let input = document.createElement('input');
    input.setAttribute("name", "question" + number);
 


    // h3
    let h3 = document.createElement('h3');
    h3.innerText = "Варианты ответов"

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
    button.setAttribute('onclick', "create_answer_field()")


    li.appendChild(h2);
    li.appendChild(label);
    li.appendChild(input);
    li.appendChild(h3);
    li.appendChild(ol);
    li.appendChild(button);


    let list_questions = document.getElementById('list-questions');
    list_questions.appendChild(li);

}
