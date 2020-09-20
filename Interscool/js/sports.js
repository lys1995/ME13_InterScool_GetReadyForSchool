Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "More about Aussie Sports",
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
                    "html": "You are about to start quiz by Aussie Sports. <br/>You have 2 mins for the whole test of 10 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "title": "What is the national sport of Australia?",
                    "name":"question 1",
                    "choicesOrder": "random",
                    "choices": [
                        "Cricket",
                        "Football",
                        "Australian Football",
                        "None"
                    ],
                    "correctAnswer": "None"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='None'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='Cricket'or {question 1}='Football' or {question 1}='Australian Football'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "title": "If your mate asks you to go for a \"footy game\", which one of the following games are they talking about?",
                    "name": "question 2",
                    "choicesOrder": "random",
                    "choices": [
                        "Soccer",
                        "Baseball",
                        "Australian Football Rules",
                        "Cycling"
                    ],
                    "correctAnswer": "Australian Football Rules"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='Australian Football Rules'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='Soccer'or {question 2}='Baseball' or {question 2}='Cycling'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 3",
                    "title": "The \"Ashes\" are a cricket tournament played between Australia and which country?",
                    "choices": [
                        "New Zealand",
                        "Mongolia",
                        "England",
                        "Canada"
                    ],
                    "correctAnswer": "England"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='England'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='New Zealand'or {question 3}='Mongolia' or {question 3}='Canada'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 4",
                    "title": "If you are going to watch a \"BBL game\" in Australia, which sport would you be watching?",
                    "choices": [
                        "Cricket",
                        "Soccer",
                        "Basketball",
                        "Baseball"
                    ],
                    "correctAnswer": "Cricket"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='Cricket'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='Soccer'or {question 4}='Basketball' or {question 4}='Baseball'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "name": "question 5",
                    "title": "If you are in Victoria, you would be getting a public holiday for the \"Melbourne Cup\". Which sport is it associated with?",
                    "choicesOrder": "random",
                    "choices": [
                        "Basketball",
                        "Australian Rules Football",
                        "Cricket",
                        "Horse Racing"
                    ],
                    "correctAnswer": "Horse Racing"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='Horse Racing'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='Basketball'or {question 5}='Australian Rules Football' or {question 5}='Cricket'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "What does being given a \"baggy green\" mean?",
                    "choices": [
                        "Given a green bag",
                        "Received a green card in a sport",
                        "Called to represent the Australian Cricket team",
                        "Given the prestigious sport award for contribution to the game"
                    ],
                    "correctAnswer": "Called to represent the Australian Cricket team"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='Called to represent the Australian Cricket team'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='Given a green bag'or {question 6}='Received a green card in a sport' or {question 6}='Given the prestigious sport award for contribution to the game'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 7",
                    "title": "The nickname \"Wallabies\" is given to which Australian national sport team?",
                    "choices": [
                        "Rugby",
                        "Volleyball",
                        "Soccer",
                        "Australian Rules Football"
                    ],
                    "correctAnswer": "Rugby"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='Rugby'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='Volleyball'or {question 7}='Soccer' or {question 7}='Australian Rules Football'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "choicesOrder": "random",
                    "type": "radiogroup",
                    "name": "question 8",
                    "title": "Which city in Australia is also known as the \"Sporting Capital of the World\"?",
                    "choices": [
                        "Sydney",
                        "Melbourne",
                        "Adelaide",
                        "Brisbane"
                    ],
                    "correctAnswer": "Melbourne"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 8}='Melbourne'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 8}='Sydney'or {question 8}='Adelaide' or {question 8}='Brisbane'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 9",
                    "title": "X is a sport that is conducted in various countries around the world in the calendar year and currently starts its season in Australia. Identify X",
                    "choices": [
                        "Formula 1",
                        "Australian Open",
                        "Olympics",
                        "World Snooker Championships"
                    ],
                    "correctAnswer": "Formula 1"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 9}='Formula 1'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 9}='Australian Open'or {question 9}='Olympics' or {question 9}='World Snooker Championships'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 10",
                    "title": "Don Bradman is an Australian legend associate with which sport?",
                    "correctAnswer": "Cricket",
                    "choices": [
                        "Football",
                        "Basketball",
                        "Formula 1",
                        "Cricket"
                    ]
                },
                {
                    "type": "html",
                    "visibleIf": "{question 10}='Cricket'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 10}='Football'or {question 10}='Basketball' or {question 10}='Formula 1'",
                    "html": "<h4>No, think again!</h4>"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Know more about Aussie Sports.</h4>"
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