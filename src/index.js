import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Amplify } from 'aws-amplify';
import config from './config';
/* THESE ARE ACTUAL AWS SETTINGS LOCATED IN srs\config.js
s3: {
    REGION: "us-east-2",
    BUCKET: "tony-serverless-stack-tutorial"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://6lf1emmm24.execute-api.us-east-2.amazonaws.com/dev/notes"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_mGoJJv1Kt",
    APP_CLIENT_ID: "7nv7k7p6g4se8uviq7a7jjctgl",
    IDENTITY_POOL_ID: "us-east-2:d99382c8-4039-4711-9722-b34936798287"
  }
*/
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
