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
                    "html": "You are about to start quiz by Australian Geography. <br/>You have 2 mins for the whole test of 10 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
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