import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./redux"

import Home from "./components/Home"
import Greeting from "./components/Greeting"

import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={(
              <Home />
            )} />
          <Route path="/greetings" element={(<Greeting />)} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
