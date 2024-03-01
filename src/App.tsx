import "./App.css";
import Composition from "./components/moving-letters/composition/composition";
import Director from "./Director";

const CompositionContent = () => {
	return (
		<>
			{/* composition-souce-active */}
			<div className="composition-source-header">
				<p className="composition-source-text">
					I'm a tech-savvy professional with three years of experience as a
					full-stack software engineer who enjoys creating highly performant,
					user-friendly, and accessible web applications. I love diving into new
					technologies with a particular inclination towards anything related to
					React. I learn quickly and adapt easily.
					<br /> <br />
					Passionate about exploring coding patterns and practices to deliver
					high-quality code and minimize future refactoring. Solution-driven,
					always seeking efficient ways to tackle challenges. I believe that
					documentation is a vital aspect of ensuring clarity, efficiency, and
					long-term success in any project. I highly value teamwork and believe
					in its power to drive collective success and foster a supportive
					environment.
				</p>
			</div>
			<div className="composition-source-header">
				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						One Inside AG, Full-Stack Software Engineer
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						(07/2021-10/2023 Skopje, N. Macedonia)
					</h2>
				</div>

				<p className="composition-source-text">
					- I served as a full-stack engineer, contributing to multiple projects
					in the government, transport, banking and legal sectors.
					<br />
					- I was responsible for implementing responsive web designs to code,
					built reusable web components with detail to structure and code
					standards, worked in agile team collaboration cycles (Scrum) and
					enjoyed supporting multiple projects at the same time. <br />- Notable
					technologies: React, Angular, Preact, TypeScript, Sass, TailwindCSS,
					Web components (@sbb-esta/lyne-components), Stencil, Jira, Cypress,
					Storybook, Figma
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						MOZOK GmbH, Full-Stack Software Engineer
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						(01/2021-07/2021 Skopje, N.Macedonia (remote))
					</h2>
				</div>

				<p className="composition-source-text">
					- Contributed to the development of web application within the gaming
					sector and also worked on a landing page •Assumed control of a
					project, concurrently refactoring legacy code to new framework while
					balancing contribution to the development of new features. <br />
					- Enhanced designs, addressed bugs, and conducted both refactoring of
					existing elements and the implementation of new functional
					requirements, such as API parsers. <br />
					- Explored animations and Svelte with the aim of incorporating a fresh
					design into our company's landing page. <br /> - Notable technologies:
					React, React Native, TypeScript, Svelte, AnimeJS
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Freelancing
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						(05/2019-11/2020 Skopje (remote))
					</h2>
				</div>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						AzurBuilds
					</h2>
				</div>

				<p className="composition-source-text">
					- I collaborated with a team of two other developers, all of whom
					shared a strong passion for gaming, as our project centered around
					playercreated builds using ReactJS with Material UI, ExpressJS and
					MongoDb.
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Lunchtime
					</h2>
				</div>

				<p className="composition-source-text">
					- I collaborated with a team of two other developers, all of whom
					shared a strong passion for gaming, as our project centered around
					playercreated builds using ReactJS with Material UI, ExpressJS and
					MongoDb.
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Internships
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						(07/2017-03/2019 Skopje, N.Macedonia )
					</h2>
				</div>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						One Inside (Front-end React Intern)
					</h2>
				</div>

				<p className="composition-source-text">
					- I collaborated with a great team on a client project and, with the
					guidance of our CEO and CTO, started working on an app using React and
					Firebase to meet the company's needs.
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						ASSECO SEE (Back-end Engineer Intern)
					</h2>
				</div>

				<p className="composition-source-text">
					- Independently tackled diverse tasks spanning various technologies,
					including .Net Core, Entity Framework, Microsoft SQL Server, and a
					brief introductory workshop on React. Engaged in insightful
					presentations from both technical and non-technical colleagues
					throughout the program, enhancing our collective knowledge.
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						HASELT (QA Engineer Intern)
					</h2>
				</div>

				<p className="composition-source-text">
					- As part of a collaborative team consisting of backend interns and a
					UI/UX designer, I served as a quality assurance engineer intern. In
					this hybrid role, my responsibilities encompassed diverse tasks such
					as identifying software requirements, creating tasks, writing use
					cases, conducting unit tests, maintaining project documentation, and
					researching potential new tools.
				</p>
			</div>
			<div className="composition-source-header">
				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Faculty of Computer Science and Engineering, Bachelor in Software
						Engineering
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						2016-present Skopje, N.Macedonia
					</h2>
				</div>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Workshops
					</h2>
				</div>
				<p className="composition-source-text">
					- Agile Methodologies at Endava <br /> 
					- Code Talks at Seavus •Flutter <br /> 
					- Introduction at Public Room <br />
					- Game Design at M3DS Academy <br />
					- Regular developer meetups at Base42 hackerspace <br />
					- Many more unmentioned <br />
					- Actively attending local/online developer events
				</p>
			</div>
		</>
	);
};

function App() {
	const {
		onClickHeaderTitle,
		onClickCompositionBackButton,
		onClickMenuButton,
		onClickCompositionWrapper,
	} = Director();

	return (
		<div className="App">
			<div className="header">
				<canvas className="site-nav-canvas"></canvas>
				<button
					className="js-menu menu button-clear menu-white menu-movingLetters"
					aria-label="Site navigation"
					onClick={onClickMenuButton}
				>
					<span className="menu-icon-line-1 menu-icon-line"></span>
					<span className="menu-icon-line-2 menu-icon-line"></span>
					<span className="menu-icon-line-3 menu-icon-line"></span>
				</button>

				<div className="site-nav-overlay js-nav">
					<div className="nav-content">
						<div className="js-nav-header nav-header">
							<span className="nav-header-text">Konstantin Pachemski</span>
							<div className="nav-header-line js-nav-header-line"></div>
						</div>

						<ul className="nav-categories">
							<li className="nav-category js-nav-animate">
								<a href="/" className="nav-link">
									Overview
								</a>
							</li>
						</ul>

						<div className="nav-sublinks js-nav-animate">
							<div className="js-nav-animate">
								<a className="nav-link nav-sublink" href="/moving-letters/">
									Moving Letters
								</a>
							</div>
						</div>
					</div>
				</div>

				<h1 className="header-title" onClick={onClickHeaderTitle}>
					Konstantin Pachemski
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
				<a
					href="/moving-letters/"
					className="composition-back-button"
					onClick={onClickCompositionBackButton}
				>
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
					<CompositionContent />
				</div>
			</div>

			<div className="compositions" style={{ flexFlow: "row wrap" }}>
				<Composition
					animationNumber={1}
					onClickCompositionWrapper={onClickCompositionWrapper}
				/>
				<Composition
					animationNumber={2}
					onClickCompositionWrapper={onClickCompositionWrapper}
				/>
				<Composition
					animationNumber={3}
					onClickCompositionWrapper={onClickCompositionWrapper}
				/>
				<Composition
					animationNumber={4}
					onClickCompositionWrapper={onClickCompositionWrapper}
				/>
			</div>
		</div>
	);
}

export default App;
