/* styles.js */
import css from "styled-jsx/css";

export default css`
	.sticker-container {
		width: 200px;
		height: 400px;
	}
	.sticker-name {
		position:absolute;
		bottom: 60%;
		left: -30%;
		z-index: 1000;
		font-weight: 800;
		font-size: 18px;
		width: 140px;
		height: 120px;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	svg {
		width: 140px;
		height: 120px;
		z-index: 100;
		filter: drop-shadow(0 4px 0.25rem black);
	}
	.tr {
		position:absolute;
		margin-left: 50px;
	}
	.tl {
		position:absolute;
		margin-right: 50px;
	}
	.bl {
		position:absolute;
		bottom: 60%;
		left: -30%;
		z-index: 0;
	}


`;