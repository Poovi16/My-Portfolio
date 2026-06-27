// ===============================
// PORTFOLIO CHATBOT
// ===============================

const chatToggle = document.getElementById("chatToggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

// -------------------------------
// OPEN / CLOSE
// -------------------------------

chatToggle.addEventListener("click", () => {
    chatbot.classList.toggle("active");
});

closeChat.addEventListener("click", () => {
    chatbot.classList.remove("active");
});

// -------------------------------
// ENTER KEY
// -------------------------------

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

sendBtn.addEventListener("click", sendMessage);

// -------------------------------
// QUICK BUTTONS
// -------------------------------

function quickQuestion(question) {
    userInput.value = question;
    sendMessage();
}

// -------------------------------
// SEND MESSAGE
// -------------------------------

function sendMessage() {

    const text = userInput.value.trim();

    if (text === "") return;

    addUserMessage(text);

    userInput.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        botReply(text);

    }, 1200);

}

// -------------------------------
// USER MESSAGE
// -------------------------------

function addUserMessage(text) {

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = text;

    chatBody.appendChild(div);

    scrollBottom();

}

// -------------------------------
// BOT MESSAGE
// -------------------------------

function addBotMessage(text) {

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = text;

    chatBody.appendChild(div);

    scrollBottom();

}

// -------------------------------
// TYPING
// -------------------------------

function showTyping() {

    const typing = document.createElement("div");

    typing.className = "typing";

    typing.id = "typing";

    typing.innerHTML = `

        <span></span>

        <span></span>

        <span></span>

    `;

    chatBody.appendChild(typing);

    scrollBottom();

}

function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) typing.remove();

}

// -------------------------------
// AUTO SCROLL
// -------------------------------

function scrollBottom() {

    chatBody.scrollTop = chatBody.scrollHeight;

}

// -------------------------------
// BOT KNOWLEDGE
// -------------------------------

function botReply(msg) {

    msg = msg.toLowerCase();

    // Greetings

    if (
        msg.includes("hi") ||
        msg.includes("hello") ||
        msg.includes("hey")
    ) {

        addBotMessage("👋 Hello! Welcome to Poovarasan's Portfolio.<br><br>Ask me anything about his work.");

    }

    // About

    else if (
        msg.includes("about")
    ) {

        addBotMessage(`
        👨‍💻 <b>About Poovarasan</b><br><br>

        • AI & Data Science Graduate<br>
        • Python Developer<br>
        • Machine Learning Enthusiast<br>
        • AI Automation Learner<br>
        • Web Developer<br><br>

        Passionate about solving real-world problems using AI.
        `);

    }

    // Skills

    else if (
        msg.includes("skill")
    ) {

        addBotMessage(`
        💡 <b>Skills</b><br><br>

        ✅ Python<br>
        ✅ JavaScript<br>
        ✅ HTML<br>
        ✅ CSS<br>
        ✅ SQL<br>
        ✅ Machine Learning<br>
        ✅ Data Analysis<br>
        ✅ Power BI<br>
        ✅ Git & GitHub
        `);

    }

    // Projects

    else if (
        msg.includes("project")
    ) {

        addBotMessage(`
        🚀 <b>Projects</b><br><br>

        🤖 AI Talent OS - AI-Powered Career Development Platform<br><br>

        📊 VendorOS - Smart Retail & Inventory Management Platform<br><br>

        🌾 Crop Recommendation System<br><br>

        🏏 Cricket Shot Detection<br><br>

        🖥️ My Personal Portfolio Website
        `);

    }

    // Resume

    else if (
        msg.includes("resume") ||
        msg.includes("cv")
    ) {

        addBotMessage(`
        📄 Resume is available in the Resume section of the portfolio.<br><br>

        Click the Resume button to download it.
        `);

    }

    // Contact

    else if (
        msg.includes("contact") ||
        msg.includes("email") ||
        msg.includes("phone")
    ) {

        addBotMessage(`
        📧 Email : poovarasanaravith355@
        gmail.com<br><br>

        📱 Mobile : +91 9360866955<br><br>

        Feel free to contact anytime.
        `);

    }

    // GitHub

    else if (
        msg.includes("github")
    ) {

        addBotMessage(`
        🔗 GitHub<br><br>

        https://github.com/Poovi16
        `);

    }

    // LinkedIn

    else if (
        msg.includes("linkedin")
    ) {

        addBotMessage(`
        💼 LinkedIn<br><br>

        www.linkedin.com/in/poovarasan-m-
        `);

    }

    // Education

    else if (
        msg.includes("education")
    ) {

        addBotMessage(`
        🎓 AI & Data Science Graduate.<br><br>

        Interested in Artificial Intelligence, Data Analytics and Machine Learning.
        `);

    }

    // Experience

    else if (
        msg.includes("experience")
    ) {

        addBotMessage(`
        💼 Fresher.<br><br>

        Built multiple AI projects and continuously learning new technologies.
        `);

    }

    // Default

    else {

        addBotMessage(`
        🤖 Sorry, I don't understand that.<br><br>

        Try asking:<br><br>

        • About<br>
        • Skills<br>
        • Projects<br>
        • Resume<br>
        • Contact<br>
        • GitHub<br>
        • LinkedIn
        `);

    }

}