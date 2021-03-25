import React, {useEffect, useState, useRef} from 'react';

import Lottie from 'react-lottie-player'
import earthAnimation from './earthRotate.json';



const MonetInfo = (props) => {

	return (
		<>
		<img src="/monetwordmark.svg" draggable="false"/>
		<div>Draw your way to love, to friends, & to a good time...</div>
		<div className="earthAnimation">
		<Lottie
    	  loop
    	  animationData={earthAnimation}
    	  play
    	/>
    	</div>
    	
		<style jsx>{`
		.earthAnimation {
			margin-top: -15px;
			margin-right: -50px;
			margin-left: 10px;
			filter: drop-shadow(0 4px 0.35rem rgba(0,0,0,0.4));
		}
		`}</style>
		</>
	)
}

export default MonetInfo;