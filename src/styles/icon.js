/* styles.js */
import css from "styled-jsx/css";
export default css`
      
        .icon-container {
          position:relative

          z-index:10000000000;
          
          display:flex;
          flex-direction:column;
          pointer-events:none;
        }
        .icon {
          position: absolute;
          height: 200px;
          width: 200px;
          margin-top:1.25rem;
          pointer-events:auto;
          z-index:100;
          filter: drop-shadow(0 4px 0.35rem rgba(0,0,0,0.4));
        }
        .icon:hover {
          animation-play-state: paused;
        }
        .icon-name {
          position: absolute;
          font-size:2.4rem;
          text-decoration:underline;
          color: black;
          font-weight: 600;

        }

        }
        .x:hover {
          animation-play-state: paused;
        }
        .y:hover {
           animation-play-state: paused;
        }
        .x {
          animation-play-state: running;
          -webkit-animation: x 13s linear infinite alternate;
                  animation: x 13s linear infinite alternate;
        }
        
        .y {
          pointer-events:none;
          animation-play-state: running;
          -webkit-animation: y 7s linear infinite alternate;
                  animation: y 7s linear infinite alternate;
        }
        @-webkit-keyframes x {
          100% {
            transform: translateX(calc(100vw - 200px));
          }
        }

        @keyframes x {
          100% {
            transform: translateX(calc(100vw - 200px));
          }
        }
        @-webkit-keyframes y {
          100% {
            transform: translateY(calc(100vh - 200px));
          }
        }
        @keyframes y {
          100% {
            transform: translateY(calc(100vh - 200px));
          }
        }
        
`;