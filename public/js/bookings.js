console.clear();

let reservations = [];
let waitingList = [];

const reservationsEl = $("#reservations");
const waitingListEl = $("#waiting-list");

function displayBookings() {
    for (const booking of reservations) {
        reservationsEl.append($("<li>").text(booking.name));
    }
    for (const booking of waitingList) {
        waitingListEl.append($("<li>").text(booking.name));
    }
}

function clearBookings() {
    reservationsEl.html("");
    waitingListEl.html("");
}

$.get("/api/reservations", data => {
    reservations = data;
    $.get("/api/wait", data => {
        waitingList = data;
        displayBookings();
    })
})