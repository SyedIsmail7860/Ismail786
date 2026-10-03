/* =========================================================
   HERBAL PLANTS CSP
   INTERACTIVE JAVASCRIPT
   NO LOADING FEATURE
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    const savedTheme = localStorage.getItem("herbalTheme");

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


/* =========================================================
   DATE & TIME
   ========================================================= */

function updateDateTime() {

    const dateTime = document.getElementById("dateTime");

    if (!dateTime) return;

    const now = new Date();

    const date = now.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

    const time = now.toLocaleTimeString(
        "en-IN",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );

    dateTime.textContent = `${date} | ${time}`;

}

updateDateTime();

setInterval(updateDateTime, 1000);


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================================
   PLANT SEARCH
   ========================================================= */

const plantSearch = document.getElementById("plantSearch");

const plantCards = document.querySelectorAll(".plant-card");

const noPlants = document.getElementById("noPlants");


function filterPlants() {

    if (!plantSearch) return;

    const searchText =
        plantSearch.value.toLowerCase().trim();

    const activeButton =
        document.querySelector(".filter-btn.active");

    const selectedCategory =
        activeButton
            ? activeButton.dataset.category
            : "all";

    let visiblePlants = 0;

    plantCards.forEach(card => {

        const cardText =
            card.textContent.toLowerCase();

        const cardCategory =
            card.dataset.category;

        const matchesSearch =
            cardText.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "";

            visiblePlants++;

        } else {

            card.style.display = "none";

        }

    });


    if (noPlants) {

        noPlants.style.display =
            visiblePlants === 0
                ? "block"
                : "none";

    }

}


if (plantSearch) {

    plantSearch.addEventListener(
        "input",
        filterPlants
    );

}


/* =========================================================
   PLANT CATEGORY FILTER
   ========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        filterPlants();

    });

});


/* =========================================================
   PLANT DATA
   ========================================================= */

const plantData = {

    tulsi: {

        name: "Tulsi",

        scientificName:
            "Ocimum tenuiflorum",

        category:
            "Medicinal Plant",

        emoji:
            "🌿",

        description:
            "Tulsi is a common plant traditionally used in household wellness practices and herbal preparations.",

        benefits: [

            "Traditionally used in herbal drinks",

            "Commonly grown in home gardens",

            "Part of traditional wellness practices"

        ]

    },


    neem: {

        name: "Neem",

        scientificName:
            "Azadirachta indica",

        category:
            "Medicinal Plant",

        emoji:
            "🌳",

        description:
            "Neem is a useful tree known for its traditional applications and importance in natural practices.",

        benefits: [

            "Traditionally used in skin-care practices",

            "Used in natural household practices",

            "Useful tree for the environment"

        ]

    },


    aloe: {

        name: "Aloe Vera",

        scientificName:
            "Aloe barbadensis miller",

        category:
            "Medicinal Plant",

        emoji:
            "🌱",

        description:
            "Aloe Vera is a succulent plant commonly used in traditional skin-care practices.",

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

        emoji:
            "🫚",

        description:
            "Ginger is a spice and herbal plant commonly used in food and traditional preparations.",

        benefits: [

            "Used in cooking",

            "Commonly used in herbal drinks",

            "Part of traditional food practices"

        ]

    },


    turmeric: {

        name: "Turmeric",

        scientificName:
            "Curcuma longa",

        category:
            "Spice Plant",

        emoji:
            "🌱",

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

        emoji:
            "🌺",

        description:
            "Hibiscus is a flowering plant commonly grown in gardens and used in traditional practices.",

        benefits: [

            "Beautiful garden plant",

            "Used in traditional hair-care practices",

            "Supports biodiversity in gardens"

        ]

    },


    mint: {

        name: "Mint",

        scientificName:
            "Mentha",

        category:
            "Medicinal Plant",

        emoji:
            "🌱",

        description:
            "Mint is an aromatic herb commonly used in food, drinks and traditional preparations.",

        benefits: [

            "Used in food and drinks",

            "Strong natural aroma",

            "Can be grown in home gardens"

        ]

    },


    lemongrass: {

        name: "Lemongrass",

        scientificName:
            "Cymbopogon",

        category:
            "Medicinal Plant",

        emoji:
            "🌾",

        description:
            "Lemongrass is an aromatic plant commonly used in food, drinks and traditional preparations.",

        benefits: [

            "Used in herbal drinks",

            "Has a pleasant aroma",

            "Can be grown in suitable gardens"

        ]

    }

};


/* =========================================================
   PLANT DETAILS MODAL
   ========================================================= */

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

            const plantId =
                button.dataset.plant;

            const plant =
                plantData[plantId];

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

    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {

                closeModal();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================================
   INTERACTIVE QUIZ
   ========================================================= */

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

        answer:
            "Tulsi"
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

        answer:
            "Ginger"
    },


    {
        question:
            "Which plant is known for traditional natural applications?",

        options: [
            "Neem",
            "Apple",
            "Rice",
            "Banana"
        ],

        answer:
            "Neem"
    },


    {
        question:
            "Which plant is commonly used in traditional skin-care practices?",

        options: [
            "Aloe Vera",
            "Rice",
            "Wheat",
            "Corn"
        ],

        answer:
            "Aloe Vera"
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

        answer:
            "Turmeric"
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

                ${question.options
                    .map(
                        option => `
                            <button
                                class="quiz-option"
                                data-answer="${option}"
                            >
                                ${option}
                            </button>
                        `
                    )
                    .join("")}

            </div>

        </div>

    `;


    document
        .querySelectorAll(".quiz-option")
        .forEach(option => {

            option.addEventListener(
                "click",
                () => {

                    checkQuizAnswer(
                        option.dataset.answer
                    );

                }
            );

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
            "inline-flex";

    }

}


if (quizRestart) {

    quizRestart.addEventListener(
        "click",
        () => {

            currentQuestion = 0;

            quizScore = 0;


            if (quizResult) {

                quizResult.classList.remove("show");

                quizResult.innerHTML = "";

            }


            quizRestart.style.display =
                "none";


            loadQuizQuestion();

        }
    );

}


if (quizContainer) {

    loadQuizQuestion();

}


/* =========================================================
   MUSIC BUTTON
   ========================================================= */

const music =
    document.getElementById("backgroundMusic");

const musicBtn =
    document.getElementById("musicBtn");


let musicPlaying = false;


if (musicBtn && music) {

    musicBtn.addEventListener(
        "click",
        () => {

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
                            "Please tap the music button again to start the music."
                        );

                    });

            }

        }
    );

}


/* =========================================================
   READ ALOUD
   ========================================================= */

document
    .querySelectorAll(".read-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const targetId =
                    button.dataset.target;

                const target =
                    document.getElementById(targetId);

                if (!target) return;


                if (
                    !("speechSynthesis" in window)
                ) {

                    alert(
                        "Read Aloud is not supported on this device."
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

            }
        );

    });


/* =========================================================
   BACK TO TOP
   ========================================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener(
    "scroll",
    () => {

        if (!backToTop) return;


        if (window.scrollY > 450) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   SCROLL ANIMATIONS
   ========================================================= */

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


/* =========================================================
   CTRL + K SEARCH
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            if (plantSearch) {

                plantSearch.focus();

            }

        }

    }
);


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

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


          
