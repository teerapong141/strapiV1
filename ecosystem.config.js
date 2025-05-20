// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'strapi',
      script: './node_modules/@strapi/strapi/bin/strapi.js',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 1337,
      },
      exp_backoff_restart_delay: 100, 
      max_memory_restart: '2G',
      error_file: 'logs/err.log', 
      out_file: 'logs/out.log',
      time: true,
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_restarts: 10,
    }
  ]
};
