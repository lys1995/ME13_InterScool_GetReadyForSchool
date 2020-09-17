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
                        "ustralian Football",
                        "None"
                    ],
                    "correctAnswer": "None"
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
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 10",
                    "title": "Don Bradman is an Australian legend associate with which sport?",
                    "correctAnswer": "A Toilet",
                    "choices": [
                        "Football",
                        "Basketball",
                        "Formula1",
                        "Cricket"
                    ]
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