# CREATE REACT APP TEMPLATE
##### cra-template-s4netquest-default v3.0.0

Presented by:

<a href="https://s4netquest.com"><img src="https://s4-netquest.github.io/react-scorm-provider/images/s4-logo.png" alt="S4 NetQuest Logo" style="display: block; width: 100%; max-width: 250px;" /></a>

### About this template
This custom Create-React-App (CRA) template is specific to the S4 NetQuest development process. It includes our most commonly utilized npm packages and project structure. Anyone is welcome to use this template, however it may be significantly changed at any time without notice and with minimal regard to your use case (please fork your own version if you really like it). Here is what this template includes in addition to the CRA defaults:

* Dependencies:
  * react-app-polyfill ( imported in index.js for 'ie11' and 'stable' )
  * react-router-dom
  * env-cmd ( load different .env configurations per environment )
  * sass ( add dart-sass compiling to CRA )
  * framer-motion ( for animation )
* Custom NPM Scripts:
  * `install-dev-deps` ( install storybook, a number of storybook addons, and eslint related libraries )
    * Run this command after CRA installs to install these devDependencies - these cannot be included in a custom template
  * `build:stage` ( runs a production build using the 'staging' configuration in .env-cmdrc.json as environment variables )
  * `storybook` ( runs storybook dev server )
  * `build-storybook` ( builds the storybook for deployment to a server )
  * `lint` ( run ESlint in the CLI )
* Features
  * Sass compiles from any imported .sass file ( default `src/style/index.sass` is imported to `src/index.js` )
  * Bulma 0.9.3 sass files are included in `src/style/bulma_v0.9.3` and imported to project by default
  * Absolute imports from `/src` are enabled, relative imports are not necessary
  * ESLint with airbnb rules and other additional rules
  * Opinionated project directory structure with css modules and storybook
  * Defaults to simple animated route transitions with react-router-dom and framer-motion

### Installing
1. `npx create-react-app PROJECT_NAME --template cra-template-s4netquest-default`
2. after install, run `npm run install-dev-deps` (you may delete this script after install if you like)
3. make sure to modify files in `/public`. At a minimum, do the following:
  - change the `short_name` and `name` fields in `manifest.json`
  - change the `favicon.ico`
4. add `import 'style/index.sass';` as the top line of `/.storybook/preview.js` so that global stylesheets are imported to all stories
4. begin working on your project!