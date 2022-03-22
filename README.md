# 📘 Engineering Effectiveness Handbook

Welcome to the [Engineering Effectiveness Handbook](https://www.okayhq.com/handbook/)! We are the team of [engineering leaders](https://www.okayhq.com/about) behind [Okay](https://www.okayhq.com) and the authors of the first version of this handbook.

After talking to hundreds of engineering leaders, we know 2 things:
* the vast majority of engineering teams want to become more effective
* but not everyone knows where to start

This handbook intends to fill that gap. Our goal is to build the **first practical and actionable guide to engineering effectiveness**.

We decided to give this work to the community under CC-BY-SA and we welcome contributions, which you can provide in three main ways:
* adding links to our [curated list of engineering effectiveness resources](./content/en/resources.md)
* contributing a chapter or an entire section to the handbook
* improving an existing part of the handbook

All content is in [Markdown](https://www.markdownguide.org/getting-started/#what-is-markdown) files under the [📁 content](./content/en) folder.

We hope you'll enjoy reading this handbook!


# Run Locally

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
yarn generate
```

To preview the static generated app, run `yarn start`

For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).