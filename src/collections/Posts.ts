import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => false,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories'
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: "images",
      type : "relationship",
      relationTo: "media",
      hasMany: true,
    },
    {
      name: 'content',
      type: 'richText'
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    }
  ],
}

export default Posts;