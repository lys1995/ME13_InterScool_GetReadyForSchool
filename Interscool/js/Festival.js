Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "More about Australian Festivals",
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
                    "html": "You are about to start quiz by Australian Festivals. <br/>You have 2 mins for the whole test of 10 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "title": "Which of the following Public Holiday is NOT a National Public Holiday?",
                    "name":"question 1",
                    "choicesOrder": "random",
                    "choices": [
                        "Anzac Day",
                        "Boxing Day",
                        "Australia Day",
                        "Melbourne Cup"
                    ],
                    "correctAnswer": "Melbourne Cup"
                },
                {
                    "type": "radiogroup",
                    "title": "When does Queensland celebrate Queen's Birthday?",
                    "name": "question 2",
                    "choicesOrder": "random",
                    "choices": [
                        "June 8th",
                        "October 5th",
                        "September 28th",
                        "July 4th"
                    ],
                    "correctAnswer": "October 5th"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 3",
                    "title": "When Australia celebrate for Boxing Day?",
                    "choices": [
                        "January 1st",
                        "December 25th",
                        "December 26th",
                        "December 24th"
                    ],
                    "correctAnswer": "December 26th"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 4",
                    "title": "What holiday is celebrated in Australia on January 26th each year?",
                    "choices": [
                        "Anzac Day",
                        "Easter",
                        "Good Friday",
                        "Australia Day"
                    ],
                    "correctAnswer": "Australia Day"
                },
                {
                    "type": "radiogroup",
                    "name": "question 5",
                    "title": "Western Australians have a celebration on the first Monday in June. Do you know what they are celebrating?",
                    "choicesOrder": "random",
                    "choices": [
                        "The founding of the founding of the British Swan River Colony in 1829",
                        "Queen's Birthday",
                        "No idea"
                    ],
                    "correctAnswer": "The founding of the founding of the British Swan River Colony in 1829"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "Do Queenslanders and Victorians celebrate Labor Day on the same day?",
                    "choices": [
                        "Yes",
                        "No",
                        "No idea"
                    ],
                    "correctAnswer": "No"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 7",
                    "title": "Which of these is an Aboriginal cultural festival?",
                    "choices": [
                        "Garma festival",
                        "Barunga festival",
                        "Yeperenye Dreaming",
                        "All of the above"
                    ],
                    "correctAnswer": "All of the above"
                },
                {
                    "choicesOrder": "random",
                    "type": "radiogroup",
                    "name": "question 8",
                    "title": "Who celebrate Eight Hours Day in Australia?",
                    "choices": [
                        "Queenslanders",
                        "Tasmanian",
                        "Victorians",
                        "All of the Above"
                    ],
                    "correctAnswer": "Tasmanian"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 9",
                    "title": "On which day do Australians celebrate Anzac Day?",
                    "choices": [
                        "November 11th",
                        "July 10th",
                        "April 25th",
                        "August 1st"
                    ],
                    "correctAnswer": "April 25th"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 10",
                    "title": "Which of the following festivals is celebrated in March?",
                    "correctAnswer": "Canberra Day",
                    "choices": [
                        "Anzac Day",
                        "Reconciliation Day",
                        "Melbourne Cup",
                        "Canberra Day"
                    ]
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Know more about Australian Festivals.</h4>"
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