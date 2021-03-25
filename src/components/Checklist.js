import Draggable from 'react-draggable';
import postitStyles from '../styles/postit';
import {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';



const Checklist = (props) => {

	const found = props.found.map(item => item.name);
	return (
		<div>
		<span className="checklist-title">Try Drawing...</span>
		<ul>
		<li className={found.includes("Instagram") ? "strikethrough" : ""}>a camera</li>
		<li className={found.includes("Twitter") ? "strikethrough" : ""}>a bird</li>
		<li className={found.includes("TikTok") ? "strikethrough" : ""}>a music note</li>
		<li className={found.includes("Merch") ? "strikethrough" : ""}>a shirt or pants</li>
		<li className={found.includes("Discord") ? "strikethrough" : ""}>a dragon or a frog</li>
		<li className={found.includes("Toilet") ? "strikethrough" : ""}>a toilet</li>
		</ul>
		<style jsx>{`
		.checklist-title {
			font-family: "Trattatello";
			font-size: 1.4rem;
		}
		.strikethrough {
			text-decoration: line-through;
		}
		`
		}</style>
		</div>
		)
}

export default Checklist;