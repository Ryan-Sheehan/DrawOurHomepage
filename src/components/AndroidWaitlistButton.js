import {FaAndroid} from "react-icons/fa";


const AndroidWaitlistButton = (props) => {
  
  return (
   
        <div className="android-waitlist-button" style={{opacity: props.open ? 0 : 1}} onClick={props.openPostit}>
        
        <span className="button-inner">
          <FaAndroid style={{height: 25,paddingRight: 10}}/>
          Android Waitlist
        </span>
        
        <style jsx>{`
        .difference {
          color: white !important;
           mix-blend-mode: difference;
           text-decoration:none;
        }
        .android-waitlist-button {
          display:block;
          position:absolute;
          right: 16.5rem;
          top: 2rem;
          font-size: 18px;
          font-weight: 600;
          background-color: transparent;
          color: black;
          border: 2px solid black;
          border-radius:30px;
          padding: 0.625rem 1.25rem;
          transition-duration: 400ms;
          transition-timing-function: cubic-bezier(.36,.07,.19,.97);
          cursor:pointer;
          z-index: 100;
          opacity:0.9;
          
          transition: background-position 400ms;
        }
        .android-waitlist-button:hover {
          transform: scale(0.98);
           background-position: -100% 0;
        }
        .button-inner {
          display:flex;
          align-items:center;
          justify-content:space-between;
        }
        @media only screen and (max-width: 600px) {
          .android-waitlist-button {
            display:none;
          }
        }
  
        
      `}</style>
        </div>
  )
}

export default AndroidWaitlistButton;