class Router {
    /**
     * Set the express application
     * This method is called from the application class
     * 
     * @param  {Express} expressApp
     */
    setExpressApp(expressApp) {
        this.expressApp = expressApp;
    }

    get(route, action = [controller, method]) {
        this.expressApp.get(route, function (request, response) {
            let controllerObject = new action[0];

            let output = controllerObject[action[1]](request, response);

            response.send(output);
        });      
    }
 }

export default new Router;