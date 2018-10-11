# react-chat

Hi reader ! This web application has been developed regarding my application at **iAdvize**. [Demo is available right there](https://iadvize-test.alexisrobin.me).

# Technical choices

* Web Application (React, Redux, Bootstrap)
* Tests (Jest, Enzyme, Chai, Sinon)

# Local testing
The following command  will run and expose application on your port **3000**:
```
npm start
```

The following command will trigger all the test suites described in the *.test.js files of the project:
```
npm test
```

# Project architecture
The following directory tree represents the react/redux project architecture I've implemented:
```
.
├── index.js // App entry point 
├── index.scss // App main stylesheet
├── const.scss // App style constants
├── setupTests.js // Setup for tests overriding create-react-app configuration
├── configureStore.js // Store configuration
├── actions
│   └── index.js // Action creator
├── components
│   ├─ xxx // component folder
│ [...] ├── xxx.js // component
│       ├── xxx.scss // component stylesheet
│       ├── xxx.test.js // component tests suite
│       ├── __snapshots__
│       │   └── xxx.test.js.snap // component snapshot for tests
│       └── index.js // component export
├── constants
│   ├── actionTypes.js // Action types
│   ├── messages.js // Initial chat messages
│   └── users.js // Initial chat users
└── reducers 
    ├── chat.js // chat reducer
    ├── chat.test.js // chat reducer tests 
    └── index.js // root reducer export
```