### Reference Link

- This code is with reference to the Webpack Crash Course on youtube: https://www.youtube.com/watch?v=lziuNMk_8eQ&ab_channel=TraversyMedia

- There are some changes which had to be made while implementing the steps mentioned in the tutorial and have been documented below

#### Changes 

- While installing webpack use the command npm install -D -g webpack-cli

    This installs webpack globally 

- I have added the required build scripts to the package.json file. The scripts reference the webpack.config.js file in the project root and they output a compiled bundle.js file in the dist folder ( will be created if not present)

- Once this has been done, in the index.html will be able to access "dist/main.js"

### Runing webpack

Webpack can be tested in both development and production mode 

We have a webpack-development-server (installed locally) which we can start , this will pack the files, it will be annotated and then serve it on the browser along with the source files so that if there is any error we can have a look.

In production mode, the output file is compressed and is present in a single line , so it is hard to debug anything over there.

In the scripts section of package.json file we have given the following 3 scripts

    "start": "webpack serve --mode development",
    "start-prod": "webpack serve --mode production",
    "build": "webpack --mode production"

We have installed webpack-development-server within the scope of this project by using the cli command : npm install webpack-dev-server --save-dev

Reference link for starting dev server: https://github.com/webpack/webpack-dev-server

While developing the application webpack serve command is used to start a development server, it can be tested in both development and production mode

