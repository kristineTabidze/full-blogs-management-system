const scrollToQuestions = () => {
    const coordinates = document.getElementById("questions");
    window.scroll(coordinates.top, 9999);
};

const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
];

const numberConvertor = (value) => {
    if (+value > 999999) {
        return (
            value.slice(0, value.length - 6) +
            " " +
            value.slice(value.length - 6, value.length - 3) +
            " " +
            value.slice(value.length - 3)
        );
    } else if (+value > 999)
        return (
            value.slice(0, value.length - 3) + " " + value.slice(value.length - 3)
        );
    else return value;
};

const questions = [
    {
        question: "What is coronavirus? ",
        id: "1",
        answer:
            'Coronaviruses are a large family of viruses that can cause disease in animals or humans. Respiratory infections such as Middle East Respiratory Syndrome (MERS) or Severe Acute Respiratory Syndrome (SARS) can develop in humans. "COVID-19. It was first recorded in December 2019 in Wuhan (China).',
    },
    {
        question: "What are the typical symptoms of coronavirus?",
        id: "2",
        answer:
            "The most common symptoms of COVID-19 are: fever, fatigue, dry cough, shortness of breath. Some patients may have a runny nose, sore throat or diarrhea. It is noteworthy that the symptoms develop gradually. Symptoms. ",
    },
    {
        question: "Who is at risk for COVID-19?",
        id: "3",
        answer:
            "People at risk of contracting the virus include the elderly and those with chronic diseases.",
    },
    {
        question: "How is the coronavirus spread?",
        id: "4",
        answer:
            "The disease is spread from person to person through small droplets coming from the nose, nose or mouth. Drops are spread on objects, clothes… We first touch this surface and then our mouth, eyes or nose, causing the virus to enter our body. No contact was made with the touch. ",
    },
    {
        question: "How to protect yourself from coronavirus?",
        id: "5",
        answer:
            'To protect against coronavirus, we need to follow the following recommendations: Regularly and thoroughly wash your hands with soap and water and / or alcohol-based disinfectants; keep a minimum distance of one meter between us and the speaker; "Let"s cover the bent elbow; try to stay at home as much as possible;',
    },
    {
        question: "What should we do in case of symptoms?",
        id: "6",
        answer:
            "If you have any symptoms, you should contact your doctor immediately. You can consult a doctor by phone, 24 hours a day. Call 112 to contact medical facilities.",
    },
    {
        question: "How is COVID19 diagnosed? ",
        id: "7",
        answer:
            "If the treating physician suspects that the patient may have coronavirus, he or she will undergo a diagnostic test.",
    },
    {
        question: "How much does a coronavirus diagnostic test cost?",
        id: "8",
        answer:
            "Coronavirus diagnostic studies, including specific ones, are fully funded by the state.",
    },
    {
        question: "Which are the high risk countries?",
        id: "9",
        answer:
            "Countries at high risk of spreading COVID-19 are: China, Italy, USA, Spain, Germany, Iran, France, Switzerland, UK, South Korea.",
    },
    {
        question: "How should a newly returned citizen behave in the country?",
        id: "10",
        answer:
            "Every new citizen returning to the country must go through a 14-day quarantine, which may be further extended by self-isolation.",
    },
    {
        question:
            "How should a Georgian citizen living in a foreign country who wants to return to his homeland behave?",
        id: "11",
        answer:
            "A Georgian citizen living in a foreign country who wants to return to his homeland has the opportunity to use Georgian Airlines.",
    },
    {
        question: "In what case does the citizen remain in self-isolation?",
        id: "12",
        answer:
            "If the citizen's living environment is in accordance with the rules of self-isolation according to the epidemiologist, he can spend 14 days in the appropriate environment, and if the environment is not favorable, the citizen will move / remain in the quarantine zone.",
    },
    {
        question:
            "What should a citizen do if he has had contact with a person infected with the virus?",
        id: "13",
        answer:
            "If a citizen had contact with a person infected with the virus, he must follow the rules of self-isolation and immediately call the hotline of the Ministry of Disease Control or Health. Disease Control Hotline: 116 001; Ministry of Health Hotline: 1505",
    },
    {
        question:
            "What are the requirements for coronavirus for people in self-isolation?",
        id: "14",
        answer:
            "You need to be completely isolated from other people; Wash your hands often with soap and water and / or an alcohol-based disinfectant; Use only household items allocated to you;",
    },
    {
        question: "Who issues a certificate to an employed, isolated person?",
        id: "15",
        answer:
            "An employed citizen in isolation has the right to request a certificate equivalent to a hospital certificate issued by the Ministry of Health of Georgia.",
    },
    {
        question:
            "What led to the reduction in the number of pies and the increase in price?",
        id: "16",
        answer:
            "As demand for pyrotechnics has grown colossally around the world, there has been a problem with their supply and price growth. It is noteworthy that work is underway to address the problem.",
    },
];

const blogs = [
    {
        id: "0",
        title: "React JS",
        shortDescription:
            "React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
        img: "./imgs/react.png",
    },
    {
        id: "1",
        title: "Angular",
        shortDescription:
            'Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
        img: "./imgs/angular.png",
    },
    {
        id: "2",
        title: "Vue",
        shortDescription:
            "Vue.js (commonly referred to as Vue; pronounced /vjuː/, like 'view') is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members",
        img: "./imgs/vue.png",
    },
    {
        id: "3",
        title: "Node JS",
        shortDescription:
            "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
        img: "./imgs/node.png",
    },
    {
        id: "4",
        title: "PHP",
        shortDescription:
            "PHP is a general-purpose scripting language especially suited to web development.[5] It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994",
        img: "./imgs/php.png",
    },
    {
        id: "5",
        title: "Corona Virus",
        shortDescription:
            "Coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. In humans and birds, they cause respiratory tract infections that can range from mild to lethal.",
        img: "./imgs/corona.png",
    },
];
