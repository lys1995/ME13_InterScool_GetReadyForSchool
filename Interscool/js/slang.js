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
                    "name": "question 1",
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
                    "type": "html",
                    "visibleIf": "{question 1}='Beer'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='Oil'or {question 1}='Juice' or {question 1}='Petrol'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 2}='Afternoon'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='See you in the factory'or {question 2}='ARVO is a name of the place' or {question 2}='It is a name of the person'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 3}='Swimming Costume'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='Shoes'or {question 3}='New hairstyle' or {question 3}='Watch'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 4}='A cup of tea'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='Beer'or {question 4}='Punch in the nose' or {question 4}='Cake'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 5}='Open a can of beer'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='Open a can of milk'or {question 5}='Open a bottle of water' or {question 5}='Start a new game'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 6}='Pedestrians'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='Kangaroo'or {question 6}='Ships' or {question 6}='Tadpole'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 7}='The important meal of the day'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='It means a holiday'or {question 7}='It is a type of occupation' or {question 7}='Let's meet at the office'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 8}='Upset'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 8}='Musician'or {question 8}='Painter' or {question 8}='Dancer'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 9}='Hard Work'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 9}='Hard Day'or {question 9}='Hard time' or {question 9}='Hard Helmet'",
                    "html": "<h4>No, think again!</h4>"
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
                },
                {
                    "type": "html",
                    "visibleIf": "{question 10}='A Toilet'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 10}='Dining room'or {question 10}='Kitchen' or {question 10}='A Bedroom'",
                    "html": "<h4>No, think again!</h4>"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Know more about Aussie Slang.</h4>"
};
window.survey = new Survey.Model(json);

/*survey
    .onComplete
    .add(function (survey) {
        document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(survey.data);
    });*/
var a = 1;
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
        document
            .getElementById('buttonMore').style.display = 'none';
        document
            .getElementById('buttonMore1').style.display = 'none';
    });