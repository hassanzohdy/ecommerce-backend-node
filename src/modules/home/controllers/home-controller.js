import path from 'path';
export default class HomeController {
    homePage(request, response) {
        response.sendFile(path.resolve(__dirname + '/../views/form.html'))
        // return 'Welcome Home ' + request.path;
    }

    submitForm(request, response) {
        // request.files.image.mv(__dirname + '/welcome.gif'); 
        response.send(request.body.email);
    }
}