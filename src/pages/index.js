import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import sanity from "../lib/sanity";


import dynamic from 'next/dynamic';
const Icon = dynamic(() => import("../components/Icon"), { ssr: false });

import imageUrlFor from "../utils/imageUrlFor";
import {paper, Tool, Path} from 'paper'
import Image from 'next/image'
import _ from 'lodash';
import {motion} from 'framer-motion';


import PostItModule from '../components/PostItModule';
import Waitlist from '../components/Waitlist';
import LinkMenu from '../components/LinkMenu';
import Checklist from '../components/Checklist';
import MonetInfo from '../components/MonetInfo';
import DownloadButton from '../components/DownloadButton';
import GeneralInfo from '../components/GeneralInfo';
import MobileIconGrid from '../components/MobileIconsGrid';
import MonetCanvas from '../components/MonetCanvas';
import AndroidWaitlistButton from '../components/AndroidWaitlistButton';
import MonetLogo from '../components/MonetLogo';

const query = `*[_type == "icon"] {
  _id,
  name,
  link,
  keywords,
}[0...50]
`;


class Drawing extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      pageWidth: -1,
      pageHeight: -1,
      canvasWidth:800,
      canvasHeight: 500,
      penColor:'#000',
      scores:[],
      ink: [[],[],[]],
      yellowPostitOpen:false,
      bluePostitOpen:false,
      redPostitOpen:true,
      greenPostitOpen:true,
      lastClickedPostIt: "green",
      discoveredIcons:[]
    }
    
    this.ink;
    this.scores;
    this.timer = 0;
    this.lastTimestamp = 0;
    this.lastTimestamp_check = 0;
    this.idx_guess = 0;
    this.discoveredIcons = [];

    this.keywords = [];
    this.discoveredKeywords = [];

  }
  componentDidMount() {

    paper.install(window);


    this.initInk(); 
    this.paper2 = new paper.PaperScope();
    this.paper2.setup(document.getElementById('canvas2'));
    this.paper2.activate();
    var tool = new Tool();  // Inititalize Paper Tool
    tool.onMouseDown = this.paperMouseDown;
    tool.onMouseDrag = this.paperMouseDrag;
    tool.onMouseUp = this.paperMouseUp;
    this.initDictionary();
     
  }
  componentWillUnmount() {
    
  }


  initDictionary = () => {
    this.props.icons.forEach((icon) => {
      icon.keywords.forEach((keyword) => {
        this.keywords.push(keyword)
      });
    });


    
  }

  initInk = () => {

    this.ink = [[],[],[]];
  }
  paperMouseUp = (event) => {

  }
  paperMouseDown = (event) => {
    // New Paper Path and Settings
    this.path = new this.paper2.Path();    

    //console.log(this.state.penColor)      
    this.path.strokeColor = this.state.penColor; 
    this.path.strokeWidth = 8;

    // Get Time [ms] for each Guess (needed for accurate Google AI Guessing)
    var thisTimestamp = event.event.timeStamp;
    if(this.timer === 0){
      this.timer = 1; 
      var time = 0;
    }else{
      var timeDelta = thisTimestamp - this.lastTimestamp;
      var time = this.ink[2][this.ink[2].length-1] + timeDelta;
    }
    
    // Get XY point from event w/ time [ms] to update Ink Array
    this.updateInk(event.point, time);
    
    // Draw XY point to Paper Path
    this.path.add(event.point);
    this.path.smooth();
    this.path.simplify();

    
    // Reset Timestamps
    this.lastTimestamp = thisTimestamp;
  }
  



  // Paper Tool Mouse Drag Event
  paperMouseDrag = (event) => {
    // Get Event Timestamp and Timestamp Delta
    var thisTimestamp = event.event.timeStamp ;
    var timeDelta = thisTimestamp - this.lastTimestamp;
    // Get new Time for Ink Array
    var time = this.ink[2][this.ink[2].length-1] + timeDelta;
    
    // Get XY point from event w/ time [ms] to update Ink Array
    this.updateInk(event.point, time);
    //console.log(event.point)
    // Draw XY point to Paper Path
    this.path.add(event.point);
    
    //console.log(this.path)
    
    //this.setState({ink:this.ink})

    // console.log(event.point)
    
    // Reset Timestamps
    this.lastTimestamp = thisTimestamp;



    // Check Google AI Quickdraw every 250 m/s 
    if(thisTimestamp - this.lastTimestamp_check > 250){

        
        this.checkQuickDraw();


      this.lastTimestamp_check = thisTimestamp;
    }
  }
  getCanvasDimensions = () => {
    var w = document.getElementById('canvas2').offsetWidth;
    var h = document.getElementById('canvas2').offsetHeight;
    this.setState({canvasHeight: h, canvasWidth: w}) 
  }
  


  updateInk = (point, time) => {
    this.ink[0].push(point.x);
    this.ink[1].push(point.y);
    this.ink[2].push(time);
  }
  checkQuickDraw = () => {


    // Get Paper Canvas Weight/Height
    this.getCanvasDimensions();
  
    // Set Base URL for Quickdraw Google AI API
    var url = 'https://inputtools.google.com/request?ime=handwriting&app=quickdraw&dbg=1&cs=1&oe=UTF-8'
    
    // Set HTTP Headers
    var headers = {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    };
  
    // Init HTTP Request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    Object.keys(headers).forEach(function(key,index) {
        xhr.setRequestHeader(key, headers[key]); 
    });
  
    // HTTP Request On Load
    xhr.onload = () => {
      if (xhr.status === 200) {
        let res = xhr.responseText; // HTTP Response Text
        this.parseResponse(res);     // Parse Response
        this.idx_guess += 1;         // Iterate Guess Index
      }
      else if (xhr.status !== 200) {
        console.log('Request failed.  Returned status of ' + xhr.status);
      }
    };
  
    // Create New Data Payload for Quickdraw Google AI API
    var data = {
      "input_type":0,
      "requests":[
        {
          "language":"quickdraw",
          "writing_guide":{"width": this.state.canvasWidth, "height":this.state.canvasHeight},
          "ink": [this.ink]
        }
      ]
    };
  
    // Convert Data Payload to JSON String
    var request_data = JSON.stringify(data);
  
    // Send HTTP Request w/ Data Payload
    xhr.send(request_data);
  
  }

  clearDrawing = () => {
   
    // Remove Paper Path Layer
    this.paper2.project.activeLayer.removeChildren();
    this.paper2.view.draw();
  
    // Init Ink Array
    this.initInk();
    
    // Resert Variables
    this.timer = 0;
    this.idx_guess = 0;
    this.setState({
     
      scores:[]
    })
  

  
  }

  parseResponse = (res) => {
    // Convert Response String to JSON
    var res_j = JSON.parse(res);
    // Extract Guess Score String from Response and Convert to JSON
    this.scores = JSON.parse(res_j[1][0][3].debug_info.match(/SCORESINKS: (.+) Combiner:/)[1]);
    const topGuesses = this.scores.map((guess) => {return guess[0]}).slice(0,2);

    let relevantGuess = ""

    this.discoveredKeywords=[];
    var BreakException = {};
    try {
    topGuesses.forEach((guess) => {
      if (this.keywords.includes(guess) ) {
        relevantGuess = guess;
        if (!this.discoveredKeywords.includes(guess)) {
          this.discoveredKeywords.push(guess)
        }
        
        throw BreakException;
      }
    });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
    

    
    this.props.icons.forEach((icon) => {

      const isDiscovered = icon.keywords.some(r=> this.discoveredKeywords.includes(r))

      
      if (isDiscovered) {
        const iconPos = this.discoveredIcons.findIndex(p => p.name == icon.name)

        var canvas = document.getElementById("canvas2");
        var img    = canvas.toDataURL("image/png");
        if (iconPos !== -1) {
          this.discoveredIcons[iconPos] = {...icon, src:img}
        }
        else {
          this.discoveredIcons.push({...icon, src:img})
        }
        

        
        
      }
    })

    this.setState({
      discoveredIcons: this.discoveredIcons,
      scores:this.scores
    })

  
  }
  openYellowPostit = () => {
    this.setState({yellowPostitOpen:true});
  }
  closeYellowPostit = () => {
    this.setState({yellowPostitOpen:false});
  }
  openBluePostit = () => {
    this.setState({bluePostitOpen:true});
  }
  closeBluePostit = () => {
    this.setState({bluePostitOpen:false});
  }
  openRedPostit = () => {
    this.setState({redPostitOpen:true});
  }
  closeRedPostit = () => {
    this.setState({redPostitOpen:false});
  }
  openGreenPostit = () => {
    this.setState({greenPostitOpen:true});
  }
  closeGreenPostit = () => {
    this.setState({greenPostitOpen:false});
  }

  setColor = (color) => {
    
    this.setState({penColor:color})
  }
  paintBrushActive = () => {
    console.log('enter')
  }
  paintBrushInactive = () => {
    console.log('leave')
  }

  moved = (color) => {

    this.setState({lastClickedPostIt:color})
  }

  makeIcon = () => {
    
    

  }

  


  render() {
  return (
    <Layout>
      <MonetLogo openPostit={this.openGreenPostit}/>
      <AndroidWaitlistButton open={this.state.redPostitOpen} openPostit={this.openRedPostit}/>
      <DownloadButton/>
      <MonetCanvas 
        scores={this.state.scores} 
        openGuide={this.openYellowPostit} 
        openLinks={this.openBluePostit}
        penColor={this.state.penColor}
        setColor={this.setColor}
        clearDrawing={this.clearDrawing}
        />


       


   
        

        


        
        
        <PostItModule 
        color={"red"}
        moved={this.moved}
        active={this.state.lastClickedPostIt === "red"}
        open={this.state.redPostitOpen} 
        close={this.closeRedPostit}
        top={12} 
        left={5} 
        width={360} 
        >
        <Waitlist/>
        </PostItModule>

        <PostItModule 
        color={"green"}
        moved={this.moved}
        active={this.state.lastClickedPostIt === "green"} 
        open={this.state.greenPostitOpen} 
        close={this.closeGreenPostit}
        top={16} 
        left={20} 
        width={359} 
        >
        <MonetInfo/>
        </PostItModule>
        
        <PostItModule 
        color={"blue"}
        moved={this.moved}
        active={this.state.lastClickedPostIt === "blue"} 
        open={this.state.bluePostitOpen} 
        close={this.closeBluePostit}
        
        
        top={10} 
        left={20} 
        width={286}>
        <LinkMenu/>
        </PostItModule>

        <PostItModule 
        color={"yellow"}
        moved={this.moved}
        active={this.state.lastClickedPostIt === "yellow"} 
        open={this.state.yellowPostitOpen} 
        close={this.closeYellowPostit}
        
        
        top={10} 
        left={20} 
        width={270}>
        <Checklist found={this.state.discoveredIcons}/>
        </PostItModule>





        {this.state.discoveredIcons.map((icon,i) => {return <Icon src={icon.src} name={icon.name} link={icon.link} key={i} index={i}/>})}
     
      


        <MobileIconGrid/>
        <GeneralInfo/>

    </Layout>
  );
}
};

export const getStaticProps = async () => {
  const icons = await sanity.fetch(query);
  return {
    props: { icons } // will be passed to the page component as props
  };
};

export default Drawing;