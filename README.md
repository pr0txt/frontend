## About 

Frontend build with NextJs 13, TailwindCSS and Mongoose. Currently useless without a database dump ¯\\\_(ツ)_/¯

## Running locally in development mode

To get started, just clone the repository and run `pnpm install && pnpm run dev`:

    git clone https://github.com/pr0txt/frontend.git
    pnpm install
    pnpm run dev

Note: Replace pnpm with your prefered package manager (npm or yarn for example)

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `pnpm run build` and run it with `pnpm start`:

    pnpm install
    pnpm run build
    pnpm start

You should run `pnpm run build` again any time you make changes to the site.

Note: Replace pnpm with your prefered package manager (npm or yarn for example)

## Configuring

Before you start the application for the first time, you have to create a .env file (just copy [.env.example](https://github.com/pr0txt/frontend/blob/main/.env.example) over to '.env') and configure the MongoDB database connection.