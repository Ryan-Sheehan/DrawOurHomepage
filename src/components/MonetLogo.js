


const MonetLogo = (props) => {
  
  return (
   
    <div className="monet-logo" onClick={props.openPostit}>
        <img src={"https://monetworld2.web.app/monetlogo.svg"} alt="Monet logo"/>
    <style jsx>{`

        .monet-logo {
          position:absolute;
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
           width:90px ;
            height:90px ;
        }

        @media only screen and (max-width: 600px) {
           .monet-logo {
             position:fixed;
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
 
         }
         
        
      `}</style>
    </div>
  )
}

export default MonetLogo;