import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./header/Header";
import Card from "./card/Card";
import "./container.scss";

export default class Container extends Component {
  state = {
    creditCard: {
      type: "visa",
      number: "1234-4444-5555-6666",
      user: "Marko Markovic",
      expirationDate: "02/22",
    },
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <main className="card-wrapper">
          <Route
            exact
            path="/cards"
            render={({ history }) => (
              <>
                <div
                  onClick={() => history.push("cards/edit")}
                  className="edit-container"
                >
                  <Card mode="view" details={this.state.creditCard} />
                </div>
                <div>
                  <Card mode={false} />
                </div>
              </>
            )}
          />

          <Route path="/cards/edit">
            <Card mode="edit" details={this.state.creditCard} />
          </Route>
        </main>
      </div>
    );
  }
}
