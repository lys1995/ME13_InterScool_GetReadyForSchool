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
                },
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
                },
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
                },
                {
                    "type": "radiogroup",
                    "name": "question 7",
                    "title": "Does \"Break up\" mean ending a relationship?",
                    "correctAnswer": "True",
                    "choices": [
                        "True",
                        "False"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question 8",
                    "title": "Does \"Break out\" mean wearing something several times?",
                    "correctAnswer": "False",
                    "choices": [
                        "True",
                        "False"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "question 9",
                    "title": "Does \"Break into\" mean losing self-control?",
                    "correctAnswer": "False",
                    "choices": [
                        "True",
                        "False"
                    ]
                },
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
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Marks between <b>0-7</b> is belong to <b>Elementary level</b>.</h4><h4>Marks between <b>7-14</b> is belong to <b>intermediate level</b>.</h4>"
};

window.survey = new Survey.Model(json);
survey.data = {
    "question 1": "through; under",
    "question 2": "earn; spend",
    "question 3": "reply; to ; in ; about",
    "question 4": "When we match you with a homestay we will match your preferences so that you are place with a homestay whose tastes match your own - for example, if you are a vegetarian, the host family will also be vegetarian",
    "question 5": "living; especially;out",
    "question 6": "has become; in; all; logical",
    "question 7": "True",
    "question 8": "False",
    "question 9": "False",
    "question 10": "False"
};
survey.mode = "display";
survey.questionsOnPageMode = "singlePage";
survey.showNavigationButtons = "none";
survey.showProgressBar = "off";
survey.showTimerPanel = "none";
survey.maxTimeToFinishPage = 0;
survey.maxTimeToFinish = 0;
survey
    .onAfterRenderQuestion
    .add(function (survey, options) {
        var span = document.createElement("span");
        var isCorrect = options
            .question
            .isAnswerCorrect();
        span.innerHTML = isCorrect
            ? "Correct"
            : "Incorrect";
        span.style.color = isCorrect
            ? "green"
            : "red";
        var header = options
            .htmlElement
            .querySelector("h5");
        if (!isCorrect) {
            header.style.backgroundColor = "salmon";
            var radio = options
                .htmlElement
                .querySelector('input[value="' + options.question.correctAnswer + '"]');
            if (!!radio) {
                radio.parentElement.style.color = "green";
            }
        }
        header.appendChild(span);
    });

$("#result").Survey({model: survey});