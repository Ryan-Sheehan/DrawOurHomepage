import React, {useRef,useEffect} from 'react';
import iconStyles from "../styles/icon";
import {StickerOne, 
  StickerTwo, 
  StickerThree, 
  StickerFour, 
  StickerFive,
StickerSix} from './Stickers';
import {motion, useAnimation} from 'framer-motion';


const variants = {
  hidden: { opacity: 0},
  show: { opacity: 1, rotate: 0, transition:{type: 'spring'} }
}

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      pageWidth: -1,
      pageHeight: -1,
      progress: 0,
      hovered: false,
    }
    this.start = null;
    this.refIcon = React.createRef();

    this.colors = ['#ff0000','#1400FF','#FAFF00','#FF8A00','#1B8700']
    this.stickers = [StickerOne, StickerTwo, StickerThree, StickerFour, StickerFive, StickerSix]
    this.stickerIndex = Math.floor((Math.random() * this.stickers.length));
    this.colorIndex = this.props.index % this.colors.length;

    this.color = this.colors[this.colorIndex];
    this.sticker = this.stickers[this.stickerIndex];
    
  }
  componentDidMount() {
    
    this.setState({
      xPos:Math.floor((Math.random() * (window.innerWidth - 500)) + 250),
      yPos:Math.floor((Math.random() * (window.innerHeight - 500)) + 250),
      xVel:(Math.random()*3)+3,
      yVel:(Math.random()*3)+3,
    });

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.refIcon.current.addEventListener('touchmove', (e) => { e.preventDefault() }, { passive:false });
  
    
    this.animate();
  }
  componentWillUnmount() {
    this.refIcon.current.removeEventListener('touchmove', (e) => { e.preventDefault() }, { passive:false });
    window.removeEventListener('resize', this.updateWindowDimensions);
    cancelAnimationFrame(this.rafId);
  }
  animate() {
    let start = null;
    let step = timestamp => {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      this.setState({ progress });
      // if (progress > 10 * 1000) {
      //   return;
      // }

      if ((this.state.xPos >= (window.innerWidth - (200))) | (this.state.xPos <= 0)) {
        this.state.xVel *= -1;
      }
  
      if ((this.state.yPos >= (window.innerHeight - (200))) | (this.state.yPos <= 0)) {
        this.state.yVel *= -1;
      }
  
      this.setState({
        xPos: this.state.xPos + this.state.xVel,
        yPos: this.state.yPos + this.state.yVel,
      })   


      this.refIcon.current.style.top = this.state.yPos + 'px';
      this.refIcon.current.style.left = this.state.xPos + 'px';

      if (!this.state.hovered) this.rafId = requestAnimationFrame(step);
    };
    this.rafId = requestAnimationFrame(step);
  }
  updateWindowDimensions = () => {
    if ((this.state.xPos >= (window.innerWidth - (200))) || 
      (this.state.yPos >= (window.innerHeight - (200))))
    {
      this.setState({
      xPos: window.innerWidth - (400),
      yPos: window.innerHeight - (400)
      });
    }
    if (this.state.xPos <= 0 ||
      this.state.yPos <= 0) {
      this.setState({
      xPos: 400,
      yPos: 400
      });
    }
    this.setState({
      pageWidth: window.innerWidth,
      pageHeight: window.innerHeight
    });
      

  }
  move = () => {
    
      
  }

  setHovered = () => {
    this.setState({hovered:true})
    cancelAnimationFrame(this.rafId);
  }
  setNotHovered = () => {
    this.setState({hovered:false})
    this.animate()

  }
  render() {  
    const {name, src, link} = this.props;
  return (

    <a href={link} 
    onMouseEnter={this.setHovered}
    onMouseLeave={this.setNotHovered}
     ref={this.refIcon} className="icon">
    
    <motion.div variants={variants} initial="hidden" animate="show" className="">
    <img className="icon" draggable="false" src={src}/>
    <div className="icon-name">{name}</div>
    {/*this.sticker(name, "none", "bl")*/}
    </motion.div>
    <style jsx>{iconStyles}</style>
    </a>)
  }
}

export default Icon;