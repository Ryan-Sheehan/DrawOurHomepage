import React, {useEffect, useState} from 'react';
import Link from 'next/link'

const GeneralInfo = () => {
  
  return (
   <div className="general-info-container">
        <div className="general-links">
        <Link href="/terms">
        <a className="general-link">Terms</a>
        </Link>
        <Link href="/privacy">
        <a className="general-link">Privacy</a>
        </Link>
        <Link href="/communityguidelines">
        <a className="general-link">Community Guidelines</a>
        </Link>
        
        <a className="general-link" href="mailto:info@monet.world">Contact Us</a>
        </div>
        <div className="general-copyright">© 2021 Monet | All Rights Reserved</div>
        <style jsx>{`
        .break-word {
          width: auto;
        }
        .general-info-container {
          position:absolute;
          left: 2rem;
          bottom: 2rem;

          display: flex;
          flex-direction:column;
        }
        .general-links {
          display: flex;
          justify-content:space-between;
          font-size: 18px;
          font-weight: 600;
          z-index:100;
          flex-wrap:wrap;

        }
        .general-link {
          color: black;
          text-decoration: none;
          cursor:pointer;
          margin-right: 1.25rem;
          
        }
        .general-link:hover {
          text-decoration:underline;
        }
        .general-copyright {
          opacity: 0.6;
          font-size:16px;
          font-weight: 600;
          z-index:100;
        }
       

        @media only screen and (max-width: 768px) { 

        }
        @media only screen and (max-width: 600px) {
          .break-word {
          width: 100px;
        }

          .general-info-container {
            position:relative;
            width: 100%;
            left: auto;
            bottom: auto;
            margin: 2.5rem 0;

            display: flex;
            
            flex-direction:column;
            align-items: center;
            justify-content: center;
          }
          .general-links {
            padding: 0 15%;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 1.25rem;
            flex-direction:column;
            justify-content: space-between;
            align-items: space-between;
            text-align:center;
  
          }
          .general-link {
            margin: 0.625rem;

          }
          .general-copyright {
            align-self:center;
            font-size: 14px;
          }
          
        }

         @media only screen and (max-width: 375px) {
           
          .general-copyright {
            text-align:center;
          }
         }

         @media only screen and (max-width: 360px) {
           
          
          .general-info-container {
            left: 2rem;
            right: 2rem;

          }
          .general-links {
            
            font-size: 16px;
            padding: 0 1rem ;
            
  
          }
          
          .general-copyright {
            align-self:center;
            padding-top: 0.3125rem;
            font-size: 14px;
            text-align:center;
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

export default GeneralInfo;