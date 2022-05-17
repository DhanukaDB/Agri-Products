import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reducer from './reducer';
// import reducer from './pages/Favourites/reducer';
import { StateProvider } from './StateProvide';
import { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>
);
