import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./alethea.png"
								alt="alethea.ai"
								className="work-image"
							/>
							<div className="work-title">Alethea.AI</div>
							<div className="work-subtitle">Project Auditor</div>
							<div className="work-duration">
								Nov 2024 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./geniusee.png"
								alt="Geniusee"
								className="work-image"
							/>
							<div className="work-title">Geniusee</div>
							<div className="work-subtitle">
								Full Stack Blockchain Developer
							</div>
							<div className="work-duration">
								Oct 2023 — Sep 2024
							</div>
						</div>

						<div className="work">
							<img
								src="./flipgg.png"
								alt="flipgg"
								className="work-image"
							/>
							<div className="work-title">Flip Games Ltd</div>
							<div className="work-subtitle">
								Full Stack Blockchain Developer
							</div>
							<div className="work-duration">
								Mar 2021 — Sep 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./honeycomb.png"
								alt="flipgg"
								className="work-image"
							/>
							<div className="work-title">Honeycomb Software</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">
								Jan 2018 — Mar 2020
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
