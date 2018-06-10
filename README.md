## React Express Boilerplate

In wanting to build a full stack application with ReactJS on the frontend and NodeJS + Express on the backend, I was able to many examples of boilerplate code (most probably much better than this one); however, taking that boilerplate code and using it came with many difficulties:

1.  Understanding the set up
2.  How to get started
3.  How to make changes to work for my situation
4.  How to build an application in a set up that I didn't full understand

So, I decided I wanted to set up my own React + Express boilerplate code, so I could understand better what was happening behind the scenes and more easily make changes/improvements when necessary.

Feel free to clone down this repo and use it your own projects:

```
git clone git@github.com:jshlfts32/react-express-boilerplate.git
```

### Basic Set up

This project was not intended to be entirely comphrehensive of all possible projects, but rather just a small subset. I would not treat this repo as end-all-be-all. There are probably plenty of parts that need to be improved and/or changed. This is meant to be a starting point (read as "Some assembly required").

#### How the project is structured:

The main directory holds all of the configuration files (eslintrc, babelrc, etc.). The `config` directory has the webpack.config dev and prod files. The `src` directory is where all of the application code lives.

By default, this boilerplate is set up to use ReactJS on the frontend with either CSS or SCSS (you can choose to use either). On the backend, this boilerplate is using NodeJS and Express.

A basic test suite set up using Jest and Enzyme are included.

### Getting started

To get started:

```
git clone git@github.com:jshlfts32/react-express-boilerplate.git
cd react-express-boilerplate
npm install
OR
yarn install
```

For development, run:

```
npm run dev
```

OR

```
yarn dev
```

This command will concurrently start the express server and the webpack devServer for the frontend. Navigate to localhost:3000 to see the application live. Hotmodule replacement is enabled by default for the frontend, so any javascript changes do not require you to kill then restart the process. Nodemon + babel-node are used on the express backend to (1) watch for any server changes and (2) compile ES6+ syntax down to ES5 syntax.

The frontend webpack devServer runs on port 3000, and the Express server runs on port 4000. Feel free to change these as needed.

For production, run:

```
npm run build
npm run start
```

OR

```
yarn build
yarn start
```

The build script will execute the webpack.config.prod and output the compiled code to the ./dist directory (frontend under ./dist/public). The start script will start the product build. Navigate to localhost:4000 to see the application live.

### To see this project in Typescript:

```
git checkout typescript
```

### To see this project with styled-components:

```
git checkout styled-components
```
