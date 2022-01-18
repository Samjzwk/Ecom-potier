This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

install node_modules

```bash
yarn
```

build server :

```bash
npm run build
# or
yarn run build

npm run start
# or
yarn run start
```

development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test

The app use Jest with testing library to integration & unit testing (actual 18/18 passed), & Cypress for E2E (do a mp4 video at the end of test)

```bash
Jest: yarn run test
Cypress (E2E): yarn run cypress:run
```

## Stack

- Husky
- LintStaged
- CommintLint
- Commitizen
- TypeScript
- CSS modules ( with scss )
- Jest
- Cypress
- Testing Library
- Axios

Rendering strategy: homepage: ISR / Cart: SSR

## Vercel website

Deployed website here : [https://ecom-potier-demo.vercel.app/](https://ecom-potier-demo.vercel.app/)
