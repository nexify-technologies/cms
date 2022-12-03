import { Access } from "payload/config";

export const isSelforAdmin: Access = ({ req: { user } }) => {
  if (user) {
    if (user?.role?.includes("admin")) {
      return true;
    }
    return {
      id: {
        equals: user.id,
      },
    };
  }

  return false;
};
