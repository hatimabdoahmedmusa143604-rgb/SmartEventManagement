document.addEventListener("DOMContentLoaded", function () {

    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {

        registrationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const studentName =
                document.getElementById("studentName").value;

            const enrollment =
                document.getElementById("enrollment").value;

            const email =
                document.getElementById("email").value;

            const department =
                document.getElementById("department").value;

            const seats =
                document.getElementById("seats").value;

            const registrationData = {
                studentName: studentName,
                enrollment: enrollment,
                email: email,
                department: department,
                seats: seats
            };

            localStorage.setItem(
                "registrationData",
                JSON.stringify(registrationData)
            );

            window.location.href = "confirmation.html";
        });
    }

});
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const feedbackName =
            document.getElementById("feedbackName").value;

        const eventName =
            document.getElementById("eventName").value;

        const rating =
            document.querySelector(
                'input[name="rating"]:checked'
            ).value;

        const comments =
            document.getElementById("comments").value;

        const feedbackData = {
            name: feedbackName,
            event: eventName,
            rating: rating,
            comments: comments
        };

        localStorage.setItem(
            "feedbackData",
            JSON.stringify(feedbackData)
        );

        const message =
            document.getElementById("feedbackMessage");

        message.style.display = "block";

        message.textContent =
            "✓ Thank you, " +
            feedbackName +
            "! Your feedback has been submitted successfully.";

        feedbackForm.reset();
    });
}
// Event Search and Filter

const eventSearch = document.getElementById("eventSearch");
const eventFilter = document.getElementById("eventFilter");
const eventCards = document.querySelectorAll(".event-card");

function filterEvents() {

    const searchText = eventSearch.value.toLowerCase();
    const selectedCategory = eventFilter.value;

    eventCards.forEach(function(card) {

        const eventName =
            card.querySelector("h2").textContent.toLowerCase();

        const category =
            card.getAttribute("data-category");

        const matchesSearch =
            eventName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

if (eventSearch && eventFilter) {

    eventSearch.addEventListener("input", filterEvents);

    eventFilter.addEventListener("change", filterEvents);
}