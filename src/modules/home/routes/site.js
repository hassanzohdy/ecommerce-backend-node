import HomeController from './../controllers/home-controller';

export default function (router) {
    router.get('/', [HomeController, 'homePage']);
};