import { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminFieldLevel } from '../access/isAdmin';
import { isSelforAdmin } from '../access/isSelforAdmin';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'email',
  },
  access: {
    read: isSelforAdmin,
    create: isAdmin, 
    update: isSelforAdmin,
    delete: isAdmin,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    },
    {
      name:"role",
      type:"select",
      defaultValue:"user",
      options:[
        {
          value:"admin",
          label:"Admin",
        },
        {
          value:"user",
          label:"User",
        },
      ],
      access: {
        update: isAdminFieldLevel,
        create: isAdminFieldLevel,
      }

    }
  ],
};

export default Users;