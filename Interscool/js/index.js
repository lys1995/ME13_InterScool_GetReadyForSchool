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
                    "type": "html",
                    "visibleIf": "{question 1}='through; under'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='threw; across'or {question 1}='through; over' or {question 1}='threw; in'",
                    "html": "<h4>No, think again!</h4><br/>"
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
                    "type": "html",
                    "visibleIf": "{question 2}='earn; spend'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='found; spent'or {question 2}='earn; win' or {question 2}='earn; found'",
                    "html": "<h4>No, think again!</h4><br/>"
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
                    "visibleIf": "{question 3}='reply; to ; in ; about'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='reply; under; up; to'or {question 3}='reply to; under;about to; on' or {question 3}='about to; in ; up; on'",
                    "html": "<h4>No, think again!</h4><br/>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 4",
                    "title": "Match Below two halves of these sentences",
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
                    "html": "<h4 style='font-weight: bold'>FIRST HALF:</h4><p>1.Some people will never</p><p>2. My mother has never</p><p>3. This week I have</p><p>4. Last week my wife</p><h4 style='font-weight: bold'>SECOND HALF:</h4><p>5.  Forget the war.</p><p>6. Forgotten my birthday.</p><p>7. Forgotten where I live twice.</p><p>8. Forgot my birthday.</p>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='1 and 5; 2 and 6; 3 and 7; 4 and 8'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='1 and 5; 2 and 8; 3 and 7; 4 and 6'or {question 4}='1 and 7; 2 and 5; 3 and 4; 4 and 6' or {question 4}='1 and 8; 2 and 7; 3 and 5; 4 and 6'",
                    "html": "<h4>No, think again!</h4><br/>"
                },
                {
                    "type": "radiogroup",
                    "name": "question 5",
                    "title": "Match Below two halves of these sentences",
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
                    "html": "<h4 style='font-weight: bold'>FIRST HALF:</h4><p>1.The black one is</p><p>2.The black on isn't as</p><p>3.The blue one is</p><p>4.I think the blue one</p><h4 style='font-weight: bold'>SECOND HALF:</h4><p>5.As nice as the blue one.</p><p>6.Nice as the blue one.</p><p>7.Nicer than the black one.</p><p>8.Is the nicest of the two shirts.</p>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='1 and 5; 2 and 6; 3 and 7; 4 and 8'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='1 and 7; 2 and 5; 3 and 8; 4 and 6'or {question 5}='1 and 8; 2 and 5; 3 and 7; 4 and 6' or {question 5}='1 and 7; 2 and 8; 3 and 6; 4 and 5'",
                    "html": "<h4>No, think again!</h4><br/>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "Match Below two halves of these sentences",
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
                    "html": "<h4 style='font-weight: bold'>FIRST HALF:</h4><p>1.Different cultures</p><p>2.Some cultures'</p><p>3.Their culture</p><p>4.All cultures</p><h4 style='font-weight: bold'>SECOND HALF:</h4><p>5.Are regional and national.</p><p>6.Customs are ancient.</p><p>7.Have different customs.</p><p>8.Seems strange to me.</p>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='1 and 7; 2 and 6; 3 and 8; 4 and 5'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='1 and 5; 2 and 6; 3 and 7; 4 and 8'or {question 6}='1 and 7; 2 and 5; 3 and 8; 4 and 6' or {question 6}='1 and 8; 2 and 5; 3 and 7; 4 and 6'",
                    "html": "<h4>No, think again!</h4><br/>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 7",
                    "title": "Arrange below these lines into a logical order",
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
                    "html": "<h4>a. Is why we offer our service totally free of<h4/><h4>b. How important it is that your trip fits your budget, which<h4/><h4>c. As fellow travelers and language lovers, we know<h4/><h4>d. Charge, with no additional fees</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='c-b-a-d'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='a-d-c-b'or {question 7}='b-c-a-d' or {question 7}='d-a-c-b'",
                    "html": "<h4>No, think again!</h4><br/>"
                },
                {
                    "choicesOrder": "random",
                    "type": "radiogroup",
                    "name": "question 8",
                    "title": "Arrange below these lines into a logical order",
                    "choices": [
                        "a-b-d-e-c",
                        "b-c-e-d-a",
                        "c-d-b-e-a",
                        "d-e-a-c-b"
                    ],
                    "correctAnswer": "d-e-a-c-b"
                },
                {
                    "type": "html",
                    "html": "<h4>a. Are place with a homestay whose tastes</h4><h4>b. A vegetarian, the host family will also be vegetarian</h4><h4>c. Match your own - for example, if you are</h4><h4>d. When we match you with a homestay we</h4><h4>e. Will match your preferences so that you</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 8}='d-e-a-c-b'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 8}='a-b-d-e-c'or {question 8}='b-c-e-d-a' or {question 8}='c-d-b-e-a'",
                    "html": "<h4>No, think again!</h4><br/>"
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
                    "type": "html",
                    "visibleIf": "{question 9}='living; especially;out'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 9}='to have lived; more; in'or {question 9}='live; great; by' or {question 9}='lived; and ; over'",
                    "html": "<h4>No, think again!</h4><br/>"
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
                    "type": "html",
                    "visibleIf": "{question 10}='has become; in; all; logical'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 10}='became; of; lunch; the logical'or {question 10}='had become; by; night; a logical' or {question 10}='became; in; all; logical'",
                    "html": "<h4>No, think again!</h4><br/>"
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
                    "type": "html",
                    "visibleIf": "{question 11}='True'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 11}='False'",
                    "html": "<h4>No, think again!</h4><br/>"
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
                    "type": "html",
                    "visibleIf": "{question 12}='False'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 12}='True'",
                    "html": "<h4>No, think again!</h4><br/>"
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
                    "type": "html",
                    "visibleIf": "{question 13}='False'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 13}='True'",
                    "html": "<h4>No, think again!</h4><br/>"
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
                },
                {
                    "type": "html",
                    "visibleIf": "{question 14}='False'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4><br/>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 14}='True'",
                    "html": "<h4>No, think again!</h4><br/>"
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