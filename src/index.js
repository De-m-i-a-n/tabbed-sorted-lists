import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './Store/reducers/index';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="/*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function  <App />
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
