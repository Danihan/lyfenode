import React, { Component } from "react";
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <div className="row">
          <div className="col-sm-4 text-center p-3">
            Personal Component Here
          </div>
          <div className="col-sm-4 border-l text-center p-3">
            Weather Compontent Here
          </div>
          <div className="col-sm-4 border-l text-center p-3">
            Quick Links Here
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 text-center p-3">News 1 Component Here</div>
          <div className="col-sm-3 border-l text-center p-3">
            News 2 Compontent Here
          </div>
          <div className="col-sm-3 border-l text-center p-3">
            Stocks Component Here
          </div>
          <div className="col-sm-3 border-l text-center p-3">
            Sports Component Here
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 text-center p-3">
            Financial Summary Component Here
          </div>
          <div className="col-sm-3 border-l text-center p-3">
            Health Summary Compontent Here
          </div>
          <div className="col-sm-6 border-l text-center p-3">
            Update Component Here
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;