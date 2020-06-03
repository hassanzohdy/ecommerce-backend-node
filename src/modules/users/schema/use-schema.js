import { User } from "../models/user";
import Schema from "core/database/schema/schema";
import Type from "core/database/schema/type";
import UserGroupSchema, { UserGroupSchemaExample } from "./user-group-schema";

const UserSchema = Schema(User, {
    id: Type.integer.unique.autoIncrement.required,
    name: Type.string.required,
    email: Type.string.required.unique,    
    group: Type.documentOf(UserGroupSchema),
    status: Type.string.oneOf(['active', 'suspended']).required,
    addresses: Type.arrayOf(
        Type.object({
            street: Type.string.required,
            city: Type.string.required,
            buildingNumber: Type.integer.required,
            floorNumber: Type.integer,
        })
    ),
});

export const UserSchemaExample = {
    id: 1,
    name: 'Hasan',
    email: 'hassanzohdy@gmail.com',
    group: UserGroupSchemaExample,
    status: 'active',
    addresses: [
        {
            street: 'Street One',
            city: 'Cairo',
            buildingNumber: 143,            
        },
        {
            street: 'Street Two',
            city: 'Alex',
            buildingNumber: 215,
            floorNumber: 6,            
        }
    ],
}

export default UserSchema;