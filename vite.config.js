import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const saveFinancialsPlugin = () => ({
  name: 'save-financials',
  configureServer(server) {
    server.middlewares.use('/api/save-financials', (req, res, next) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString() });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const filePath = path.resolve(__dirname, 'src/slides/financials.json');
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true }));
            console.log('Financials saved to src/slides/financials.json');
          } catch (err) {
            console.error('Error saving financials:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), saveFinancialsPlugin()],
  base: '/alethiai-pitch/',
})
