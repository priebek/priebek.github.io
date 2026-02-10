import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LANGUAGES, LANGUAGE_ICON_IDS } from './constants/config';

/* GLOBAL VARIABLES */

window.$primaryLanguage = LANGUAGES.PRIMARY;
window.$secondaryLanguage = LANGUAGES.SECONDARY;
window.$primaryLanguageIconId = LANGUAGE_ICON_IDS.PRIMARY;
window.$secondaryLanguageIconId = LANGUAGE_ICON_IDS.SECONDARY;

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
