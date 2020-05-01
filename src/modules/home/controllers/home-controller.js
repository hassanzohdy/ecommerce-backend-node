export default class HomeController {
    homePage(request) {
        return 'Welcome Home ' + request.path;
    }
}