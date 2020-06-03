import Model from "core/database/model";

export class UserGroup extends Model {
    collection = 'userGroup';
}

const userGroup = new UserGroup;

export default userGroup;