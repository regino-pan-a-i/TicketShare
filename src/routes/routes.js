async function routes (fastify, options) {
  fastify.get('/', async (req, rep) => {
    return { status: '200', message: 'You made it to the main page'
     }
  });

  fastify.get('/booking/:id', async (req, rep) => {
    const {id} = req.params
    return {status: 200, message: `you have made it to the booking details page, this is the id:${id}`}
  });
}

//ESM
export default routes;