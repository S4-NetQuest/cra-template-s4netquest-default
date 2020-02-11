# CREATE REACT APP TEMPLATE
## S4 NetQuest : default

This custom Create-React-App (CRA) template is specific to the S4 NetQuest development process. It includes our most commonly utilized npm packages and project structure. Anyone is welcome to use this template, however it may change at any time without notice and with minimal regard to your use case (please fork your own version if you really like it). Here is what this template includes in addition to the CRA defaults:

* Dependencies:
  * react-app-polyfill ( imported in index.js for 'ie11' and 'stable' )
  * react-router-dom
  * env-cmd ( load different .env configurations per environment )
  * node-sass ( add sass compiling to CRA )
* Custom NPM Scripts:
  * `install-dev-deps` ( install storybook, a number of storybook addons )
    * Run this command after CRA installs to install these devDependencies - these cannot be included in the custom template
  * `build:stage` ( runs a production build using the .env.staging file as environment variables )
  * `storybook` ( runs storybook dev server )
  * `build-storybook` ( builds the storybook for deployment to a server )
* Features
  * Sass compiles from any imported .sass file ( default `src/style/index.sass` is imported to `src/index.js` )
  * Bulma 0.8.0 sass files are included in `src/style/bulma-0.8.0` and imported to project by default
  * Absolute imports from `/src` are enabled, relative imports are not necessary
  * Service Worker registration is set via an environment variable at build time `REACT_APP_REGISTER_SERVICE_WORKER` (`1` or `0`)

### Installing
1. `npx create-react-app PROJECT_NAME --template cra-template-s4netquest-default`
2. after install, run `npm run install-dev-deps`
3. use `_package-json-overrides.json` to override the values in the created `package.json` file ( `_package-json-overrides.json` can then be deleted )
4. begin working on your project!