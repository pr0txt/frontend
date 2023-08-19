module.exports = {
  apps: {
    autorestart: true,
    args: 'start',
    env_prod: {
      APP_ENV: 'prod',
    },
    exec_mode: 'cluster',
    instances: '1',
    max_memory_restart: '1G',
    name: 'txt-frontend',
    script: 'node_modules/next/dist/bin/next',
    watch: false,
  }
}