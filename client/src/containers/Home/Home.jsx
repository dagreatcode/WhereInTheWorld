// rsc
// rcc
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "./img10.png";
import Image2 from "./img11.jpg";
import Image3 from "./img14.jpg";

class Home extends Component {
	render() {
		return (
			<>
				<div className="jumbotron text-center">
					<h1 className="display-3">It's The Covid Way</h1>
					<p className="lead">
						Search from Covid-19 News to Covid Stats, and near by Places to go.
					</p>
					<hr className="my-2" />
					<p>Stay Safe</p>
					<p className="lead">
						<Link className="btn btn-primary btn-lg" to="/Login" role="button">
							Let's Get Started.
						</Link>
					</p>
				</div>
				<blockquote className="blockquote text-right">
					<p className="mb-0"></p>
					<footer className="blockquote-footer">
						{"Covid Stats & News"}
						<cite title="Source Title"></cite>
						<div className="card-columns">
							<div className="card">
								<div className="row">
									<div className="col-sm-6">
										<div className="card-body">
											<h4 className="card-title">Covid</h4>
											<p className="card-text">
												Get the latest news and stats on Covid-19
											</p>
										</div>
									</div>
									<div className="col-sm-6">
										<Link to="/Covid">
											<img
												className="card-img-top"
												src={Image}
												alt="Covid button"
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</blockquote>
				<br />
				<br />
				<blockquote className="blockquote text-right">
					<p className="mb-0"></p>
					<footer className="blockquote-footer">
						{"Places Around You"}
						<cite title="Source Title"></cite>
						<div className="card">
							<div className="row">
								<div className="col-sm-6">
									<Link to="/WhereToGo">
										<img className="card-img-top" src={Image2} alt="a map" />
									</Link>
								</div>
								<div className="col-sm-6">
									<div className="card-body">
										<h4 className="card-title">Where To Go</h4>
										<p className="card-text">
											Find out what type of places are near you
										</p>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</blockquote>
				<br />
				<br />
				<blockquote className="blockquote text-right">
					<p className="mb-0"></p>
					<footer className="blockquote-footer">
						{"Coming Soon"}
						<cite title="Source Title"></cite>
						<div className="card">
							<div className="row">
								<div className="col-sm-6">
									<div className="card-body">
										<h4 className="card-title">Gas Prices</h4>
										<p className="card-text">Up to date Gas prices.</p>
									</div>
								</div>
								<div className="col-sm-6">
									<Link to="/Gas">
										<img
											className="card-img-top"
											src={Image3}
											alt="Stay safe smiley face"
										/>
									</Link>
								</div>
							</div>
						</div>
					</footer>
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
