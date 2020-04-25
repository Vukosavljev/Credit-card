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
      <>
        <Header />
        <Route
          exact
          path="/cards"
          render={({ history }) => (
            <main className="card-wrapper">
              <div
                onClick={() => {
                  history.push("cards/add");
                }}
                className="edit-container"
              >
                <Card mode="view" details={this.state.creditCard} />
              </div>
              <div>
                <Card mode={false} />
              </div>
            </main>
          )}
        />
      </>
    );
  }
}
