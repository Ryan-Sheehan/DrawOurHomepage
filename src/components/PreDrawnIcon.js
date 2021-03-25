import Draggable from 'react-draggable';
import postitStyles from '../styles/postit';
import {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';

const variants = {
  hidden: { opacity: 0, scale:0, rotate: 45},
  show: { opacity: 1, scale:1, rotate: 0, transition:{type: 'spring'} }
}

const PreDrawnIcon = (props) => {
	return (
		<motion.div whileHover={{scale: 1.1, rotate: Math.floor(Math.random()*45)}}>
		<a href={props.href} draggable="false">
		<img className="pre-drawn-icon" src={"/" + props.src + ".svg"} draggable="false"/>
		</a>
		<style jsx>{`
		.pre-drawn-icon {
			width: 100px;
			padding-right: 12px;
			cursor: pointer;
		}`
		}</style>
		</motion.div>
	)
}

export default PreDrawnIcon;