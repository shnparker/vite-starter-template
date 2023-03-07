# vite-starter-template

![push-main](https://github.com/shnparker/vite-starter-template/workflows/push-main/badge.svg)

A template allowing for rapid development of React SPA projects based on Vite.

Since this project is based on [Vite](https://vitejs.dev/), it is suggested you read the docs to familiarise yourself with how it serves locally, runs hot reloading, bundles files, handles env variables, etc. It is also a good idea to read the docs of any other listed tools you are unfamiliar with.

## Tools included in this template

To learn more about the technologies used in this site template, see the following resources:

**Project Scaffolding**

- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [ESLint](https://eslint.org/) - Enforcement of coding rules
- [Prettier](https://prettier.io/) - Autoformatting code
- [Husky + Lint Staged](https://prettier.io/docs/en/precommit.html) - Pre-commit hooks for ESLint & Prettier
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling Framework
- [Renovate](https://renovatebot.com/) - Automated dependency updates
- [GitHub Actions](https://docs.github.com/en/actions) - Automated CI/CD
- [Mend](https://docs.mend.io/en-US/bundle/integrations/page/mend_for_github_com.html) - Security scanning

**Frontend Libraries**

- [Heroicons](https://heroicons.com/) - Icon library from TailwindLabs
- [Tailwind CSS](https://tailwindcss.com) - The official Tailwind CSS documentation
- [Headless UI](https://headlessui.dev) - The official Headless UI documentation

**Testing**

- [Vitest](https://vitest.dev/) - New testing framework based on Vite
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - The best testing library there is

## Getting started

Install dependencies

```bash
yarn
```

Next, create a `.env` file in the root of your project and set the `VITE_APP_` variable to your site's public URL:

```bash
VITE_APP_API_URL
```

Next, run the development server:

```bash
yarn dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this site by modifying the files in the `/src` folder. The site will auto-update as you edit these files.
