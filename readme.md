** Steps to start 
    1. Add webpack and its sub-package as a devDependencies
        * webpack // static module bundler for JavaScript applications
        * webpack-cli //CLI tool for providing a flexible set of commands for developers to increase speed
        * webpack-dev-server //Webpack dev server is a mini Node.js Express server
        * html-webpack-plugin //simplifies creation of HTML files to serve your webpack bundles
        * add webpack.config.js file for configuration

    2. Add react and its sub-package as a proDependencies 
        * react // frontend js library,for defining components and handle Virtual DOM things
        * react-dom // provides some methods to interact with real DOM
    Note:- As you know, just installing React is not enough because it’s impossible to compile React JSX. webpack is just a bundler. There is no function to transpile React JSX. So it’s time to use Babel !

    3. Add Babel and its sub-package as a devDependencies
        * babel/core //core library of Babel is @babel/core
        * babel-loader //To use Babel with webpack, you need to use babel-loader,Loads ES2015+ code and transpiles to ES5 using Babel
        * babel/preset-env // is a smart transpile preset which covers most of advance javascript features.
        * core-js //polyfill preset for javascript 
        * babel/preset-react // To transpile React JSX
        * babel/preset-typescript // TypeScript compiler to Babel
        * add .babelrc.json for babel configuration
    
    4. Add Typescript and its sub-package as a devDependencies
        * typescript //strongly typed programming language that builds on JavaScript,added typescript for using strict type checking injs for better readability and debugging
        * types/react //type defination for react
        * types/react-dom //type defination for react-dom
        * ts-loader //loader for Typescript using with babel and webpack,Loads TypeScript 2.0+ like JavaScript
        * add tsconfig.json for babel configuration