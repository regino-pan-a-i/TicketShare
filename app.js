
import Fastify from 'fastify'
/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */

import routes from './src/routes/routes.js'

const fastify = Fastify({
  logger: true
})
fastify.register(routes)

// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })




/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()