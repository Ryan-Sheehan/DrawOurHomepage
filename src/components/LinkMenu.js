import Draggable from 'react-draggable';
import postitStyles from '../styles/postit';
import {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import PreDrawnIcon from './PreDrawnIcon';

const variants = {
  hidden: { opacity: 0, scale:0, rotate: 45},
  show: { opacity: 1, scale:1, rotate: 0, transition:{type: 'spring'} }
}

const LinkMenu = (props) => {
	return (
		<div className="pre-drawn-icon-container">
		<div className="pre-drawn-icon-row">
		<PreDrawnIcon src={'insta'} href={'https://www.instagram.com/monetdating/'}/>
		<PreDrawnIcon src={'twitter'} href={'https://twitter.com/monetdating'}/>
		</div>
		<div className="pre-drawn-icon-row">
		<PreDrawnIcon src={'discord'} href={'https://discord.com/invite/Y7WtVpaxdh'}/>
		<PreDrawnIcon src={'tiktok'} href={'https://www.tiktok.com/@monetapp'}/>
		
		</div>
		<div className="pre-drawn-icon-row">
		<PreDrawnIcon src={'merch'} href={'https://supplies.monet.world/'}/>
		<PreDrawnIcon src={'gallery'} href={'https://monet.world/!#T58A65'}/>
		</div>
		<style jsx>{`
		.pre-drawn-icon-container {
			display: flex;
			align-items: flex-end;
			flex-direction:column;
			
			font-family: "Trattatello";
			font-size: 1.8rem;
	
		}
		.pre-drawn-icon-row {
			display: flex;
		}`
		}</style>
		</div>
	)
}

export default LinkMenu;