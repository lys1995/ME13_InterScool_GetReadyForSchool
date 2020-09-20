Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "More about Australian Geography",
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
                    "html": "You are about to start quiz by Australian Geography. <br/>You have 2 mins for the whole test of 7 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "title": "How many States are there in Australia?",
                    "name":"question 1",
                    "choicesOrder": "random",
                    "choices": [
                        "6",
                        "7",
                        "8",
                        "5"
                    ],
                    "correctAnswer": "6"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='6'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='7'or {question 1}='8' or {question 1}='5'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "title": "The capital of Australia is",
                    "name": "question 2",
                    "choicesOrder": "random",
                    "choices": [
                        "Melbourne, VIC",
                        "Sydney, NSW",
                        "Canberra, ACT",
                        "Brisbane, QLD"
                    ],
                    "correctAnswer": "Canberra, ACT"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='Canberra, ACT'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='Melbourne, VIC'or {question 2}='Sydney, NSW' or {question 2}='Brisbane, QLD'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 3",
                    "title": "The largest state in Australia is?",
                    "choices": [
                        "Queensland",
                        "Northern Territory",
                        "Victoria",
                        "Western Australia"
                    ],
                    "correctAnswer": "Western Australia"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='Western Australia'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='Queensland'or {question 3}='Northern Territory' or {question 3}='Victoria'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "image",
                    "imageLink": "https://cdn.pixabay.com/photo/2015/12/13/21/25/ayers-rock-1091748_960_720.jpg"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 4",
                    "title": "What is this famous structure called?",
                    "choices": [
                        "Uluru / Ayers Rock",
                        "Mount Baw Baw",
                        "Rock of Divinity",
                        "Mount Kalanguta"
                    ],
                    "correctAnswer": "Uluru / Ayers Rock"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='Uluru / Ayers Rock'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='Mount Baw Baw'or {question 4}='Rock of Divinity' or {question 4}='Mount Kalanguta'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "name": "question 5",
                    "title": "Visible from space, the largest ecosystem in the world is in Australia. What is called?",
                    "choicesOrder": "random",
                    "choices": [
                        "The Great Australian Eco System",
                        "The Great Coral Barrier",
                        "The Great Barrier Reef",
                        "The Great Dipper"
                    ],
                    "correctAnswer": "The Great Barrier Reef"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='The Great Barrier Reef'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='The Great Australian Eco System'or {question 5}='The Great Coral Barrier' or {question 5}='The Great Dipper'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "What is Fraser Island in Australia known for?",
                    "choices": [
                        "Highest population of Kangaroos",
                        "The largest sand island in the world",
                        "Southernmost Island in Australia",
                        "Largest population of indeginous groups in the world"
                    ],
                    "correctAnswer": "The largest sand island in the world"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='The largest sand island in the world'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='Highest population of Kangaroos'or {question 6}='Southernmost Island in Australia' or {question 6}='Largest population of indeginous groups in the world'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 7",
                    "title": "The Great Ocean Road, apart from its stunning beauty is known for being:",
                    "choices": [
                        "The longest road in the world",
                        "The road with the most amount of Kangaroos",
                        "The road with most mountains",
                        "Largest war memorial in the world"
                    ],
                    "correctAnswer": "Largest war memorial in the world"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='Largest war memorial in the world'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='The road with most mountains'or {question 7}='The road with the most amount of Kangaroos' or {question 7}='The longest road in the world'",
                    "html": "<h4>No, think again!</h4>"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Know more about Australian Geography.</h4>"
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
    });

$("#surveyElement").Survey({ model: survey }).add(function () {
    if (a) {
        document
            .getElementById('buttonMore').style.display = 'none';
    }
});