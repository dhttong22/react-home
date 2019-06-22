import React, { Fragment } from 'react';
import './styles/App.css';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";
import MyLayout from "./components/MyLayout";

import { HashRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>

          {/* 内容 */}
          <Route path="/" exact render={(props) => <MyLayout {...props}><Home /></MyLayout>} />
          <Route path="/Cart" render={(props) => <MyLayout  {...props}> <Cart /></MyLayout>} />
          <Route path="/Mine" render={(props) => <MyLayout  {...props}><Mine /></MyLayout>} />
        
        </Router>
      </Fragment>
    )
  }
}


export default App;
