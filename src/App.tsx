import "./App.css";

import Composition from "./components/moving-letters/composition/composition";
import Director from "./Director";

const CompositionContent = () => {
	return (
		<>
			{/* composition-souce-active */}
			<div className="composition-source-header">
				<div className="avatar-section-container">
					<img src="/avatar-res.jpg" alt="Avatar" />
				</div>
				<p className="composition-source-text">
					I am a highly skilled full-stack software engineer with a strong
					background in developing and maintaining web applications across
					various industries, including government, transport, banking, legal,
					and gaming. <br /> <br />
					With extensive professional experience at One Inside AG and MOZOK
					GmbH, I have demonstrated my expertise in implementing responsive web
					designs, building reusable components, and working within agile teams.
					In my freelance work, I have successfully contributed to the
					development of web apps for networking events, game build sharing, and
					lunch order planning. <br /> <br />I am proficient in both front-end
					and back-end technologies and have experience with various tools and
					frameworks. My education in Software Engineering, combined with
					multiple internships and ongoing participation in workshops and
					developer meetups, has further honed my skills. My commitment to
					continuous learning and improvement is evident in my active engagement
					with the developer community and attendance at numerous workshops and
					meetups. This dedication ensures I stay updated with the latest
					industry trends and best practices, making me a versatile and valuable
					asset in any development team.
				</p>
			</div>
			<div className="composition-source-header">
				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						One Inside AG (Full-Stack Software Engineer)
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						July/2021 - Oct/2023 <br />
						Skopje, Macedonia
					</h2>
				</div>

				<p className="composition-source-text">
					- I served as a full-stack engineer, contributing to multiple projects
					in the government, transport, banking and legal sectors. <br />
					- Implemented responsive web designs to code, built reusable web
					components, worked in agile teams supporting multiple projects
					simultaneously. <br />- Tech: React, Angular, AEM, Stencil,
					JavaScript, TypeScript, HTML5, CSS3, Sass with BEM, TailwindCSS, Web
					components (@sbb-esta/lyne-components), Jira, Cypress, Storybook,
					Figma, Adobe XD
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
					- Contributed to the development of web application in the gaming
					industry and a landing page <br />- Assumed control of a project,
					concurrently refactoring legacy code while balancing contribution to
					the development of new features. <br />- Improved frontend design,
					addressed bugs and refactor API Parsers. <br />- Developed a
					responsive landing page with Svelte from Figma design <br />- Tech:
					React, React Native, TypeScript, Svelte, AnimeJS, HTML5, CSS3
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Freelancing
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						May/2019 - May/2024 <br /> (remote)
					</h2>
				</div>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Intersect
					</h2>
				</div>

				<p className="composition-source-text">
					- Working in a team to develop a web app for connecting people on
					networking events <br />- Tech: NextJS, Shadcn/UI, Supabase,
					Tailwindcss, HTML5, CSS3
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						AzurBuilds
					</h2>
				</div>

				<p className="composition-source-text">
					- Collaborated in a small team of developers to create a web app which
					enabled users to create and share game builds <br />- Tech: React with
					Material UI, Nodejs, Express, MongoDb
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Lunchtime
					</h2>
				</div>

				<p className="composition-source-text">
					- Developed an app where all the users could interact together to plan
					lunch orders. Users could create and manage orders and restaurants,
					notifications and see real time changes <br />- Tech: React with
					Material UI and Firebase
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Internships
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right text-end">
						07/2017-03/2019 <br /> Skopje, Macedonia
					</h2>
				</div>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						One Inside (Frontend React Intern)
					</h2>
				</div>

				<p className="composition-source-text">
					- Frontend development on existing React project <br />
					- Developer a web app under mentorship of CEO and CTO <br />- Tech:
					React with Material UI, Firebase, Stripe
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						ASSECO SEE (Backend Engineer Intern)
					</h2>
				</div>

				<p className="composition-source-text">
					- Mainly SQL training and introduction to Microsoft technologies{" "}
					<br />- Tech: .NET, Entity Framework and Microsoft SQL Server
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						HASELT (QA Engineer Intern)
					</h2>
				</div>

				<p className="composition-source-text">
					- A hybrid role, mainly as quality assurance engineer intern. I did
					tasks such as identifying software requirements, creating tasks,
					writing use cases, conducting unit tests, maintaining project
					documentation, researching potential new tools and took some
					programming tasks.
				</p>
			</div>
			<div className="composition-source-header">
				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Faculty of Computer Science and Engineering <br />
						Bachelor in Software Engineering
					</h2>
					<h2 className="composition-source-subheader composition-source-subheader-right">
						2016 - present <br /> Skopje, Macedonia
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
			<div className="composition-source-header">
				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Frontend:
					</h2>
				</div>
				<p className="composition-source-text">
					- React, NextJS, Angular, Preact, Svelte <br />
					- JavaScript, TypeScript <br />
					- HTML5, CSS3, Sass, Less, Tailwindcss, Shadcn/UI, Material UI <br />
					- Stencil, Web Components (@sbb-esta/lyne-components) <br />- Cypress,
					Storybook
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Backend:
					</h2>
				</div>
				<p className="composition-source-text">
					- ExpressJS, NodeJS <br />
					- Firebase, Supabase, MongoDB, Heroku <br />
				</p>

				<div className="composition-source-subheader-container">
					<h2 className="composition-source-subheader composition-source-subheader-left">
						Tools and others:
					</h2>
				</div>
				<p className="composition-source-text">
					- AEM <br />
					- Figma, Adobe Photoshop/Illustrator, Invision <br />
					- Git, Jira, Confluence <br />
					- AnimeJS, StripeJS, DiscordJS <br />
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
