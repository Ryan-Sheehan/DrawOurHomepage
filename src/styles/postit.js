/* styles.js */
import css from "styled-jsx/css";

export default css`
	.postit-container {
		cursor: move;
		position:absolute;

	}
	.blue-postit-container {
		cursor: move;
		position:absolute;
		top: -3rem;

	}
	.postit-title {
		font-family: "Trattatello";
		font-size: 1.4rem;
		display:flex;

	}
	.postit-try-drawing {
		margin-right: 2.5rem;
	}
	.postit-x {
		cursor:pointer;
		opacity: 0.6;
		position:absolute;
		top: -30px;
		right: -40px;
	}
	.blue-postit-x {
		position:absolute;
		top: -30px;
		right: 5px;
		cursor: pointer;
		opacity: 0.6;
	}
	.postit-text {
		position:absolute;
		z-index: 5;
		top: 7rem;
		left: calc(10% + 2.5rem);
		display: flex;
		flex-direction:column;
		cursor: move;
		font-weight: 600;

	}
	.blue-postit-text {
		display: flex;
		justify-content: center;
		align-items:center;
		height: 300px;
		position:absolute;
		z-index: 5;
		
		left: calc(30% + 2.5rem);
		display: flex;
		flex-direction:column;
		cursor: move;
	}
	.postit {
		filter: drop-shadow(0 4px 0.35rem rgba(0,0,0,0.4));
		cursor: move;
		position:absolute;
		left: 10%;
		top: 5rem;
	}

	.strikethrough {
		text-decoration: line-through;
	}
	
	@media only screen and (max-width: 600px) {
	  .postit {
	  	display:none;
	  }
	  .postit-container {
	  	display:none;
	  }
	  .blue-postit {
	  	display:none;
	  }
	}
`;