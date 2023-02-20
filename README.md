# WEZOA Design System

This project was created to study and practice the initial proccess of creating a Design System. It will be used in my other projects, even if they are some POCs or starting ideas.

In next sessions it's described in topics and brief summaries what I learned from this project.
> The project is public, so feel free to collaborate sending me PR ou something like that!

# Topics

- Concepts of what is a Design System and Monorepo
  - Create packages: @wezoa-ui/docs | @wezoa-ui/tokens | @wezoa-ui/react
 - [TSUP](https://github.com/egoist/tsup) - Generates a JS bundle able to be imported in others aplications.
   - Why dont use regular tsx to build? TSUP can convert our code to others format like commonjs and ECMAScript modules. And TSUP has better performance (uses esbuild, it's faster, used in Vite).
 - React (@wezoa-ui/react using)
   - [Stitches](https://stitches.dev/) - Styling as Styled Components (CSS-in-JS). The structure used in the tokens packages, makes us take more advantage of the tool, making the development easier.
 - [Storybook](https://storybook.js.org/) - Document UIs very easily, with interaction and plugins (assebility, unit test as jest, e2e as playwright). 
 - [TurboRepo](https://turbo.build/) - Two big points:
   - Working with Monorepo, we can execute scripts in all packages at same time.
   - Name "Turbo", means that helps accelerate the build proccess of the aplication. He keeps a local cache (inside node_modules), and automatic  detect the changed files, and do a incremental build, just create a build from the changed files, and not creating from zero.
 - [Changesets](https://github.com/changesets/changesets) - A tool to manage versioning and changelogs.
 - Procces:
   - Publishing a StoryBook
   - Github Actions
   - CI/CD with NPM

Packages in NPM: https://www.npmjs.com/search?q=wezoa-ui