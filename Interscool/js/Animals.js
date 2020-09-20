Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "More about Aussie Animals",
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
                    "html": "You are about to start quiz by Aussie Animals. <br/>You have 2 mins for the whole test of 8 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        },
        {
            "elements": [
                /*{
                    "type": "imagepicker",
                    "title": "Koalas nap for around 10 hours every day",
                    "choices": [
                        {
                            "value": "Koalas",
                            "imageLink": "https://images.newscientist.com/wp-content/uploads/2019/08/21123132/gettyimages-519731334.jpg"
                        },
                        {
                            "value": "Platypus",
                            "imageLink": "https://www.environment.sa.gov.au/files/sharedassets/good_living/images/content/2019/05/platypus-sightings-large.jpg"
                        },
                        {
                            "value": "Tasmanian devil",
                            "imageLink": "https://cdn.pixabay.com/photo/2017/06/02/00/39/australia-2365004_960_720.jpg"
                        },
                        {
                            "value": "Wombat",
                            "imageLink": "https://cdn.pixabay.com/photo/2020/04/27/11/39/adorable-5099450_960_720.jpg"
                        },
                        {
                            "value": "Kangaroos",
                            "imageLink": "https://cdn.pixabay.com/photo/2019/05/25/12/28/wallabies-4228258_960_720.jpg"
                        },
                        {
                            "value": "Quokkas",
                            "imageLink": "https://cdn.pixabay.com/photo/2017/08/15/11/58/quokkas-2643640_960_720.jpg"
                        },
                        {
                            "value": "Echidna",
                            "imageLink": "https://cdn.pixabay.com/photo/2020/08/28/18/10/echidna-5525269_960_720.jpg"
                        },
                        {
                            "value": "Emu",
                            "imageLink": "https://cdn.pixabay.com/photo/2019/07/23/11/42/emu-4357406_960_720.jpg"
                        },
                        {
                            "value": "Frill neck lizard",
                            "imageLink": "https://cdn.pixabay.com/photo/2014/04/26/16/35/frill-necked-lizard-332545_960_720.jpg"
                        }
                    ]
                },*/
                {
                    "type": "radiogroup",
                    "title": "Koalas nap for around 10 hours every day",
                    "name": "question 1",
                    "choices": [
                        "True",
                        "False"
                    ],
                    "correctAnswer": "False"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='False'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='True'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 2",
                    "title": "The female platypus is venomous",
                    "choices": [
                        "True",
                        "False"
                    ],
                    "correctAnswer": "False"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='False'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='True'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 3",
                    "title": "Tasmanian devils are only found in Tasmania",
                    "choices": [
                        "True",
                        "False"
                    ],
                    "correctAnswer": "True"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='True'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='False'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "name": "question 4",
                    "title": "A wombat's poo is shaped like a cube",
                    "choicesOrder": "random",
                    "choices": [
                        "True",
                        "False"
                    ],
                    "correctAnswer": "True"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='True'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='False'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 5",
                    "title": "Female kangaroos have three vaginas",
                    "choices": [
                        "True",
                        "False"
                    ],
                    "correctAnswer": "True"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='True'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='False'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "Quokkas are always smiling",
                    "choices": [
                        "True",
                        "False"
                    ],
                    "correctAnswer": "False"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='False'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='True'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "choicesOrder": "random",
                    "type": "radiogroup",
                    "name": "question 7",
                    "title": "There's a species of echidna named after Sir David Attenborough",
                    "choices": [
                        "True",
                        "False"
                    ],
                    "correctAnswer": "True"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='True'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='False'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 8",
                    "title": "Emus are not related to kiwis",
                    "choices": [
                        "True",
                        "False"
                    ],
                    "correctAnswer": "False"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 8}='False'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 8}='True'",
                    "html": "<h4>No, think again!</h4>"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Know more about Australian Animals.</h4>"
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