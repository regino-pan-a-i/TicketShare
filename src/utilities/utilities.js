export function createBookings(bookings){
    let cards = '<div class= "cards">'

    bookings.forEach(element => {
        let card = '<div class="card">'
        card += 
        `<a href="/booking/${element.id}">
        <h2>${element.event}</h2>
        <div class="info">${element.date}</div>
        <div class="price">${element.price}</div>
        </div>
        </a>`
        cards += card
    });

    return cards
}
    
export function getBookingDetails(booking){
    console.log(booking)
    let bookingHTML = 
    `
    <div class="booking-card">
    <h2>${booking.event}</h2>

    <div class="field"><span class="label">Date:</span><span class="value">${booking.date}</span></div>
    <div class="field"><span class="label">Time:</span><span class="value">${booking.time}</span></div>
    <div class="field"><span class="label">Location:</span><span class="value">${booking.location}</span></div>
    <div class="field"><span class="label">Category:</span><span class="value">${booking.category}</span></div>
    <div class="field"><span class="label">Vendor:</span><span class="value">${booking.vendor}</span></div>
    <div class="field"><span class="label">Confirmation #:</span><span class="value">${booking.confirmationNumber}</span></div>
    <div class="field"><span class="label">Participants:</span><span class="value">${booking.participants}</span></div>
    <div class="field"><span class="label">Duration:</span><span class="value">${booking.duration}</span></div>
    <div class="field"><span class="label">Booking Date:</span><span class="value">${booking.bookingDate}</span></div>
    <div class="field"><span class="label">Status:</span><span class="value">${booking.status}</span></div>
    <div class="field"><span class="label">Price:</span><span class="value">${booking.price}</span></div>
    <div class="field"><span class="label">Notes:</span><span class="value">${booking.notes}</span></div>
    </div>
    `
      // <div class="field">
    //     <span class="label">Details:</span>
    //     <ul class="details-list">
    //     <li>Arrive by noon</li>
    //     <li>Only two cars per reservation</li>
    //     <li>Keep out of fenced areas</li>
    //     </ul>
    // </div>

    return bookingHTML
}
    
