import env from './env';
import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import ServiceProvidersContainer from './service-providers-container';

export default class Application {
    constructor() {
        this.prepareServer();
        this.initializeProviders();

        router.setExpressApp(this.express);
    }

    /**
     * Initialize our service provider container
     *
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
        this.express.use(bodyParser.urlencoded({
            extended: true,
        })); 
    }

    /**
     * Run the application
     */
    run() {        
        this.serviceProviders.registerRoutes();

        this.express.listen(env('PORT'), function () {
            // When server is ready
            console.log(`Serving from ${env('PORT')} is ready...`);
        });        
    }
}