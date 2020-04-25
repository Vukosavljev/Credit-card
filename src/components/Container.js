import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./header/Header";
import Card from "./card/Card";
import "./container.scss";

export default class Container extends Component {
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
                <Card isNew={true} />
              </div>
              <div>
                <Card isNew={false} />
              </div>
            </main>
          )}
        />
      </>
    );
  }
}
