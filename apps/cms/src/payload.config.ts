import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import Pages from './collections/Pages';
dotenv.config();

export default buildConfig({
  collections: [Pages],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
