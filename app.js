import fastify from "fastify";



const init = async() => {
    try{

        fastify.listen({port:3000})
        console.log('listening in port 3000')
    }
    catch (error) { 
        console.log('ups, something went wrong')
    }
}


init()