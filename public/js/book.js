console.clear();

function createBooking() {
    const newBooking = {
        name: $("#name").val(),
        seats: $("#seats").val()
    }
    return newBooking;
}

$("#submit").on("click", () => {
    const booking = createBooking();
    console.log(booking);
    $.post("/api/reservations/add", booking, data => console.log(data))
})