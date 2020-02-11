import React from "react";
import "./AboutCard.css";

const ICON_FACEBOOK = process.env.PUBLIC_URL + "/imgs/Facebook.png";
const ICON_Github = process.env.PUBLIC_URL + "/imgs/Github.png";
const ICON_Instagram = process.env.PUBLIC_URL + "/imgs/Instagram.png";
const ICON_Medium = process.env.PUBLIC_URL + "/imgs/Medium.png";
const ICON_Quora = process.env.PUBLIC_URL + "/imgs/Quora.png";
const ICON_Twitter = process.env.PUBLIC_URL + "/imgs/Twitter.png";
const SHIVAM_PIC = process.env.PUBLIC_URL + "/imgs/shivam_cropped2.jpg";

class AboutCard extends React.Component {
	toggleCard = eve => {
		let card = document.getElementById("aboutCardd");
		card.classList.toggle("aboutCardWrapper");
		card.classList.toggle("aboutCardHidden");
	};

	render() {
		return (
			<div>
				<div
					id="aboutCardd"
					className="aboutCardHidden"
					onClick={this.toggleCard}
				>
					<div
						id="aboutCardIn"
						className="aboutCard"
						onClick={eve => {
							eve.stopPropagation();
						}}
					>
						<div className="leftAbout">
							<div>
								<img src={SHIVAM_PIC}></img>
								<p className="aboutName">Shivam Agrawal</p>
								<p className="aboutProf">Software Developer</p>
							</div>
						</div>
						<div className="rightAbout">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
								sint quibusdam quod tenetur corporis error, suscipit doloremque
								ea dolorem ducimus saepe nulla iste, assumenda deserunt, odit
								consequuntur accusamus voluptas.
							</p>
							<div className="bottomBar">
								<div style={{ width: "30px" }}></div>
								<a target="_blank" href="https://www.facebook.com/shivampip">
									<img src={ICON_FACEBOOK}></img>
								</a>
								<a target="_blank" href="https://twitter.com/shivampip">
									<img src={ICON_Twitter}></img>
								</a>
								<a target="_blank" href="https://www.instagram.com/shivampip/">
									<img src={ICON_Instagram}></img>
								</a>
								<a
									target="_blank"
									href="https://www.quora.com/profile/Shivam-Agrawal-152"
								>
									<img src={ICON_Quora}></img>
								</a>
								<a target="_blank" href="https://medium.com/@shivampip">
									<img src={ICON_Medium}></img>
								</a>
								<a target="_blank" href="https://github.com/shivampip">
									<img src={ICON_Github}></img>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div id="aboutMeBtn" onClick={this.toggleCard}>
					<p>Me</p>
				</div>
			</div>
		);
	}
}

export default AboutCard;
