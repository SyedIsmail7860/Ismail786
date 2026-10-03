// ==========================================
// HERBAL PLANTS CSP WEBSITE
// FULL JAVASCRIPT
// LOADING FEATURE REMOVED
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        menuBtn.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuBtn.classList.remove("active");

        });

    });

}


// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    const savedTheme =
        localStorage.getItem("herbalTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("herbalTheme", "dark");
            themeBtn.textContent = "☀️";

        } else {

            localStorage.setItem("herbalTheme", "light");
            themeBtn.textContent = "🌙";

        }

    });

}


// ==========================================
// DATE AND TIME
// ==========================================

function updateDateTime() {

    const dateTime =
        document.getElementById("dateTime");

    if (!dateTime) return;

    const now = new Date();

    const date =
        now.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

    const time =
        now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

    dateTime.textContent =
        `${date} | ${time}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);


// ==========================================
// YEAR
// ==========================================

const year =
    document.getElementById("year");

if (year) {
    year.textContent =
        new Date().getFullYear();
}


// ==========================================
// PLANT SEARCH
// ==========================================

const plantSearch =
    document.getElementById("plantSearch");

const plantCards =
    document.querySelectorAll(".plant-card");


if (plantSearch) {

    plantSearch.addEventListener("input", () => {

        const search =
            plantSearch.value
                .toLowerCase()
                .trim();

        plantCards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(search)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ==========================================
// PLANT FILTER
// ==========================================

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.dataset.category;

        plantCards.forEach(card => {

            if (category === "all") {

                card.style.display = "";

            } else if (
                card.dataset.category === category
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ==========================================
// PLANT DATA
// ==========================================

const plantData = {

    tulsi: {

        name: "Tulsi",

        scientificName:
            "Ocimum tenuiflorum",

        category:
            "Medicinal Plant",

        emoji: "🌿",

        description:
            "Tulsi is a common medicinal plant traditionally used for health and wellness.",

        benefits: [
            "Traditionally used for respiratory support",
            "Used in herbal drinks",
            "Commonly grown in home gardens"
        ]

    },


    neem: {

        name: "Neem",

        scientificName:
            "Azadirachta indica",

        category:
            "Medicinal Plant",

        emoji: "🌳",

        description:
            "Neem is a useful tree known for its traditional medicinal and natural applications.",

        benefits: [
            "Traditionally used for skin care",
            "Natural insect-repellent properties",
            "Useful in traditional practices"
        ]

    },


    aloe: {

        name: "Aloe Vera",

        scientificName:
            "Aloe barbadensis miller",

        category:
            "Medicinal Plant",

        emoji: "🌱",

        description:
            "Aloe Vera is a succulent plant widely used in traditional skin-care practices.",

        benefits: [
            "Commonly used for skin care",
            "Easy to grow at home",
            "Requires relatively little water"
        ]

    },


    ginger: {

        name: "Ginger",

        scientificName:
            "Zingiber officinale",

        category:
            "Spice Plant",

        emoji: "🫚",

        description:
            "Ginger is a spice and herbal plant commonly used in food and traditional remedies.",

        benefits: [
            "Used in cooking",
            "Commonly used in herbal drinks",
            "Traditionally used for digestion"
        ]

    },


    turmeric: {

        name: "Turmeric",

        scientificName:
            "Curcuma longa",

        category:
            "Spice Plant",

        emoji: "🌱",

        description:
            "Turmeric is a widely used spice and traditional herbal plant.",

        benefits: [
            "Used in cooking",
            "Contains curcumin",
            "Used in traditional practices"
        ]

    },


    hibiscus: {

        name: "Hibiscus",

        scientificName:
            "Hibiscus rosa-sinensis",

        category:
            "Flowering Plant",

        emoji: "🌺",

        description:
            "Hibiscus is a flowering plant commonly grown in gardens and used in traditional practices.",

        benefits: [
            "Beautiful garden plant",
            "Used in traditional hair-care practices",
            "Supports biodiversity in gardens"
        ]

    }

};


// ==========================================
// PLANT MODAL
// ==========================================

const modal =
    document.getElementById("plantModal");

const modalClose =
    document.getElementById("modalClose");

const modalName =
    document.getElementById("modalName");

const modalScientific =
    document.getElementById("modalScientific");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalBenefits =
    document.getElementById("modalBenefits");

const modalEmoji =
    document.getElementById("modalEmoji");


document.querySelectorAll(".view-plant")
    .forEach(button => {

        button.addEventListener("click", () => {

            const id =
                button.dataset.plant;

            const plant =
                plantData[id];

            if (!plant || !modal) return;

            modalName.textContent =
                plant.name;

            modalScientific.textContent =
                `Scientific Name: ${plant.scientificName}`;

            modalCategory.textContent =
                plant.category;

            modalDescription.textContent =
                plant.description;

            modalEmoji.textContent =
                plant.emoji;

            modalBenefits.innerHTML = "";

            plant.benefits.forEach(benefit => {

                const li =
                    document.createElement("li");

                li.textContent =
                    benefit;

                modalBenefits.appendChild(li);

            });

            modal.classList.add("show");

            document.body.style.overflow =
                "hidden";

        });

    });


function closeModal() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal();
        }

    });

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


// ==========================================
// QUIZ
// ==========================================

const quizQuestions = [

    {
        question:
            "Which plant is commonly known as a medicinal plant?",

        options: [
            "Tulsi",
            "Rose",
            "Mango",
            "Wheat"
        ],

        answer: "Tulsi"
    },


    {
        question:
            "Which plant is commonly used as a spice?",

        options: [
            "Ginger",
            "Rose",
            "Grass",
            "Sunflower"
        ],

        answer: "Ginger"
    },


    {
        question:
            "Which plant is known for natural insect-repellent properties?",

        options: [
            "Neem",
            "Apple",
            "Rice",
            "Banana"
        ],

        answer: "Neem"
    },


    {
        question:
            "Which plant is commonly used in traditional skin care?",

        options: [
            "Aloe Vera",
            "Rice",
            "Wheat",
            "Corn"
        ],

        answer: "Aloe Vera"
    },


    {
        question:
            "Which spice contains curcumin?",

        options: [
            "Turmeric",
            "Ginger",
            "Pepper",
            "Cardamom"
        ],

        answer: "Turmeric"
    }

];


const quizContainer =
    document.getElementById("quizContainer");

const quizResult =
    document.getElementById("quizResult");

const quizRestart =
    document.getElementById("quizRestart");


let currentQuestion = 0;
let quizScore = 0;


function loadQuizQuestion() {

    if (!quizContainer) return;

    const question =
        quizQuestions[currentQuestion];

    quizContainer.innerHTML = `

        <div class="quiz-question">

            <h3>
                ${currentQuestion + 1}.
                ${question.question}
            </h3>

            <div class="quiz-options">

                ${question.options.map(option => `

                    <button
                        class="quiz-option"
                        data-answer="${option}">

                        ${option}

                    </button>

                `).join("")}

            </div>

        </div>

    `;


    document.querySelectorAll(".quiz-option")
        .forEach(option => {

            option.addEventListener("click", () => {

                checkQuizAnswer(
                    option.dataset.answer
                );

            });

        });

}


function checkQuizAnswer(answer) {

    if (
        answer ===
        quizQuestions[currentQuestion].answer
    ) {

        quizScore++;

    }

    currentQuestion++;

    if (
        currentQuestion <
        quizQuestions.length
    ) {

        loadQuizQuestion();

    } else {

        showQuizResult();

    }

}


function showQuizResult() {

    if (quizContainer) {
        quizContainer.innerHTML = "";
    }

    if (quizResult) {

        quizResult.innerHTML = `

            <h3>
                🎉 Quiz Completed!
            </h3>

            <p>
                Your Score:
                <strong>
                    ${quizScore}/${quizQuestions.length}
                </strong>
            </p>

        `;

        quizResult.classList.add("show");

    }

    if (quizRestart) {
        quizRestart.style.display =
            "inline-block";
    }

}


if (quizRestart) {

    quizRestart.addEventListener("click", () => {

        currentQuestion = 0;
        quizScore = 0;

        if (quizResult) {

            quizResult.classList.remove("show");

            quizResult.innerHTML = "";

        }

        quizRestart.style.display =
            "none";

        loadQuizQuestion();

    });

}


if (quizContainer) {
    loadQuizQuestion();
}


// ==========================================
// MUSIC
// ==========================================

const music =
    document.getElementById("backgroundMusic");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;


if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (musicPlaying) {

            music.pause();

            musicBtn.textContent =
                "🎵 Music";

            musicPlaying = false;

        } else {

            music.play()
                .then(() => {

                    musicBtn.textContent =
                        "⏸️ Pause";

                    musicPlaying = true;

                })
                .catch(() => {

                    alert(
                        "Please tap the music button again."
                    );

                });

        }

    });

}


// ==========================================
// READ ALOUD
// ==========================================

document.querySelectorAll(".read-aloud")
    .forEach(button => {

        button.addEventListener("click", () => {

            const target =
                document.getElementById(
                    button.dataset.target
                );

            if (!target) return;

            if (!("speechSynthesis" in window)) {

                alert(
                    "Read Aloud is not supported."
                );

                return;
            }

            window.speechSynthesis.cancel();

            const speech =
                new SpeechSynthesisUtterance(
                    target.innerText
                );

            speech.lang = "en-IN";
            speech.rate = 0.9;
            speech.pitch = 1;

            window.speechSynthesis.speak(
                speech
            );

        });

    });


// ==========================================
// BACK TO TOP
// ==========================================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (
            elementTop <
            windowHeight - 80
        ) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ==========================================
// CTRL + K SEARCH
// ==========================================

document.addEventListener("keydown", event => {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        if (plantSearch) {
            plantSearch.focus();
        }

    }

});


// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        }
    );

});


// ==========================================
// WEBSITE MESSAGE
// ==========================================

console.log(
    "🌿 Herbal Plants CSP Website loaded successfully!"
);

console.log(
    "Loading screen has been removed."
);
