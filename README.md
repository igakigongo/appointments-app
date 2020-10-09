# Calculator

The goal is to design a browser-based appointments booking app using [React](https://reactjs.org/). It should interact with an [API](github.com/igakigongo/appointments-api).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tools and/or technology stack for the project
  - Node.js
  - React
  - ReactDOM
  - Create-React-App
  - NPM
  - CSS
  - ES6
  - Jest

## Functionality
The current version of the application allows you to 
* Sign Up
* Sign In
* Schedule an appointment with a doctor of your choice
* View future and past appointments

`Refer to the section 'Features to Add' for a list of upcoming features.`

## Demo
Please follow this link for a live demo

## Getting Started
Clone this repository on your machine. Make sure to create a `.env` file within the project directory, add the following information

```
REACT_APP_APPOINTMENTS_API_URL=<url-to-your-appointments-api>
```

Please refer to [this repository](github.com/igakigongo/appointments-api) for details on how to setup the API

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features To Add
* Rescheduling an appointment
* Canceling a future appointment
* Add textual context to distinguish clearly between past and future appointments (list page)
* Simple dashboard with metrics like most visited type of doctor, appointment per month, e.t.c
* Adminstrative features (like a dashboard for the hospital)
* Doctor's page - to view their appointment schedule

## Authors

* [**Edward Iga Kigongo**](github.com/igakigongo)

## Contact
* Email: igakigongo@gmail.com
* LinkedIn: https://www.linkedin.com/in/igakigongo/
* PluralSight: https://app.pluralsight.com/profile/edward-iga

## License

The project and all associated source code are free for redistribution and modification.
