// ===============================
// TRAVEL BOOKING DASHBOARD JS
// ===============================

// Dashboard Counters
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// ===============================
// SIDEBAR TOGGLE
// ===============================

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

// ===============================
// LIVE DATE & TIME
// ===============================

function updateClock() {
    const clock = document.getElementById("clock");

    if (clock) {
        const now = new Date();

        clock.innerHTML =
            now.toLocaleDateString() +
            " | " +
            now.toLocaleTimeString();
    }
}

setInterval(updateClock, 1000);

// ===============================
// BOOKING SEARCH
// ===============================

const searchInput = document.getElementById("searchBooking");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {

        const filter =
            searchInput.value.toLowerCase();

        const rows =
            document.querySelectorAll(".booking-row");

        rows.forEach(row => {

            const text =
                row.textContent.toLowerCase();

            row.style.display =
                text.includes(filter)
                ? ""
                : "none";
        });
    });
}

// ===============================
// PACKAGE BOOKING BUTTON
// ===============================

const bookButtons =
    document.querySelectorAll(".book-btn");

bookButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const packageName =
            btn.getAttribute("data-package");

        alert(
            "Booking Successful!\n\nPackage: " +
            packageName
        );
    });
});

// ===============================
// FEEDBACK FORM
// ===============================

const feedbackForm =
    document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", e => {

        e.preventDefault();

        const name =
            document.getElementById("userName").value;

        alert(
            "Thank you " +
            name +
            " for your feedback!"
        );

        feedbackForm.reset();
    });
}

// ===============================
// MESSAGE NOTIFICATIONS
// ===============================

let notificationCount = 3;

const notification =
    document.getElementById("notification-count");

if (notification) {
    notification.innerText = notificationCount;
}

function addMessage() {

    notificationCount++;

    if (notification) {
        notification.innerText =
            notificationCount;
    }

    alert("New message received!");
}

// Demo Notification Every 30 Seconds
setInterval(addMessage, 30000);

// ===============================
// UPCOMING TRIPS ALERT
// ===============================

const tripBtn =
    document.getElementById("tripAlert");

if (tripBtn) {

    tripBtn.addEventListener("click", () => {

        alert(
            "Upcoming Trips:\n\n" +
            "Bali Tour - 12 June\n" +
            "Dubai Tour - 15 June\n" +
            "Maldives Tour - 20 June"
        );
    });
}

// ===============================
// GUIDE CONTACT BUTTON
// ===============================

const guideButtons =
    document.querySelectorAll(".guide-contact");

guideButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const guide =
            btn.dataset.guide;

        alert(
            "Contact request sent to " +
            guide
        );
    });
});

// ===============================
// GALLERY IMAGE PREVIEW
// ===============================

const galleryImages =
    document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const preview =
            document.getElementById("preview");

        if (preview) {
            preview.src = img.src;
        }
    });
});

// ===============================
// BOOKINGS DATA
// ===============================

const bookings = [
    {
        id: 101,
        customer: "Rohan",
        destination: "Bali",
        amount: 1200
    },
    {
        id: 102,
        customer: "Ankit",
        destination: "Dubai",
        amount: 1500
    },
    {
        id: 103,
        customer: "Priya",
        destination: "Maldives",
        amount: 1800
    }
];

console.log("Bookings:");
console.table(bookings);

// ===============================
// TOTAL EARNINGS
// ===============================

let total = 0;

bookings.forEach(booking => {
    total += booking.amount;
});

console.log(
    "Total Earnings: $" + total
);

// ===============================
// DARK MODE
// ===============================

const darkBtn =
    document.getElementById("darkMode");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle(
            "dark-theme"
        );
    });
}

// ===============================
// WELCOME MESSAGE
// ===============================

window.onload = () => {

    console.log(
        "Travel Booking Dashboard Loaded Successfully!"
    );

    alert(
        "Welcome to Travel Booking Dashboard ✈️"
    );
};