const quizContainer = [
    {
        question : "Question1: Who is Harry's god father?",
        a: "James Potter",
        b: "Severus Snape",
        c: "Sirius Black",
        d: "Victor Dudly",
        correct: "answer3"
    },
    {
        question : "Question2: what color is associated with Gryffindor",
        a: "green",
        b: "red",
        c: "blue",
        d: "yellow",
        correct: "answer2"
    },
    {
        question : "Question3: Who is the youngest Weasly",
        a: "Ron",
        b: "Giny",
        c: "Bill",
        d: "Percy",
        correct: "answer2"
    },
    {
        question : "Question4: What's the name of Rons rat",
        a: "Scabbers",
        b: "Pumpkin",
        c: "Dobby",
        d: "Aragog",
        correct: "answer1"
    },
    {
        question : "Question5: Who did Hermione bring to the yule ball",
        a: "Ron",
        b: "Draco",
        c: "Dumbeldoor",
        d: "Viktor",
        correct: "answer4"
    },
    {
        question : "Question6: What broomstick modell did Harry get hes first year",
        a: "Lightningbolt",
        b: "Nimbus 2001",
        c: "Nimbus 2000",
        d: "Firebolt",
        correct: "answer3"
    },
    {
        question : "Question7: What is he-who-must-not-be-named's birth name?",
        a: "Tom Robin Voldemort",
        b: "Tom Marvolo Riddle",
        c: "Lorde Voldemort",
        d: "Salasar Slytherin",
        correct: "answer2"
    },
    {
        question : "Question8: What is it that is hidden in the Chambre of secrets",
        a: "Baislisk",
        b: "Diamons",
        c: "Mermaids",
        d: "Hagrid",
        correct: "answer1"
    },
    
];

const answers = document.querySelectorAll('.answers');
const question = document.querySelector('.question');
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('#opt2');
const option3 = document.querySelector('#opt3');
const option4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');
const scores = document.querySelector('.score')
const finalScore = document.querySelector('#finalScore');
const restart = document.querySelector('#restart')
const questCont = document.querySelector('.question__container')
const next = document.querySelector('#next')
const review = document.querySelector('#review')

let questionIndex = 0;
let score = 0;
const Useansweres= [];

const fetchQuestion = () => {
    const qList = quizContainer [questionIndex];
    question.innerText = qList.question;

    option1.innerText = qList.a;
    option2.innerText = qList.b;
    option3.innerText = qList.c;
    option4.innerText = qList.d;

    scores.innerText =`score: ${score} / ${quizContainer.length}`;
}

fetchQuestion();
const getCheckAnswere = () => {
    let answer;

    answers.forEach((curfaElm) =>{
        if(curfaElm.checked){
            answer = curfaElm.id;
        } 
    });

    return answer;
};

next.addEventListener('click', ()=>{
    const checkAnswere = getCheckAnswere();
    if(checkAnswere === quizContainer [questionIndex].correct){
        score++;
    };

    questionIndex++;

    if(questionIndex < quizContainer.length){
        fetchQuestion();

        if(questionIndex === quizContainer.length -1){
            next.innerText = 'Submit';
        }
    } else {  

        finalScore.style.display = restart.style.display = 'none';
        restart.style.display = 'block';
        finalScore.style.display = 'block';
        finalScore.innerText = `You score: ${score} / ${quizContainer.length} righ! 😃`;
    };
});

restart.addEventListener('click', ()=>{

     questionIndex = 0;
     score = 0;

    finalScore.style.display ='none';
    restart.style.display='none';
    questCont.style.display='block';
    
    
    fetchQuestion();
    
});









