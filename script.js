const quizdata = [
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "How can we change the background color of an element?",
        a: "background-color",
        b: "color",
        c: "both options",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "Which HTML tag is used to declare internal CSS?",
        a: "<style>",
        b: "<link>",
        c: "<script>",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Can negative values be allowed in padding property?",
        a: "yes",
        b: "no",
        c: "depends on the property",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "The CSS property used to specify the transparency of an element is?",
        a: "opacity",
        b: "visibility",
        c: "filter",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Which of the following is the correct way to select all h1 headers in a div element?",
        a: "div h1",
        b: "div-h1",
        c: "h1",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Which of the following property specifies the look and design of an outline?",
        a: "outline-style",
        b: "outline",
        c: "outline-font",
        d: "none of the above",
        correct: "a",
    },
];

let box = document.getElementById('quiz');
const question = document.getElementById('question');
const options = document.querySelectorAll('.option');
const option_a = document.getElementById('a_option'); 
const option_b = document.getElementById('b_option'); 
const option_c = document.getElementById('c_option'); 
const option_d = document.getElementById('d_option'); 

const btn = document.getElementById('btn');

let q=0 ;
let score=0;


const load = () =>{
    deselectOptions();
    let currentQ = quizdata[q];
    question.innerText=currentQ.question;
    option_a.innerText=currentQ.a;
    option_b.innerText=currentQ.b;
    option_c.innerText=currentQ.c;
    option_d.innerText=currentQ.d;
}

const deselectOptions=()=> {
    options.forEach(option => option.checked = false)
}

const checkedOption = () => {
    let ans
    options.forEach(option => {
        if(option.checked){
            ans = option.id
        }
    })
    return ans;
}

load();
btn.addEventListener("click",() => {
    let answer = checkedOption();
    if(answer === quizdata[q].correct){
        score++;
    }
    q++;

    if(q==quizdata.length-1){
        btn.innerText="submit"
    }
    if(q<quizdata.length){
        load();
    }
    else{
        box.innerHTML = `
        <h2>You've answered ${score}/${quizdata.length} questions correctly</h2>
        <button onclick="location.reload()" id="btn">Reload</button>
        `
    }
})