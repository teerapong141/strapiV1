// server.js สำหรับ TypeScript
const strapi = require('@strapi/strapi');
const app = strapi({
  distDir: './dist',
  typescript: true
});
app.start();
