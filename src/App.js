import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import CreatePost from "./containers/CreatePost";

//import NewPost from "./NewPost";
import "./style/bootstrap.css";
import PostList from "./containers/PostList";
const stylesApp = {
  marginTop: 40
};
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={stylesApp}>
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
