import React from "react";

const HomePage = ({ history }) => {
  return (
    <div>
      <div>
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui text container">
            <h1 className="ui inverted stackable header">
              <img
                className="ui image massive"
                src="/assets/logo.png"
                alt="logo"
              />
              <div className="content">Bukakke</div>
            </h1>
            <h2>Ты один, а их много</h2>
            <div
              onClick={() => history.push("/events")}
              className="ui huge white inverted button"
            >
              Начать
              <i className="right arrow icon" />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          App made by{" "}
          <a href="https://github.com/dunaevski" title="dunaevski_a">
            dunaevski_a
          </a>{" "}
          from{" "}
          <a href="https://github.com/dunaevski/full-stack-project" title="GitHub">
           GitHub.com
          </a>{" "}
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
