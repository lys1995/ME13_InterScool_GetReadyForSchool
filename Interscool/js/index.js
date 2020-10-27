Survey
    .StylesManager
    .applyTheme("modern");
var json = {
    title: "More about English Grammar, Phrases, Semantics",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    showPrevButton: true,
    maxTimeToFinish: 210,
    firstPageIsStarted: true,
    startSurveyText: "Start Test",
    showPreviewBeforeComplete: "showAllQuestions",
    pageNextText: "Next Question",
    previewText: "Review All Questions",
    pages: [
        {
            questions: [
                {
                    "type": "html",
                    "name": "question1",
                    "html": "You are about to start English test. <br/>You have 3 mins 30 secends for the whole test of 10 questions.<br/>Please click on <b>'Start Test'</b> button when you are ready."
                }
            ]
        },
        {
            questions: [
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
                }
            ]
        },
        {
            questions: [
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
                }
            ]
        },
        {
            questions: [
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
                }]
        },
        {
            questions: [
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 4",
                    "title": "_______ to be much chance of our catching him up in the near future.",
                    "choices": [
                        "You don't seem",
                        "There doesn't seem",
                        "That doesn't seem",
                        "It doesn't see"
                    ],
                    "correctAnswer": "There doesn't seem"
                }]
        },
        {
            questions: [
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 5",
                    "title": "It can be great fun ___ in a city, ____ if you like shopping and eating _____  in restaurants.",
                    "choices": [
                        "living; especially;out",
                        "to have lived; more; in",
                        "live; great; by",
                        "lived; and ; over"
                    ],
                    "correctAnswer": "living; especially;out"
                }]
        },
        {
            questions: [
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "English _____ the most important language _____the world because more and more people use English to communicate. Furthermore, there are less and less people who are unable to use English at _____. Scientific research has proven that learning English in context makes _____connection.",
                    "correctAnswer": "has become; in; all; logical",
                    "choices": [
                        "became; of; lunch; the logical",
                        "has become; in; all; logical",
                        "had become; by; night; a logical",
                        "became; in; all; logical"
                    ]
                }]
        },
        {
            questions: [
                {
                    "type": "radiogroup",
                    "name": "question 7",
                    "title": "Does \"Break up\" mean ending a relationship?",
                    "correctAnswer": "True",
                    "choices": [
                        "True",
                        "False"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "radiogroup",
                    "name": "question 8",
                    "title": "Does \"Break out\" mean wearing something several times?",
                    "correctAnswer": "False",
                    "choices": [
                        "True",
                        "False"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "radiogroup",
                    "name": "question 9",
                    "title": "Does \"Break into\" mean losing self-control?",
                    "correctAnswer": "False",
                    "choices": [
                        "True",
                        "False"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "radiogroup",
                    "name": "question 10",
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
        document
            .querySelector('#buttonMore1')
            .style.display = 'inline';
        document
            .querySelector('#buttonMore2')
            .style.display = 'inline';
    });

$("#surveyElement").Survey({ model: survey }).add(function () {
    if (a) {
        document
            .getElementById('buttonMore').style.display = 'none';
        document
            .getElementById('buttonMore1').style.display = 'none';
        document
            .getElementById('buttonMore2').style.display = 'none';
    }
});