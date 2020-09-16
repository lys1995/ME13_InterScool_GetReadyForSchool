Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "More about Aussie Slang",
    showProgressBar: "bottom",
    showTimerPanel: "top",
/*    showTimerPanelMode = "page",*/
    showPrevButton: true,
    maxTimeToFinish: 120,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    "pages": [
        {
            "elements": [
                {
                    "type": "html",
                    "name": "question1",
                    "html": "You are about to start quiz by Aussie Slang. <br/>You have 2 mins for the whole test of 10 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "title": "Guess what Amber fluid in Australia means?",
                    "name":"question 1",
                    "choicesOrder": "random",
                    "choices": [
                        "Oil",
                        "Beer",
                        "Juice",
                        "Petrol"
                    ],
                    "correctAnswer": "Beer"
                },
                {
                    "type": "radiogroup",
                    "title": "When your friend says \"See you this ARVO\". What do they mean?",
                    "name": "question 2",
                    "choicesOrder": "random",
                    "choices": [
                        "See you in the factory",
                        "ARVO is a name of the place",
                        "It is a name of the person",
                        "Afternoon"
                    ],
                    "correctAnswer": "Afternoon"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 3",
                    "title": "If I was wearing BATHERS, what am I wearing?",
                    "choices": [
                        "Shoes",
                        "New hairstyle",
                        "Swimming Costume",
                        "Watch"
                    ],
                    "correctAnswer": "Swimming Costume"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 4",
                    "title": "If someone offers you \"a cuppa\", say yes and you\'ll get a...",
                    "choices": [
                        "Cake",
                        "Punch in the nose",
                        "Beer",
                        "A cup of tea"
                    ],
                    "correctAnswer": "A cup of tea"
                },
                {
                    "type": "radiogroup",
                    "name": "question 5",
                    "title": "If your friend says let\'s \"crack a tinny tonight\", what do they mean?",
                    "choicesOrder": "random",
                    "choices": [
                        "Open a can of milk",
                        "Open a can of beer",
                        "Open a bottle of water",
                        "Start a new game"
                    ],
                    "correctAnswer": "Open a can of beer"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "A \"wombat crossing\" is usually said for ?",
                    "choices": [
                        "Pedestrians",
                        "Kangaroo",
                        "Ships",
                        "Tadpole"
                    ],
                    "correctAnswer": "Pedestrians"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 7",
                    "title": "What does \"Do you want to get a Brekkie tomorrow\" mean?",
                    "choices": [
                        "Let's meet at the office",
                        "It is a type of occupation",
                        "It means a holiday",
                        "The important meal of the day"
                    ],
                    "correctAnswer": "The important meal of the day"
                },
                {
                    "choicesOrder": "random",
                    "type": "radiogroup",
                    "name": "question 8",
                    "title": "If someone says they are \"Aggro\", what does that mean?",
                    "choices": [
                        "Musician",
                        "Painter",
                        "Upset",
                        "Dancer"
                    ],
                    "correctAnswer": "Upset"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 9",
                    "title": "This is a tough one.. So guess what \"hard yakka\" refers to?",
                    "choices": [
                        "Hard Day",
                        "Hard Work",
                        "Hard time",
                        "Hard Helmet"
                    ],
                    "correctAnswer": "Hard Work"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 10",
                    "title": "What does a \"Dunny\" mean?",
                    "correctAnswer": "A Toilet",
                    "choices": [
                        "Dining room",
                        "Kitchen",
                        "A Bedroom",
                        "A Toilet"
                    ]
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Marks between <b>0-5</b> is belong to <b>Elementary level</b>.</h4><h4>Marks between <b>6-10</b> is belong to <b>intermediate level</b>.</h4>"
};
window.survey = new Survey.Model(json);
/*survey
    .onComplete
    .add(function (survey) {
        document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(survey.data);
    });*/

survey
    .onComplete
    .add(function () {
        document
            .querySelector('#buttonMore')
            .style.display = 'inline';
        document
            .querySelector('#buttonMore1')
            .style.display = 'inline';
    });

$("#surveyElement").Survey({ model: survey }).add(function () {
    if (a) {
        document
            .getElementById('buttonMore').style.display = 'none';
        document
            .getElementById('buttonMore1').style.display = 'none';
    }
});