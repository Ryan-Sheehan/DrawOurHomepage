/* styles.js */
import css from "styled-jsx/css";

export default css`
.color-picker {
	margin-top: 1.25rem;
	height: 2rem;
	width: calc(100% - 5rem);
	
	display: flex;
	justify-content:center;
	align-items:center;
}
.color-button {
	border: 1px solid black;
	border-radius: 100%;
	height: 30px;
	width: 30px;
	margin: 0 0.3125rem;
	display: flex;
	justify-content:center;
	align-items:center;
	transition-duration: 300ms;
}
.color-button-inner:hover {
	transform: scale(0.65);
}
.color-button-inner:active {
	transform: scale(0.55);
}
.color-button-selected {
	border: 3px solid black;
	border-radius: 100%;
	height: 30px;
	width: 30px;
	margin: 0 0.3125rem;
	display: flex;
	justify-content:center;
	align-items:center;
}
.color-button-inner {
	
	border-radius: 100%;
	transform: scale(0.75);
	width: 30px;
	height: 30px;
	transition-duration: 300ms;
	z-index:0;
}
.color-button-inner-selected {
	border-radius: 100%;

	width: 30px;
	height: 30px;
	transition-duration: 300ms;

}

`;