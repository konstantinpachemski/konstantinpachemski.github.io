import "./App.css";
import Composition from "./components/moving-letters/composition/composition";
import AnimationsController from "./AnimationsController";

function App() {

	const { animateHeaderTitle } = AnimationsController();
	
	return (
		<div className="App">
			<div className="header">
				<canvas className="site-nav-canvas"></canvas>
				<button
					className="js-menu menu button-clear menu-white menu-movingLetters"
					aria-label="Site navigation"
				>
					<span className="menu-icon-line-1 menu-icon-line"></span>
					<span className="menu-icon-line-2 menu-icon-line"></span>
					<span className="menu-icon-line-3 menu-icon-line"></span>
				</button>

				<div className="site-nav-overlay js-nav">
					<div className="nav-content">
						<div className="js-nav-header nav-header">
							<span className="nav-header-text">Tobias Ahlin</span>
							<div className="nav-header-line js-nav-header-line"></div>
						</div>

						<ul className="nav-categories">
							<li className="nav-category js-nav-animate">
								<a href="/" className="nav-link">
									Overview
								</a>
							</li>
							<li className="nav-category js-nav-animate">
								<a href="/blog/" className="nav-link">
									Blog
								</a>
							</li>
							<li className="nav-category js-nav-animate">
								<a href="/blog/tutorials/" className="nav-link">
									Tutorials
								</a>
							</li>
						</ul>

						<div className="nav-sublinks js-nav-animate">
							<div className="js-nav-animate">
								<a className="nav-link nav-sublink" href="/moving-letters/">
									Moving Letters
								</a>
								<a className="nav-link nav-sublink" href="/typesource/">
									TypeSource
								</a>
								<a className="nav-link nav-sublink" href="/spinkit/">
									SpinKit
								</a>
							</div>
						</div>
					</div>
				</div>

				<h1 className="header-title" onClick={animateHeaderTitle}>
					Moving Letters
				</h1>
				<div className="header-links">
					<a href="https://twitter.com/tobiasahlin" className="header-link">
						<svg
							className="contact-icon twitter-icon-svg"
							fill="#fff"
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="49"
							viewBox="0 0 60 49"
						>
							<path d="M60 5.8a32.794 32.794 0 0 1-7.02 2A12.573 12.573 0 0 0 58.416.9a22.046 22.046 0 0 1-7.924 3A11.967 11.967 0 0 0 41.435 0 12.256 12.256 0 0 0 29.21 12.4a11.72 11.72 0 0 0 .225 2.8A34.736 34.736 0 0 1 4.075 2.1 11.406 11.406 0 0 0 2.49 8.3a12.24 12.24 0 0 0 5.436 10.3 12.607 12.607 0 0 1-5.66-1.6v.3a12.426 12.426 0 0 0 9.96 12.1 11.632 11.632 0 0 1-3.168.5 7.87 7.87 0 0 1-2.265-.2 12.483 12.483 0 0 0 11.548 8.7 23.817 23.817 0 0 1-15.4 5.3A14.578 14.578 0 0 1 0 43.5 35.742 35.742 0 0 0 18.79 49c22.64 0 35.094-19.1 35.094-35.7v-1.6a16.4 16.4 0 0 0 6.113-5.9z" />
						</svg>
					</a>
				</div>
			</div>

			<div className="composition-source">
				<a href="/moving-letters/" className="composition-back-button">
					<svg
						className="composition-back-image"
						xmlns="http://www.w3.org/2000/svg"
						width="102.125"
						height="102.125"
						viewBox="0 0 102.125 102.125"
					>
						<path
							fill="#fff"
							d="M115.594,59.919a51.05,51.05,0,1,1-51.05,51.05A51.05,51.05,0,0,1,115.594,59.919ZM139,108.031H102.868l16.6-16.6-4.216-4.187L91.5,111l23.754,23.754,4.187-4.186-16.569-16.6H139v-5.938Z"
							transform="translate(-64.531 -59.906)"
						/>
					</svg>
				</a>

				<div className="composition-source-container">
					<h1 className="composition-source-header composition-source-text">
						Effect / 02
					</h1>
					<h2 className="composition-source-subheader composition-source-text">
						HTML
					</h2>
					<pre className="highlight composition-source-text">
						<code className="composition-source-code composition-source-code-html"></code>
					</pre>

					<h2 className="composition-source-subheader composition-source-text">
						CSS
					</h2>
					<pre className="highlight composition-source-text">
						<code className="composition-source-code composition-source-code-css"></code>
					</pre>

					<h2 className="composition-source-subheader composition-source-text">
						Javascript
					</h2>
					<pre className="highlight composition-source-text">
						<code className="composition-source-code composition-source-code-js"></code>
					</pre>
				</div>
			</div>

			<div className="compositions" style={{ flexFlow: "row wrap" }}>
				<Composition animationNumber={1} />
				<Composition animationNumber={2} />
				<Composition animationNumber={3} />
				<Composition animationNumber={4} />
			</div>
		</div>
	);
}

export default App;
