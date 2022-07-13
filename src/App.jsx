import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import Main from "./components/main/Main";


const App = () => {
  return (

    <>
    <div className="main">
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    </div>
    </>
  );
};

export default App;
