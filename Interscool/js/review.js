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
                    "title": "Match Below two halves of these sentences",
                    "choices": [
                        "Some people will never forget the war. My mother has never forgot my birthday. This week I have forgotten where I live twice. Last week my wife forgotten my birthday.",
                        "Some people will never forget the war. My mother has never forgotten my birthday. This week I have forgotten where I live twice. Last week my wife forgot my birthday.",
                        "Some people will never forgotten where I live twice.; My mother has never forget the war; This week I have Last week my wife. Last week my wife forgotten my birthday.",
                        "Some people will never forgot my birthday. My mother has never forgotten where I live twice. This week I have forget the war. Last week my wife forgotten my birthday."
                    ],
                    "correctAnswer": "Some people will never forget the war. My mother has never forgotten my birthday. This week I have forgotten where I live twice. Last week my wife forgot my birthday."
                },
                {
                    "type": "radiogroup",
                    "name": "question 5",
                    "title": "Match Below two halves of these sentences",
                    "choicesOrder": "random",
                    "choices": [
                        "The black one is as nice as the blue one. The black on isn't as nice as the blue one. The blue one is nicer than the black one. I think the blue one is the nicest of the two shirts.",
                        "The black one is nicer than the black one.; The black on isn't as nice as the blue one. The blue one is the nicest of the two shirts.; I think the blue one nice as the blue one.",
                        "The black one is is the nicest of the two shirts. The black on isn't as nice as the blue one. The blue one is nicer than the black one.; I think the blue one nice as the blue one.",
                        "The black one is nicer than the black one.; The black on isn't as 8; The blue one is nice as the blue one. I think the blue one as nice as the blue one"
                    ],
                    "correctAnswer": "The black one is as nice as the blue one. The black on isn't as nice as the blue one. The blue one is nicer than the black one. I think the blue one is the nicest of the two shirts."
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "Match Below two halves of these sentences",
                    "choices": [
                        "Different cultures are regional and national. Some cultures customs are ancient. Their culture have different customs. All cultures seems strange to me.",
                        "Different cultures have different customs. Some cultures are regional and national. Their culture seems strange to me. All cultures customs are ancient.",
                        "Different cultures seems strange to me. Some cultures are regional and national. Their culture have different customs. All cultures customs are ancient.",
                        "Different cultures have different customs. Some cultures customs are ancient. Their culture seems strange to me. All cultures are regional and national."
                    ],
                    "correctAnswer": "Different cultures have different customs. Some cultures customs are ancient. Their culture seems strange to me. All cultures are regional and national."
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 7",
                    "title": "Arrange below these lines into a logical order",
                    "choices": [
                        "Is why we offer our service totally free of charge, with no additional fees as fellow travelers and language lovers, we know how important it is that your trip fits your budget, which",
                        "How important it is that your trip fits your budget, which as fellow travelers and language lovers, we know is why we offer our service totally free of charge, with no additional fees",
                        "As fellow travelers and language lovers, we know how important it is that your trip fits your budget, which is why we offer our service totally free of charge, with no additional fees",
                        "Charge, with no additional fees is why we offer our service totally free of as fellow travelers and language lovers, we know how important it is that your trip fits your budget, which"
                    ],
                    "correctAnswer": "As fellow travelers and language lovers, we know how important it is that your trip fits your budget, which is why we offer our service totally free of charge, with no additional fees"
                },
                {
                    "choicesOrder": "random",
                    "type": "radiogroup",
                    "name": "question 8",
                    "title": "Arrange below these lines into a logical order",
                    "choices": [
                        "Are place with a homestay whose tastes a vegetarian, the host family will also be vegetarian when we match you with a homestay we will match your preferences so that you-Match your own - for example, if you are",
                        "A vegetarian, the host family will also be vegetarian-Match your own - for example, if you are will match your preferences so that you when we match you with a homestay we are place with a homestay whose tastes",
                        "Match your own - for example, if you are when we match you with a homestay we a vegetarian, the host family will also be vegetarian will match your preferences so that you are place with a homestay whose tastes",
                        "When we match you with a homestay we will match your preferences so that you are place with a homestay whose tastes match your own - for example, if you are a vegetarian, the host family will also be vegetarian"
                    ],
                    "correctAnswer": "When we match you with a homestay we will match your preferences so that you are place with a homestay whose tastes match your own - for example, if you are a vegetarian, the host family will also be vegetarian"
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
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Marks between <b>0-7</b> is belong to <b>Elementary level</b>.</h4><h4>Marks between <b>7-14</b> is belong to <b>intermediate level</b>.</h4>"
};

window.survey = new Survey.Model(json);
survey.data = {
    "question 1": "through; under",
    "question 2": "earn; spend",
    "question 3": "reply; to ; in ; about",
    "question 4": "Some people will never forget the war. My mother has never forgotten my birthday. This week I have forgotten where I live twice. Last week my wife forgot my birthday.",
    "question 5": "The black one is as nice as the blue one. The black on isn't as nice as the blue one. The blue one is nicer than the black one. I think the blue one is the nicest of the two shirts.",
    "question 6": "Different cultures have different customs. Some cultures customs are ancient. Their culture seems strange to me. All cultures are regional and national.",
    "question 7": "As fellow travelers and language lovers, we know how important it is that your trip fits your budget, which is why we offer our service totally free of charge, with no additional fees",
    "question 8": "When we match you with a homestay we will match your preferences so that you are place with a homestay whose tastes match your own - for example, if you are a vegetarian, the host family will also be vegetarian",
    "question 9": "living; especially;out",
    "question 10": "has become; in; all; logical",
    "question 11": "True",
    "question 12": "False",
    "question 13": "False",
    "question 14": "False"
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