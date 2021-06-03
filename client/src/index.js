import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import StockList from "views/Stock/App"
import Sto from "views/Stock/Api_test"

import Apptree from 'views/TreeDatatest/tree';
import 'views/TreeDatatest/styles.css';


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />

      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/stock" render={(props) => <StockList {...props} />} />
      <Route path="/test" render={(props) => <Sto {...props} />} />
      <Route path="/treetest" render={(props) => <Apptree {...props} />} />

      {/* <Redirect to="/admin/dashboard" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);


// ReactDOM.render(
//   <React.StrictMode>
//     {/* <StockList /> */}
//     <Sto />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Router history={hist}>
//     {/* <StockList /> */}
//     <Route path="/stock" render={(props) => <StockList />} />
//   </Router>,
//   document.getElementById('root')
// );

