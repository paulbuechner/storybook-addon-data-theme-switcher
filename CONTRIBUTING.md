Thanks for showing interest to contribute to 
paulbuechner/storybook-addon-data-theme-switcher 😎

When it comes to open source, there are different ways you can contribute, all
of which are valuable. Here's a few guidelines that should help you as you
prepare your contribution.

## Setup

The following steps will get you up and running to contribute:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/paulbuechner/storybook-addon-data-theme-switcher))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/storybook-addon-data-theme-switcher.git
cd storybook-addon-data-theme-switcher
```

3. Setup all the dependencies and packages by running `pnpm install`. This command will install dependencies.

### Commands

**`pnpm storybook`**: starts storybook server and loads stories in files that
end with `.stories.tsx`.

**`pnpm build-storybook`**: build storybook.

**`pnpm build`**: build and package the addon code.

**`pnpm start`**: concurrently run `pnpm build:watch` and `pnpm storybook --quiet`.

## Think you found a bug?

Please conform to the issue template and provide a clear path to reproduction with a code example.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories
- `story`: all changes that introduce new or edited storybook components

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the `paulbuechner/storybook-addon-data-theme-switcher` repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. `type` can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/blob/main/CONTRIBUTING.md#commit-convention).

### Metadata

Storybook addons are listed in the [catalog](https://storybook.js.org/addons)
and distributed via npm. The catalog is populated by querying npm's registry for
Storybook-specific metadata in `package.json`. This project has been configured
with sample data. Learn more about available options in
the [Addon metadata docs](https://storybook.js.org/docs/react/addons/addon-catalog#addon-metadata).

## Release Management

### Setup

This project is configured to use [auto](https://github.com/intuit/auto) for
release management. It generates a changelog and pushes it to both GitHub and
npm. Therefore, you need to configure access to both:

- [`NPM_TOKEN`](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-access-tokens)
  Create a token with both _Read and Publish_ permissions.
- [`GH_TOKEN`](https://github.com/settings/tokens) Create a token with
  the `repo` scope.

Then open your `package.json` and edit the following fields:

- `name`
- `author`
- `repository`

#### Local

To use `auto` locally create a `.env` file at the root of your project and add
your tokens to it:

```bash
GH_TOKEN=<value you just got from GitHub>
NPM_TOKEN=<value you just got from npm>
```

Lastly, **create labels on GitHub**. You’ll use these labels in the future when
making changes to the package.

```bash
npx auto create-labels
```

If you check on GitHub, you’ll now see a set of labels that `auto` would like
you to use. Use these to tag future pull requests.

#### GitHub Actions

This template comes with GitHub actions already set up to publish your addon
anytime someone pushes to your repository.

Go to `Settings > Secrets`, click `New repository secret`, and add
your `NPM_TOKEN`.

### Creating a release

To create a release locally you can run the following command, otherwise the
GitHub action will make the release for you.

```sh
pnpm release
```

That will:

- Build and package the addon code
- Bump the version
- Push a release to GitHub and npm
- Push a changelog to GitHub
