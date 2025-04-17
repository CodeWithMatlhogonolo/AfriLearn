// Initialize courses
document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { name: "Introduction to Programming", description: "Learn the basics of coding." },
        { name: "Mathematics for Beginners", description: "Strengthen your foundational math skills." },
        { name: "Data Science Basics", description: "Get introduced to data analysis techniques." }
    ];

    const courseList = document.querySelector('.course-list');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
        `;
        courseList.appendChild(courseElement);
    });
});

// Language toggle
document.getElementById("languageSelect").addEventListener("change", function () {
    const selectedLang = this.value;

    const translations = {
        en: {
            heroTitle: "Bridging Education Gaps in Africa",
            heroText: "Accessible, quality education for every learner in Africa",
            explore: "Explore Courses"
        },
        sw: {
            heroTitle: "Kuziba Mapengo ya Elimu Afrika",
            heroText: "Elimu bora, rahisi kufikiwa kwa kila mwanafunzi Afrika",
            explore: "Chunguza Kozi"
        },
        fr: {
            heroTitle: "Combler les lacunes en éducation en Afrique",
            heroText: "Une éducation de qualité accessible à chaque apprenant en Afrique",
            explore: "Explorer les cours"
        },
        ha: {
            heroTitle: "Cike Gibin Ilimi a Afirka",
            heroText: "Ilmi mai inganci ga kowane ɗalibi a Afirka",
            explore: "Bincika Darussa"
        },
        yo: {
            heroTitle: "Ipari Aiyede Eko ni Afrika",
            heroText: "Eko to peye fun gbogbo akeko ni Afrika",
            explore: "Ṣawari Awọn Kọ́ọ̀sì"
        }
    };

    const lang = translations[selectedLang];
    document.querySelector(".hero h2").textContent = lang.heroTitle;
    document.querySelector(".hero p").textContent = lang.heroText;
    document.querySelector(".btn").textContent = lang.explore;
});

// Modals
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function switchModal(current, next) {
    closeModal(current);
    openModal(next);
}

// Auth Logic
function signup() {
    const user = document.getElementById("signupUsername").value;
    const pass = document.getElementById("signupPassword").value;

    if (user && pass) {
        localStorage.setItem("afriUser", JSON.stringify({ user, pass }));
        alert("Account created! Please login.");
        closeModal("signupModal");
        openModal("loginModal");
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    const user = document.getElementById("loginUsername").value;
    const pass = document.getElementById("loginPassword").value;
    const stored = JSON.parse(localStorage.getItem("afriUser"));

    if (stored && user === stored.user && pass === stored.pass) {
        alert(`Welcome back, ${user}!`);
        closeModal("loginModal");
        document.querySelector(".auth-btn").textContent = `Logged in as ${user}`;
    } else {
        alert("Invalid credentials.");
    }
}
