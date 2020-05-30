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

    /**
     * Handle request
     * 
     * @param   {string} requestMethod
     * @param   {string} route
     * @param   {callback} callback 
     * @returns {Router}
     */
    _handleRequest(requestMethod, route, callback) {       
        this.expressApp[requestMethod](route, function (request, response) {
            // create new controller object
            
            // call the method for the current route
            let output = callback(request, response);

            // send response if the output is not empty
            if (output) {
                response.send(output);
            }
        });      

        return this;
    }

    /**
     * Add Get Request
     * 
     * @param   {string} route
     * @param   {array} action => [controller, controllerMethod]
     * @returns {Router}
     */
    get(route, action) {
        return this._handleRequest('get', route, action);
    }

    /**
     * Add post Request
     * 
     * @param   {string} route
     * @param   {array} action => [controller, controllerMethod]
     * @returns {Router}
     */
    post(route, action) {
        return this._handleRequest('get', route, action);
    }

    /**
     * Add post Request
     * 
     * @param   {string} route
     * @param   {array} action => [controller, controllerMethod]
     * @returns {Router}
     */
    put(route, action) {
        return this._handleRequest('get', route, action);
    }

    /**
     * Add post Request
     * 
     * @param   {string} route
     * @param   {array} action => [controller, controllerMethod]
     * @returns {Router}
     */
    post(route, action) {
        return this._handleRequest('post', route, action);
    }

    /**
     * Add delete Request
     * 
     * @param   {string} route
     * @param   {array} action => [controller, controllerMethod]
     * @returns {Router}
     */
    delete(route, action) {
        return this._handleRequest('delete', route, action);
    }

    /**
     * Add patch Request
     * 
     * @param   {string} route
     * @param   {array} action => [controller, controllerMethod]
     * @returns {Router}
     */
    patch(route, action) {
        return this._handleRequest('patch', route, action);
    }

    /**
     * Add options Request
     * 
     * @param   {string} route
     * @param   {array} action => [controller, controllerMethod]
     * @returns {Router}
     */
    options(route, action) {
        return this._handleRequest('options', route, action);
    }
 }

export default new Router;