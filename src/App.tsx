import "./App.css";
import Composition from "./components/moving-letters/composition/composition";
import Director from "./Director";

const CompositionContent = () => {
	return (
		<>
			{/* composition-souce-active */}
			<div className="composition-source-header">
				<p className="composition-source-text">
					I'm a tech-savvy professional with four years of experience as a
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
						One Inside AG (Full-Stack Software Engineer)
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						July/2021 - Oct/2023 <br />
						Skopje, North Macedonia
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
						MOZOK GmbH (Full-Stack Software Engineer)
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right">
						Jan/2021 - Jul/2021 <br /> (remote)
					</h2>
				</div>

				<p className="composition-source-text">
					- Contributed to the development of web application within the gaming
					sector and also worked on a landing page <br />
					- Assumed control of a project, concurrently refactoring legacy code
					to new framework while balancing contribution to the development of
					new features. <br />
					- Enhanced designs, addressed bugs, and conducted both refactoring of
					existing elements and the implementation of new functional
					requirements, such as API parsers. <br />
					- Explored animations and Svelte with the aim of incorporating a fresh
					design into our company's landing page. <br />
					- Notable technologies:
					React, React Native, TypeScript, Svelte, AnimeJS
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Freelancing
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						May/2019 - Nov/2020 <br /> (remote)
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
						07/2017-03/2019 <br /> Skopje, N.Macedonia
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
					<h2 className="composition-source-subheader composition-source-subheader-right">
						2016 - present <br /> Skopje, N.Macedonia
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
					- Many more unmentioned <br />- Actively attending local/online
					developer events
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
		animateButton,
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
								<a
									href="mailto:konstantin.pachemski@gmail.com"
									className="nav-link"
								>
									Email
								</a>
							</li>
							<li className="nav-category js-nav-animate">
								<a
									href="https://github.com/konstantinpachemski/"
									className="nav-link"
								>
									GitHub
								</a>
							</li>
							<li className="nav-category js-nav-animate">
								<a
									href="https://www.linkedin.com/in/konstantin-pachemski/"
									className="nav-link"
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>

				<h1 className="header-title" onClick={onClickHeaderTitle}>
					Konstantin Pachemski
				</h1>
			</div>

			<div className="composition-source">
				<a
					href="/"
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

			<div className="compositions">
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
			<div className="footer">
				<div className="footer-container">
					<div className="footer-image">
						<img src="/avatar-res.jpg" alt="Avatar" />
					</div>
					<div className="footer-text">
						<h2>Konstantin Pachemski</h2>
						<p>
							A frontend developer passionate about crafting delightful user
							experiences.
						</p>
						<p
							onMouseEnter={(e) => animateButton(e.target, 1.2, 800, 400)}
							onMouseLeave={(e) => animateButton(e.target, 1.0, 600, 300)}
						>
							<a
								href="/"
								onClick={(e) => {
									e.preventDefault();
									onClickMenuButton(e);
								}}
							>
								Get in touch
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
