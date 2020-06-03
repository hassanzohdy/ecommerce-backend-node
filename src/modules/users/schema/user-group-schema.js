import Schema from "core/database/schema/schema";
import Type from "core/database/schema/type";
import { UserGroup } from "../models/user-group";

const UserGroupSchema = Schema(UserGroup, {
    id: Type.integer.unique.autoIncrement.required,
    name: Type.string.required,
    permissions: Type.object({
        moduleName: Type.object({
            permissionKey: Type.boolean.required
        }).required
    })
});

export const UserGroupSchemaExample = {
    id: 1,
    name: 'Super Administrators',
    permissions: {
        users: { // module name
            list: true,
            create: true,
            update: false,
            delete: false,
        } 
    }
}

export default UserGroupSchema;