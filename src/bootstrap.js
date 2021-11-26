import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount the app
const mount = (element) => {
    ReactDOM.render(<App />, element);
}

// if we are in development, and in isolation from the host
// mount the app to the DOM immediately
if (process.env.NODE_ENV === 'development') {
    const entry = document.querySelector('#_marketing-dev-root');
    if (entry) {
        mount(entry);
    }
}

// if we are running in the host container,
// we simply export the mount function
export { mount };
