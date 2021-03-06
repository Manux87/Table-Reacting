import React from "react";
import ReactDOM from "react-dom";
import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import * as serviceWorker from './serviceWorker';

import App from "./App";
import "@shopify/polaris/styles.css";

ReactDOM.render(<AppProvider i18n={en}><App /></AppProvider>, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
