// rsc
// rcc
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div className="jumbotron text-center">
          <h1 className="display-3">Welcome To The Page</h1>
          <p className="lead">Hope you feel at home</p>
          <hr className="my-2" />
          <p>More info</p>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              href="Jumbo action link"
              role="button"
            >
              Let's Get Started
            </a>
          </p>
        </div>
        <blockquote class="blockquote text-right">
        <p class="mb-0"></p>
        <footer class="blockquote-footer"> <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
      <blockquote class="blockquote text-right">
        <p class="mb-0"></p>
        <footer class="blockquote-footer"> <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
      <blockquote class="blockquote text-right">
        <p class="mb-0"></p>
        <footer class="blockquote-footer"> <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
      {/* <img src="" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="placeholder"/> */}
        {/* <div className="card text-left">
          <img className="card-img-top" src="holder.js/100px180/" alt="" />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Body</p>
          </div>
        </div> */}
      </>
    );
  }
}

export default Home;
