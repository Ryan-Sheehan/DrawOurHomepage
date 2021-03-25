import Link from 'next/link';

const GalleryFooter = () => {
	return(
	<div className="footer">
      
      <Link href="/">
      <a className="footer-link" href="https://www.monet.world/">About</a>
      </Link>
      <Link href="/terms">
        <a className="footer-link">Terms</a>
        </Link>
        <Link href="/privacy">
        <a className="footer-link">Privacy</a>
        </Link>
        <Link href="/communityguidelines">
        <a className="footer-link">Community Guidelines</a>
        </Link>
      <a
        className="footer-link"
        href="https://apps.apple.com/us/app/monet-draw-for-dates-friends/id1535020150"
        >Download
      </a>
      <div className="footer-copyright">© 2021 Monet | All Rights Reserved</div>
     <style jsx>{`
     .footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  background-color: #262626;
  font-family: "Manrope", sans-serif;
  padding: 1.25rem 0;



}

.footer-copyright {
	opacity: 0.6;
  font-size: 0.8rem;
  font-weight: 500;
  color: #ffffff;
  margin-top: 1rem;
}

.footer-link {
  font-size: 1.1rem;
  font-weight: 400;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 0.625rem;
}
.footer-link:hover {
	text-decoration:underline;
}


     `}</style>
    </div>
    )
}

export default GalleryFooter;