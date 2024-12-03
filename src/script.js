const quizContainer = [
    {
        question : "Question1: Who is Harry's god father?",
        a: "James Potter",
        b: "Severus Snape",
        c: "Sirius Black",
        d: "Victor Dudly",
        fa: "answer3"
    },
    {
        question : "Question2: Here",
        a: "her em det noe",
        b: "her er det noe",
        c: "her er det noe",
        d: "her er det noe",
        fa: "answer2"
    },
    {
        question : "Question3: Here",
        a: "her er det noe",
        b: "her hem det noe",
        c: "her er det noe",
        d: "her er det noe",
        fa: "answer2"
    },
    {
        question : "Question4: Here",
        a: "her er det noe",
        b: "her er det noe",
        c: "her er det noe",
        d: "her er det noe",
        fa: "answer1"
    },
    {
        question : "Question5: Here",
        a: "her er det noe",
        b: "her er det noe",
        c: "her er det noe",
        d: "her er det noe",
        fa: "answer4"
    },
    {
        question : "Question6: Here",
        a: "her er det noe",
        b: "her er det noe",
        c: "her er det noe",
        d: "her er det noe",
        fa: "answer3"
    },
    {
        question : "Question7: Here",
        a: "her er det noe",
        b: "her er det noe",
        c: "her er det noe",
        d: "her er det noe",
        fa: "answer2"
    },
    {
        question : "Question8: Here",
        a: "her er det noe",
        b: "her er det noe",
        c: "her er det noe",
        d: "her er det noe",
        fa: "answer1"
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
    if(checkAnswere === quizContainer [questionIndex].fa){
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







