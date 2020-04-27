# Apps list mini challenge

[Demo](https://orivelton.github.io/apps-list-mini-challenge/)

![demo](public/demo.gif)

## Tasks

- [X] List all the apps
- [X] Paginate the list (page size = 3)
- [x] Filter the apps as you type in the search bar
- [X] Have all the existing categories in the left navigation sorted by alphabetic order
- [x] Allow filtering of apps when we click on a category
- [X] Apps should be sorted by ascending order of the sum of the plans price

## Project tree

```shell
.
├── README.md
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── api
│   │   └── get.js
│   ├── assets
│   │   └── styles
│   │       └── styles.scss
│   ├── components
│   │   ├── List.js
│   │   ├── ListItem.js
│   │   ├── Nav.js
│   │   ├── Pagination.js
│   │   └── Search.js
│   ├── config
│   │   └── configs.js
│   ├── index.js
│   ├── serviceWorker.js
│   ├── setupTests.js
│   ├── tests
│   │   ├── App.test.js
│   │   ├── List.test.js
│   │   ├── ListItem.test.js
│   │   ├── Nav.test.js
│   │   ├── Pagination.test.js
│   │   ├── Search.test.js
│   │   ├── __snapshots__
│   │   │   ├── App.test.js.snap
│   │   │   ├── List.test.js.snap
│   │   │   ├── ListItem.test.js.snap
│   │   │   ├── Nav.test.js.snap
│   │   │   ├── Pagination.test.js.snap
│   │   │   └── Search.test.js.snap
│   │   └── helpers.test.js
│   └── ultils
│       └── helpers.js
└── yarn.lock
```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

