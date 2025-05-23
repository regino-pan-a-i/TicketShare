import { bookings, addBooking, findBooking} from '../models/bookings.js';
import { createBookings, getBookingDetails } from "../utilities/utilities.js";

async function routes (fastify, options) {

    // Main Page route
    fastify.get('/', async (req, rep) => {
        return rep.view("index", { title: "Homepage"});
    });

    // Create a booking
    fastify.post('/bookings/post', async (req, rep) => {
        const form = req.body;
        console.log('Received form data:', form);
        addBooking(form);
        return rep.redirect('/bookings');
    })

    // Bookings page
    fastify.get('/bookings', async (req, rep) => {
        let cards = createBookings(bookings)
        return rep.view("bookings", { title: "My bookings", cards});
    });

    // Booking per ID
    fastify.get('/booking/:id', async (req, rep) => {
        const {id} = req.params
        console.log(id)
        const booking = findBooking(id)
        console.log(booking)
        
        if (booking!= null){
            const bookingDetails = getBookingDetails(booking)
            return rep.view("booking", { title: "Booking Details", bookingDetails});
        }
        else{
            const bookingDetails = `<p>We couldn't find your booking</p>`
            return rep.view("booking", { title: "Booking Details", bookingDetails})
        }
    });

    // Shared site
    fastify.get('/shared', async (req, rep) => {
        return rep.view("shared", { title: "Shared Bookings"});
    });
    
    // Shared per ID
    fastify.get('/shared:id', async (req, rep) => {
        const {id} = req.params
        return rep.view("shared", { title: "Sharing with"});
    });
}

//ESM
export default routes;