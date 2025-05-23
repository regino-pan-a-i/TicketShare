import Fastify from 'fastify'
import path from 'path';
import routes from './src/routes/routes.js'
import { fileURLToPath } from 'url';
import fastifyView from '@fastify/view';
import ejs from 'ejs';
import fastifyStatic from '@fastify/static';


/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
*/


const fastify = Fastify({
  logger: true
})
fastify.register(routes)

    
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fastify.register(fastifyView, {
    engine: {
        ejs: ejs,
    },
    root: path.join(__dirname, 'src/views'),
    layout: 'layout.ejs' // Just the filename, not a path
});

fastify.register(fastifyStatic,{
    root: path.join(__dirname, 'public'),
    prefix: '/public/'
})


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