Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "More about Aussie Cuisine",
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
                    "html": "You are about to start quiz by Aussie Cuisine. <br/>You have 2 mins for the whole test of 7 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready.</br>Quiz design is inspired by howstuffworks:https://play.howstuffworks.com"
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "image",
                    "imageLink": "https://cdn.now.howstuffworks.com/media-content/dd0be0e1-4630-4759-825e-bd5b7bc5ffe3-1024-576.jpg"
                },
                {
                    "type": "radiogroup",
                    "title": "It's spreadable and edible. What is it?",
                    "name":"question 1",
                    "choicesOrder": "random",
                    "choices": [
                        "Pretzels",
                        "Finger lime",
                        "Vegemite",
                        "Sausage sanger"
                    ],
                    "correctAnswer": "Vegemite"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='Vegemite'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 1}='Pretzels'or {question 1}='Finger lime' or {question 1}='Sausage sanger'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "image",
                    "imageLink": "https://cdn.now.howstuffworks.com/media-content/ce903aed-3bdf-4ef5-a52b-026d31f0bc40-1024-576.jpg"
                },
                {
                    "type": "radiogroup",
                    "title": "It's of military origin. What is it?",
                    "name": "question 2",
                    "choicesOrder": "random",
                    "choices": [
                        "Anzac biscuit",
                        "Pavlova",
                        "Sea parsley",
                        "Emu"
                    ],
                    "correctAnswer": "Anzac biscuit"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='Anzac biscuit'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 2}='Pavlova'or {question 2}='Sea parsley' or {question 2}='Emu'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "image",
                    "imageLink": "https://cdn.now.howstuffworks.com/media-content/0230b0da-f768-487d-9f4a-1e55c11b551b-1024-576.jpg"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 3",
                    "title": "What is this pastry called?",
                    "choices": [
                        "Macadamia",
                        "Almondray",
                        "Lamington",
                        "Damper"
                    ],
                    "correctAnswer": "Lamington"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='Lamington'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 3}='Macadamia'or {question 3}='Almondray' or {question 3}='Damper'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "image",
                    "imageLink": "https://cdn.now.howstuffworks.com/media-content/06cf249a-d57a-4a7d-8628-d93897fbf6e8-1024-576.jpg"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 4",
                    "title": "What do you think this center/-filled food is?",
                    "choices": [
                        "Salt and pepper calamari",
                        "Fish 'n' chips",
                        "VoVo",
                        "Meat pie"
                    ],
                    "correctAnswer": "Meat pie"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='Meat pie'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 4}='Salt and pepper calamari'or {question 4}='Fish 'n' chips' or {question 4}='VoVo'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "image",
                    "imageLink": "https://cdn.now.howstuffworks.com/media-content/3a92a52f-9442-40f5-ad4c-e28041f59277-1024-576.jpg"
                },
                {
                    "type": "radiogroup",
                    "name": "question 5",
                    "title": "What's this dual-toned thing?",
                    "choicesOrder": "random",
                    "choices": [
                        "Sticky rice",
                        "Turkish delight",
                        "Neenish tart",
                        "Sausage roll"
                    ],
                    "correctAnswer": "Neenish tart"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='Neenish tart'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 5}='Sticky rice'or {question 5}='Turkish delight' or {question 5}='Sausage roll'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "image",
                    "imageLink": "https://cdn.now.howstuffworks.com/media-content/ec1e6d27-ba36-440c-a3a3-d32519df43a0-1024-576.jpg"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 6",
                    "title": "What's this fruit called?",
                    "choices": [
                        "Tamarind",
                        "Camachile",
                        "Rose apple",
                        "Bowen mangoes"
                    ],
                    "correctAnswer": "Bowen mangoes"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='Bowen mangoes'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 6}='Tamarind'or {question 6}='Camachile' or {question 6}='Rose apple'",
                    "html": "<h4>No, think again!</h4>"
                },
                {
                    "type": "image",
                    "imageLink": "https://cdn.now.howstuffworks.com/media-content/2460477b-e74f-45aa-ad9c-f192a49f7649-1024-576.jpg"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "question 7",
                    "title": "Aussies love this smashed. What is it?",
                    "choices": [
                        "Avocado",
                        "Bamboo shoots",
                        "Calamari",
                        "Taho"
                    ],
                    "correctAnswer": "Avocado"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='Avocado'",
                    "html": "<h4 style='background-color:aqua'>Yes! Correct!!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{question 7}='Bamboo shoots'or {question 7}='Calamari' or {question 7}='Taho'",
                    "html": "<h4>No, think again!</h4>"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Know more about Aussie Cuisine</h4>"
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