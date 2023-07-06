import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export default Pages;
