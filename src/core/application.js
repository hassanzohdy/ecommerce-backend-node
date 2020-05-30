import env from './env';
import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import ServiceProvidersContainer from './service-providers-container';
import fileUpload from 'express-fileupload';

class Application {
    /**
     * Application request
     * 
     * @var ExpressRequest
     */
    request = null;

    /**
     * Application response
     * 
     * @var ExpressResponse
     */
    response = null;

    /**
     * Constructor
     */
    constructor() {
        this.prepareServer();
        this.initializeProviders();
        router.setExpressApp(this.express);
    }

    /**
     * Initialize our service provider container
     */
    initializeProviders() {
        this.serviceProviders = new ServiceProvidersContainer;

        this.serviceProviders.boot();
    }

    /**
     * Prepare the express server
     */
    prepareServer() {
        this.express = express();

        // add middleware
        this.express.use((request, response, next) => {
            // assign the request and response as application properties
            this.request = request;
            this.response = response;
            next();
        });

        // queryString
        this.express.use(bodyParser.urlencoded({
            extended: true,
        })); 

        // parsing POST requests data as form data and allow uploading files 
        this.express.use(fileUpload({
            useTempFiles: true,
            tempFileDir: __dirname + '/tmp',
        }));
    }

    /**
     * Run the application
     */
    run() {        
        this.serviceProviders.registerRoutes();

        // start the server
        this.express.listen(env('PORT'), function () {
            // When server is ready
            console.log(`Serving from ${env('PORT')} is ready...`);
        });        
    }
}

let app = new Application;

export function request() {
    return app.request;
}

export function response() {
    return app.response;
}

export default app;