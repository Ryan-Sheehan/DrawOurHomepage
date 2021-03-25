import React, {useEffect, useState} from 'react';

import Waitlist from './Waitlist';
const MobileIconsGrid = () => {
  
  return (
    <div className="mobile-icons-grid">
        <div className="mobile-icon-row">
        <a href={"https://www.instagram.com/monetdating/"}>
        <img className="mobile-icon" src={"/insta.svg"} draggable="false"/>
        </a>
        <a href={"https://supplies.monet.world/"}>
        <img className="mobile-icon" style={{marginLeft:"10px"}} src={"/merch.svg"} draggable="false"/>
        </a>
        </div>
        <div className="mobile-icon-row">
        <a href={"https://twitter.com/monetdating"}>
        <img className="mobile-icon" src={"/twitter.svg"} draggable="false"/>
        </a>
        <a href={"https://discord.com/invite/Y7WtVpaxdh"}>
        <img className="mobile-icon"  src={"/discord.svg"} draggable="false"/>
        </a>
        </div>
        <div className="mobile-icon-row">
        <a href={"https://www.tiktok.com/tag/monetdating?_d=secCgsIARCbDRgBIAIoARI%2BCjyEgY%2Bvt0EIKm56HR2V8PxE43R5S8UUDklNAxYBV5fSUXvWD4ahZ50JyzNHJE2%2B2n8vZlVy%2BZXXqrqp%2BtYaAA%3D%3D&language=en&name=monetdating&sec_user_id=MS4wLjABAAAAAXkeCw_itwGFE-NErPm6pS4zyNTiaUajCIkYMhJRJ58GE1v7eglop9AlgisazR2J&share_challenge_id=1682277138095110&share_link_id=F967D5A4-2C40-412E-8F3A-AC69757DC773&tt_from=copy&u_code=d49d71lflala9e&user_id=6649257795608870918&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m"}>
        <img className="mobile-icon" style={{marginLeft:"-50px"}} src={"/tiktok.svg"} draggable="false"/>
        </a>
        <a href={"https://monet.world/!#T58A65"}>
        <img className="mobile-icon" style={{marginLeft:"-20px"}} src={"/gallery.svg"} draggable="false"/>
        </a>
        </div>
        <Waitlist/>
        
       <style jsx>{`
       
        .monet-logo {
          position:absolute !important;
          top: 1.25rem;
          left: 2.5rem;
          z-index: 100;
          transition-duration: 300ms;
          cursor: pointer;
        }
        .monet-logo:hover {
          transform:scale(0.95);
        }
        .monet-logo > img {
           width:100px ;
            height:100px ;
        }
        .container {
          overflow-y: hidden;
          
          grid-template-columns: repeat(1, minmax(0, 1fr));
          height: 100vh;
          margin:0;
        }
        .canvas-container {
          display: flex;
          justify-content:center;
          align-items:center;
          flex-direction: column;
          margin-top: 3.5rem;
          position:absolute;
          right: 2rem;
          bottom: 2rem;
          z-index:100;

        }
        
        .difference {
          color: white !important;
           mix-blend-mode: difference;
           text-decoration:none;
        }
        .android-waitlist-button {
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
        .download-monet-button {
          position:absolute;
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
        
        .download-monet-button-inner {
          display:flex;
          align-items:center;

        }
        .guess-container {
          font-size: 32px;
          padding-bottom: 1.25rem;
          max-width: 380px;
          text-align:center;
          animation: 800ms fadeIn;
          font-weight: 600;
        }
        .guess {
          width: calc(100% - 5rem);

        }
        .clear-button {
          width: calc(100% - 20rem);
          margin-top: 1.25rem;
          height: 40px;
          border: 1px solid black;
          background-color: black;
          border-radius: 50px;
          color: #fff;
          font-weight: 800;
          position:absolute;
          bottom: 7.5rem;
          right: 2rem;
          display: flex;
          justify-content: center;
          align-items:center;
          cursor:pointer;
          min-width: 150px;
          max-width: 200px;
          z-index:1000000000000000;
        }
        .clear-button:hover {
          transform: scale(0.98);
        }
        .clear-button:active {
          transform: scale(0.9);
        }
        .scroll {
          position:absolute;
          left: -4rem;
          bottom: 2rem;
          z-index:10000;
          cursor: pointer;
          animation: 1600ms 0ms fadeIn;
        }
        .scroll:hover {
          transform: scale(1.01);
          /*filter: drop-shadow(0 4px 0.35rem #FFF500);*/
        }
        .pre-drawn-toggle {
          font-size: 0.8rem;
          text-decoration:underline;
          font-weight: 600;
          cursor: pointer;
          margin-top: 1.25rem;
          opacity: 0.6;
        }
        canvas {
          cursor: url("/brush.svg"),  default;
          max-width: 380px;
          opacity: 0.9;
          background-repeat: no-repeat;
          background-size: 500px 500px;
          background-size: 100% 100%;
          background-image:url('/canvas.svg');
          z-index:1000;
          width: 440px;
          height: 420px;
          filter: drop-shadow(0 4px 0.35rem rgba(0,0,0,0.4));
          animation: 800ms fadeIn;
        }
        .mobile-icons-grid {
            display: none;
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
          .mobile-icons-grid {
            
            padding: 0 20px;
            padding-top: 140px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .mobile-icon-row {
            width: 80%;
            display: flex;
            justify-content:center;
            padding: 0 10%;
            height: 20vh;
          }
          .mobile-icon {
            width: auto;
            height: 150px;
            padding: 0 15px;
          }
          .download-monet-button { 
            font-size: 14px;
            top: 2.25rem;

          }
          
          .canvas-container  {
            display:none;
          }
          .scroll {
            display:none;
          }
          .clear-button {
            display:none;
          }
        }

         @media only screen and (max-width: 375px) {
           .mobile-icon {
            width: auto;
            height: 130px;
          }
          
         }

         @media only screen and (max-width: 360px) {
           .monet-logo {
             top: 1.5rem;
           }
           .monet-logo > img {
             width:70px ;
            height:70px ;
          }
           .download-monet-button { 
            font-size: 12px;
            top: 2rem;

          }
          
          .mobile-icons-grid {
            
            padding: 0 10px;
            padding-top: 105px;
          }
          .mobile-icon-row {
            width: 100%;
            padding: 0;
            
          }
          
          .mobile-icon {
            width: auto;
            height: 120px;
          }
          .general-copyright {
            align-self:center;
            padding-top: 0.3125rem;
            font-size: 14px;
            text-align:center;
          }
         }
         @media only screen and (max-width: 360px) {
           .mobile-icon {
            width: auto;
            height: 110px;
          }
         }
         @media screen 
            and (device-width: 360px) 
            and (device-height: 640px) 
            and (-webkit-device-pixel-ratio: 2) {
              
          
          }
          @keyframes fadeIn {
         0% {opacity: 0; transform: translateY(80px);}
         100% {opacity: 1; transform: translateY(0);} 
        } 
        
      `}</style>
        </div>
  )
}

export default MobileIconsGrid;