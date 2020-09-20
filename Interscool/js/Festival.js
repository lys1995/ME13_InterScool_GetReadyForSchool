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
                    "type": "html",
                    "visibleIf": "{question 1}='Melbourne Cup'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='Anzac Day'or {question 1}='Boxing Day' or {question 1}='Australia Day'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 2}='October 5th'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='June 8th'or {question 2}='September 28th' or {question 2}='July 4th'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 3}='December 26th'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='December 24th'or {question 3}='December 25th' or {question 3}='January 1st'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 4}='Australia Day'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='Anzac Day'or {question 4}='Easter' or {question 4}='Good Friday'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 5}='The founding of the founding of the British Swan River Colony in 1829'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='No idea'or {question 5}='Queen's Birthday'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 6}='No'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='Yes'or {question 6}='No idea'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 7}='All of the above'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='Garma festival'or {question 7}='Yeperenye Dreaming'or {question 7}='Barunga festival'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 8}='Tasmanian'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 8}='Queenslanders'or {question 8}='Victorians'or {question 8}='All of the Above'",
                    "html": "<h4>No, think again!</h4>"
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
                    "type": "html",
                    "visibleIf": "{question 9}='April 25th'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 9}='August 1st'or {question 9}='November 11th'or {question 9}='July 10th'",
                    "html": "<h4>No, think again!</h4>"
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
                },
                {
                    "type": "html",
                    "visibleIf": "{question 10}='Canberra Day'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 10}='Melbourne Cup'or {question 10}='Reconciliation Day'or {question 10}='Anzac Day'",
                    "html": "<h4>No, think again!</h4>"
                },
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