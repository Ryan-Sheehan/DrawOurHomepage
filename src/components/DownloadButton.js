import {FaApple} from "react-icons/fa";

const DownloadButton = () => {
  
  return (
   
        <div className="download-monet-button">

        <a href="https://apps.apple.com/us/app/monet-draw-for-dates-friends/id1535020150" 
        className="difference button-inner">
        <FaApple style={{height: 25, marginBottom:2,marginRight:10}}/> Download Monet</a>
        <style jsx>{`
        
        
        .difference {
          color: white !important;
           mix-blend-mode: difference;
           text-decoration:none;
        }
        
        .download-monet-button {
          position:absolute;
          font-weight: 600;
          right: 2rem;
          top: 2rem;
          font-size: 18px;
          font-weight: 600;
          background-color: white;
          border: 2px solid black;
          border-radius:30px;
          padding: 0.625rem 1.25rem;
          transition-duration: 400ms;
          transition-timing-function: cubic-bezier(.36,.07,.19,.97);
          cursor:pointer;
          z-index: 100;
          opacity:0.9;
          background-size: 200% 100%;
          background-image: linear-gradient(to right, white 50%,  black 50%);
          transition: background-position 400ms;
        }
        
        .download-monet-button:hover {
          transform: scale(0.98);
           /*background-position: -101% 0;*/
        }
        
        .button-inner {
          display:flex;
          align-items:center;

        }
        

        @media only screen and (max-width: 768px) { 
          .mobile-icons-grid {
            display: none;
          }
          canvas {
            max-width: none;
          }
          .scroll {
            height: 200px;
            left: -4rem;
            bottom: 3rem;
          }
          .clear-button { 
            right: 3rem;
          }
          .pre-drawn-toggle {
          font-size: 0.9rem;
          }
        }
        @media only screen and (max-width: 600px) {
          
          .download-monet-button { 
            font-size: 14px;
            top: 2.25rem;
            position:fixed;
          }
          
          
        }

         

         @media only screen and (max-width: 360px) {
           
           .download-monet-button { 
            font-size: 12px;
            top: 2rem;

          }
          
        }
        
      `}</style>
        </div>
  )
}

export default DownloadButton;