Survey
    .StylesManager
    .applyTheme("modern");
var json = {
    title: "More about English Grammar, Phrases, Semantics",
   showProgressBar: "bottom",
    showTimerPanel: "top",
/*    showTimerPanelMode = "page",*/
    showPrevButton: true,
    maxTimeToFinish: 120,
    firstPageIsStarted: true,
    startSurveyText: "Start Test",
    "pages": [
        {
            "elements": [
                {
                    "type": "html",
                    "name": "question1",
                    "html": "You are about to start English test. <br/>You have 2 mins for the whole test of 14 questions.<br/>Please click on <b>'Start Test'</b> button when you are ready."
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "title": "Can you push it _____ the keyhole or _____ the door, please?",
                    "name": "question 1",
                    "choicesOrder": "random",
                    "choices": [
                        "threw; across",
                        "through; over",
                        "through; under",
                        "threw; in"
                    ],
                    "correctAnswer": "through; under"
                },
                {
                    "type": "radiogroup",
                    "title": "The more I work, the more money I _____ and the more money I earn, the more I ____",
                    "name": "question 2",
                    "choicesOrder": "random",
                    "choices": [
                        "found; spent",
                        "earn; spend",
                        "earn; win",
                        "earn; found"
                    ],
                    "correctAnswer": "earn; spend"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 3",
                    "title": "In _____ your letter I would like to inform you that in addition ____ the money he owes you he is also ____ debt to me, and in all he owes ____ $100,000",
                    "choices": [
                        "reply; under; up; to",
                        "reply to; under;about to; on",
                        "about to; in ; up; on",
                        "reply; to ; in ; about"
                    ],
                    "correctAnswer": "reply; to ; in ; about"
                },
                {
                    "type": "html",
                    "html": "FIRST HALF:<br/>1.Some people will never<br/>2. My mother has never<br/>3. This week I have<br/>4. Last week my wife<br/>SECOND HALF:<br/>5.  Forget the war.<br/>6. Forgotten my birthday.<br/>7. Forgotten where I live twice.<br/>8. Forgot my birthday.<br/>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 4",
                    "title": "Match the two halves of these sentences",
                    "choices": [
                        "1 and 5; 2 and 8; 3 and 7; 4 and 6",
                        "1 and 5; 2 and 6; 3 and 7; 4 and 8",
                        "1 and 7; 2 and 5; 3 and 4; 4 and 6",
                        "1 and 8; 2 and 7; 3 and 5; 4 and 6"
                    ],
                    "correctAnswer": "1 and 5; 2 and 6; 3 and 7; 4 and 8"
                },
                {
                    "type": "html",
                    "html": "FIRST HALF:<br/>1.The black one is<br/>2.The black on isn't as<br/>3.The blue one is<br/>4.I think the blue one<br/>SECOND HALF:<br/>5.As nice as the blue one.<br/>6.Nice as the blue one.<br/>7.Nicer than the black one.<br/>8.Is the nicest of the two shirts.<br/>"
                },
                {
                    "type": "radiogroup",
                    "name": "question 5",
                    "title": "Match the two halves of these sentences",
                    "choicesOrder": "random",
                    "choices": [
                        "1 and 5; 2 and 6; 3 and 7; 4 and 8",
                        "1 and 7; 2 and 5; 3 and 8; 4 and 6",
                        "1 and 8; 2 and 5; 3 and 7; 4 and 6",
                        "1 and 7; 2 and 8; 3 and 6; 4 and 5"
                    ],
                    "correctAnswer": "1 and 5; 2 and 6; 3 and 7; 4 and 8"
                },
                {
                    "type": "html",
                    "html": "FIRST HALF:<br/>1.Different cultures<br/>2.Some cultures'<br/>3.Their culture<br/>4.All cultures<br/>SECOND HALF:<br/>5.Are regional and national.<br/>6.Customs are ancient.<br/>7.Have different customs.<br/>8.Seems strange to me.<br/>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "Match the two halves of these sentences",
                    "choices": [
                        "1 and 5; 2 and 6; 3 and 7; 4 and 8",
                        "1 and 7; 2 and 5; 3 and 8; 4 and 6",
                        "1 and 8; 2 and 5; 3 and 7; 4 and 6",
                        "1 and 7; 2 and 6; 3 and 8; 4 and 5"
                    ],
                    "correctAnswer": "1 and 7; 2 and 6; 3 and 8; 4 and 5"
                },
                {
                    "type": "html",
                    "html": "a. Is why we offer our service totally free of<br/>b. How important it is that your trip fits your budget, which<br/>c. As fellow travelers and language lovers, we know<br/>d. Charge, with no additional fees<br/>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 7",
                    "title": "Arrange these lines into a logical order",
                    "choices": [
                        "a-d-c-b",
                        "b-c-a-d",
                        "c-b-a-d",
                        "d-a-c-b"
                    ],
                    "correctAnswer": "c-b-a-d"
                },
                {
                    "type": "html",
                    "html": "a. Are place with a homestay whose tastes<br/>b. A vegetarian, the host family will also be vegetarian<br/>c. Match your own - for example, if you are<br/>d. When we match you with a homestay we<br/>e. Will match your preferences so that you<br/>"
                },
                {
                    "choicesOrder": "random",
                    "type": "radiogroup",
                    "name": "question 8",
                    "title": "Arrange these lines into a logical order",
                    "choices": [
                        "a-b-d-e-c",
                        "b-c-e-d-a",
                        "c-d-b-e-a",
                        "d-e-a-c-b"
                    ],
                    "correctAnswer": "d-e-a-c-b"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 9",
                    "title": "It can be great fun ___ in a city, ____ if you like shopping and eating _____  in restaurants.",
                    "choices": [
                        "living; especially;out",
                        "to have lived; more; in",
                        "live; great; by",
                        "lived; and ; over"
                    ],
                    "correctAnswer": "living; especially;out"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 10",
                    "title": "English _____ the most important language _____the world because more and more people use English to communicate. Furthermore, there are less and less people who are unable to use English at _____. Scientific research has proven that learning English in context makes _____connection.",
                    "correctAnswer": "has become; in; all; logical",
                    "choices": [
                        "became; of; lunch; the logical",
                        "has become; in; all; logical",
                        "had become; by; night; a logical",
                        "became; in; all; logical"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question 11",
                    "title": "Does \"Break up\" mean ending a relationship?",
                    "correctAnswer": "True",
                    "choices": [
                        "True",
                        "False"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question 12",
                    "title": "Does \"Break out\" mean wearing something several times?",
                    "correctAnswer": "False",
                    "choices": [
                        "True",
                        "False"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question 13",
                    "title": "Does \"Break into\" mean losing self-control?",
                    "correctAnswer": "False",
                    "choices": [
                        "True",
                        "False"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question 14",
                    "title": "Does \"Break in\" mean entering forcibly?",
                    "correctAnswer": "False",
                    "choices": [
                        "True",
                        "False"
                    ]
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Marks between <b>0-5</b> is belong to <b>Elementary level</b>.</h4><h4>Marks between <b>6-10</b> is belong to <b>intermediate level</b>.</h4>"
};

window.survey = new Survey.Model(json);
var a = true;
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