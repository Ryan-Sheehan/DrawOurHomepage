import Head from "next/head";
import Link from "next/link";
import fontStyles from "../styles/fonts";
import {signature} from "../lib/signature";


export default function Layout(props) {
  return (
    <div>
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/monetlogo.svg"/>
      <title>Monet - Draw, Date, & Make Friends</title>
      <meta name="keywords" content="Monet, Drawing, Arts & Crafts, Dating, Supplies"/>
      <meta name="author" content="Ryan Sheehan"/>
      <meta property="og:title" content="Monet - Draw, Date, & Make Friends"/>
      <meta property="og:description" content="On Monet, send a drawing to start the conversation. Unlock your creative side, have fun, and meet new people. Available on the App Store now!"/>
      <meta property="og:image" content="/meta.png"/>
      <meta property="og:url" content="https://monet.world"/>
      <meta name="twitter:card" content="On Monet, send a drawing to start the conversation. Unlock your creative side, have fun, and meet new people. Available on the App Store now!"/>
      <meta property="og:site_name" content="Monet - Draw, Date, & Make Friends"/>
      <meta name="twitter:image:alt" content="Monet - Draw, Date, & Make Friends"/> 

      /* Apple touch icons */
      <link rel="apple-touch-icon" href="/touch-icons/apple-touch-icon-iphone-60x60.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/touch-icons/apple-touch-icon-ipad-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/touch-icons/apple-touch-icon-iphone-retina-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/touch-icons/apple-touch-icon-ipad-retina-152x152.png"/>

       <link
            rel="preload"
            href="/Manrope/static/Manrope-Medium.ttf"
            as="font"
            crossOrigin=""
          />
      <link
        rel="preload"
        href="/Manrope/static/Manrope-SemiBold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/Manrope/static/Manrope-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      
      <link
        rel="preload"
        href="/Manrope/static/Manrope-ExtraBold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Trattatello/Trattatello.ttf"
        as="font"
        crossOrigin=""
        />

      </Head>
      
     
      
      
      {props.children}
      <style jsx global>{fontStyles}</style>
      <style jsx global>{`

         
        body {
          margin: 0;
          font-family: 'Manrope', sans-serif;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color:#CBF69F;
          
          height: 100vh;
          overflow: hidden;
        }
        @media only screen and (max-width: 600px) {
          body {
          height: auto;
          overflow: scroll;
        }
        }
      `}</style>
      
    </div>
  );
}
