import React from "react";
import styles from "./ProfileCard.module.css";
import CardBackground from "../images/bg-pattern-card.svg";
import UserAvatar from "../images/image-victor.jpg";

function ProfileCard(props) {
	return (
		<div className={styles.container}>
			<div className={styles.backgroundContainer}>
				<img src={CardBackground} alt="card-background" />
			</div>
			<div className={styles.profileContainer}>
				<img src={UserAvatar} alt="user-avatar" />
				<h1>
					Victor Crest <span>26</span>
				</h1>
				<p>London</p>
			</div>
			<hr />
			<div className={styles.statsContainer}>
				<div className={styles.statContainer}>
					<h1>80K</h1>
					<p>Followers</p>
				</div>
				<div className={styles.statContainer}>
					<h1>803K</h1>
					<p>Likes</p>
				</div>
				<div className={styles.statContainer}>
					<h1>1.4K</h1>
					<p>Photos</p>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
