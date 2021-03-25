// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
  <video playsInline autoPlay muted loop id="myVideo">
  <source src="/bob.webm" type="video/webm"/>
</video>
<div className="content">
    <div className="fourohfour">404</div>
    <Link href="/">
      <a className="linkBack" >
        ← Go back to the homescreen
      </a>
    </Link>
    </div>
    <style jsx>{`
    	#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.fourohfour {
	font-size: 10rem;
	color: #fff;
	font-family: CooperNouveau;
}
.linkBack {
color: #fff;

font-family:Hobeaux;

}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
    	`}</style>
  </>
}