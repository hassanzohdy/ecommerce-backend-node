import router from 'core/router';
import HomeController from './../controllers/home-controller';

export default function () {
    router.get('/', [HomeController, 'homePage'])
          .post('/submit', [HomeController, 'submitForm']);
};