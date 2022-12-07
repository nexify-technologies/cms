import path from "path";
import { CollectionConfig } from "payload/types";
const basePath = path.join(__dirname, "../", "../","../", "media");

const Media:CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
  upload: {
    staticURL: '/media',
    staticDir: basePath,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `null` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: null,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
};

export default Media;
