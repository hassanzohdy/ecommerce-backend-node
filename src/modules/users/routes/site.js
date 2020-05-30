import router from 'core/router';
import usersHandler from './../controllers/users-controller';

export default function () {
    router.resource('/users', usersHandler);
};