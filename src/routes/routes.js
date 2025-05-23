async function routes (fastify, options) {

    // Main Page route
    fastify.get('/', async (req, rep) => {
        return rep.view("index", { title: "Homepage"});
    });


    // Bookings page
    fastify.get('/bookings', async (req, rep) => {
        return rep.view("bookings", { title: "My bookings"});
    });

    // Booking per ID
    fastify.get('/booking/:id', async (req, rep) => {
        const {id} = req.params
        return rep.view("booking", { title: "Booking Details"});
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