import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: '3erdduzz',
      dataset: 'production',
      apiVersion: '2023-08-08',
      useCdn: false,
    }),
  ],
});
