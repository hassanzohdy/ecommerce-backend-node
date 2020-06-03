import Model from "core/database/model";

export class User extends Model {
    collection = 'users';
}

const user = new User;

export default user;