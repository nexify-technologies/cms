import { Access, FieldAccess } from "payload/types";

export const isAdmin: Access = ({ req:{ user } }) => {
    return Boolean(user?.role?.includes("admin"));
};

export const isAdminFieldLevel: FieldAccess = ({ req:{ user } }) => {
    return Boolean(user?.role?.includes("admin"));
}
