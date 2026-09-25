import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function portraitSaverPlugin(): Plugin {
  return {
    name: 'portrait-saver-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method === 'POST' && req.url === '/api/save-portrait') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              if (data.image && typeof data.image === 'string' && data.image.includes('base64,')) {
                const base64Data = data.image.split('base64,')[1];
                const buffer = Buffer.from(base64Data, 'base64');
                
                const publicDir = path.resolve(process.cwd(), 'public/images');
                if (!fs.existsSync(publicDir)) {
                  fs.mkdirSync(publicDir, { recursive: true });
                }
                fs.writeFileSync(path.join(publicDir, 'riad-portrait.jpg'), buffer);
                fs.writeFileSync(path.join(publicDir, 'consultant-profile.jpg'), buffer);

                const assetsDir = path.resolve(process.cwd(), 'src/assets/images');
                if (fs.existsSync(assetsDir)) {
                  fs.writeFileSync(path.join(assetsDir, 'hero_strategist_1789331615918.jpg'), buffer);
                  fs.writeFileSync(path.join(assetsDir, 'riad_portrait.jpg'), buffer);
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, path: '/images/riad-portrait.jpg' }));
                return;
              }
            } catch (err) {
              console.error('Failed to save portrait:', err);
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid payload' }));
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), portraitSaverPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
