import router from 'core/router';
import { showHome, submitForm } from './../controllers/home-controller';

export default function () {
    router.get('/', showHome)
          .post('/submit', submitForm);
};