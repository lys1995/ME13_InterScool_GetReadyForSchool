Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "More about Aussie Slang",
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
                    "html": "You are about to start quiz by Aussie Slang. <br/>You have 2 mins for the whole test of 10 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Guess what Amber fluid in Australia means?",
                    "choicesOrder": "random",
                    "choices": [
                        "Oil",
                        "Beer",
                        "Juice",
                        "Petrol"
                    ],
                    "correctAnswer": "Beer"
                },
                {
                    "type": "radiogroup",
                    "name": "When your friend says \"See you this ARVO\". What do they mean?",
                    "choicesOrder": "random",
                    "choices": [
                        "See you in the factory",
                        "ARVO is a name of the place",
                        "It is a name of the person",
                        "Afternoon"
                    ],
                    "correctAnswer": "Afternoon"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "If I was wearing BATHERS, what am I wearing?",
                    "choices": [
                        "Shoes",
                        "New hairstyle",
                        "Swimming Costume",
                        "Watch"
                    ],
                    "correctAnswer": "Swimming Costume"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "If someone offers you \"a cuppa\", say yes and you\'ll get a...",
                    "choices": [
                        "Cake",
                        "Punch in the nose",
                        "Beer",
                        "A cup of tea"
                    ],
                    "correctAnswer": "A cup of tea"
                },
                {
                    "type": "radiogroup",
                    "name": "If your friend says let\'s \"crack a tinny tonight\", what do they mean?",
                    "choicesOrder": "random",
                    "choices": [
                        "Open a can of milk",
                        "Open a can of beer",
                        "Open a bottle of water",
                        "Start a new game"
                    ],
                    "correctAnswer": "Open a can of beer"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "A \"wombat crossing\" is usually said for ?",
                    "choices": [
                        "Pedestrians",
                        "Kangaroo",
                        "Ships",
                        "Tadpole"
                    ],
                    "correctAnswer": "Pedestrians"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "What does \"Do you want to get a Brekkie tomorrow\" mean?",
                    "choices": [
                        "Let's meet at the office",
                        "It is a type of occupation",
                        "It means a holiday",
                        "The important meal of the day"
                    ],
                    "correctAnswer": "The important meal of the day"
                },
                {
                    "choicesOrder": "random",
                    "type": "radiogroup",
                    "name": "If someone says they are \"Aggro\", what does that mean?",
                    "choices": [
                        "Musician",
                        "Painter",
                        "Upset",
                        "Dancer"
                    ],
                    "correctAnswer": "Upset"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "This is a tough one.. So guess what \"hard yakka\" refers to?",
                    "choices": [
                        "Hard Day",
                        "Hard Work",
                        "Hard Day",
                        "Hard Helmet"
                    ],
                    "correctAnswer": "Hard Work"
                },
                {
                    "type": "radiogroup",
                    "choicesOrder": "random",
                    "name": "What does a \"Dunny\" mean?",
                    "choices": [
                        "Dining room",
                        "Kitchen",
                        "A Bedroom",
                        "A Toilet"
                    ],
                    "correctAnswer": "A Toilet"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><h4>Marks between <b>0-5</b> is belong to <b>Elementary level</b>.</h4><h4>Marks between <b>6-10</b> is belong to <b>intermediate level</b>.</h4>"
};

window.survey = new Survey.Model(json);
survey.data = {
    "Guess what Amber fluid in Australia means?": "Beer",
    "When your friend says \"See you this ARVO\". What do they mean?": "Afternoon",
    "What does a \"Dunny\" mean?": "A Toilet",
    "This is a tough one.. So guess what \"hard yakka\" refers to?": "Hard Work",
    "If someone says they are \"Aggro\", what does that mean?": "Upset",
    "A \"wombat crossing\" is usually said for ?": "Pedestrians",
    "If your friend says let\'s \"crack a tinny tonight\", what do they mean?": "Open a can of beer",
    "If someone offers you \"a cuppa\", say yes and you\'ll get a...": "A cup of tea",
    "If I was wearing BATHERS, what am I wearing?": "Swimming Costume",
    "What does \"Do you want to get a Brekkie tomorrow\" mean?": "The important meal of the day"
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

$("#surveyElement").Survey({model: survey});