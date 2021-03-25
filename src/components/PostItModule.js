import Draggable from 'react-draggable';
import postitStyles from '../styles/postit';
import {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion'; 

const variants = {
  hidden: { opacity: 0, scale:0, rotate: 45},
  show: { opacity: 1, scale:1, rotate: 0, transition:{type: 'spring'} }
}

const PostItModule = (props) => {
	
	const [active, setActive] = useState(false);
	useEffect(() => {

		setActive(props.active)
	
		
	},[props.active])


	const controls = useAnimation()
	useEffect(() => {
		if (props.open) {
			controls.start("show")
		} else {
			controls.start("hidden")
		}
		
	},[props.open])

	return (
		<motion.div 
		variants={variants}
    	initial="hidden"
    	animate={controls}
		className="postit-container"
		

		>
		<Draggable>
		<div>
		<div className="postit-inner"
		style={{
			width: `${props.width - 55}px`,
			top: `${props.top - 0.5}rem`,
			left: `${props.left + 2}rem`,
		
		}}
		onMouseDown={() => props.moved(props.color)}>
		

		
	
		
		<div className="postit-inner-x" 
		
		>
		<motion.div 
		onClick={props.close} 
		whileHover={{scale: 1.1, rotate: Math.floor(Math.random()*40)-20}}
		style={{cursor:"pointer"}}>X</motion.div>
		</div>
		<div className="postit-inner-items" >
		{props.children}
		</div>

		</div>

		<img className="postit-image" src={`./${props.color}postit.svg`} draggable="false"
		style={{
			top: `${props.top}rem`,
			left: `${props.left}rem`
		}}/>
		<style jsx>{`
			.postit-inner-x {
				
				opacity: 0.6;
				padding: 0 1.25rem;
				padding-top: 1rem;
				width: 100%;
				display: flex;
				justify-content: flex-end;
				font-size: 1.5rem;
				font-family: "Trattatello";
			}
			.postit-inner-items {
				padding: 0 1.25rem;
				width: 100%;
				font-family: "Manrope";
				font-weight: 600;
			}
			.postit-inner {
				display:block;
				display: flex;
				justify-content: center;
				align-items:center;
				position:absolute;
				z-index:1;
				top: -9.5rem;
				left: 7.5rem;
				display: flex;
				flex-direction:column;
				cursor: move;
			}
			.postit-image {
				display:block;
				filter: drop-shadow(0 4px 0.35rem rgba(0,0,0,0.4));
				cursor: move;
				position:absolute;
				left: 10%;
				
			}
			@media only screen and (max-width: 600px) {
				.postit-image {display:none;}
				.postit-inner {display:none;}
        	}
		`}	
		</style>
		<style jsx>{postitStyles}</style>
		</div>
		</Draggable>
		</motion.div>
		)
}

export default PostItModule;