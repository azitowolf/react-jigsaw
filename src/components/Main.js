// This is the main application layout file. Add components from the components folder to create a custom interface.
// if you need to customize styles, each component has a corresponding style folder。

// This file also hosts a mock datafile, built in JSON, to simulate the app receiving data from a CDN.
// To modify copy, edit the jsonSource object.

// COMPONENTS
// Slider
// import Slider from './SliderComponent';
// <Slider isMobile={isMobile} problemsJson={jsonSource} />

// Footer
// import Footer from './FooterComponent';
// <Footer isMobile={isMobile} problemsJson={jsonSource}/>

require('normalize.css');
require('../styles/App.scss');
require('zenscroll');

import React from 'react';
import HeroComponent from './HeroComponent';

import NavComponent from './NavComponent';
import PrimaryContentSection from './PrimaryContentSection';
import Footer from './FooterComponent';
import Overlay from './OverlayComponent';
import Slider from './SliderComponent';

var jsonSource = {
  header: "React Jigsaw",
  subheader: "A template for building front end interfaces with react",
  callToActionButtonText: "Download",
  problemList: [
    {
      problemStatement: "How could we create flexible software models that allow us to adapt quickly to the ever-changing worlds of education and travel?",
      problemNumber: "56"
    },
    {
      problemStatement: "How could we use technology to motivate a sixteen year old to look up from their phone at the world in front of them?",
      problemNumber: "443"
    },
    {
      problemStatement: "How could we predict the future — and project the cost of thousands of flights, hotels, meals and attractions years in advance?",
      problemNumber: "255"
    },
    {
      problemStatement: "How could we design an algorithm to suggest itinerary choices that minimize daily travel time between stops, without sacrificing cost?",
      problemNumber: "8"
    },
    {
      problemStatement: "How could we help a teacher narrow down 7 continents worth of choices to just one tour—without cognitive overload?",
      problemNumber: "404"
    },
    {
      problemStatement: "How could we build a system to accurately manage bookings for over 10,000 vendors, in more than 20 different languages?",
      problemNumber: "80"
    },
     {
      problemStatement: "How could we write code to ensure thousands of restaurants in more than 40 countries each serve a traveler with dietary needs the right meal?",
      problemNumber: "95"
    },
    {
      problemStatement: "How could we design composite systems that elegantly respond to failure in one of the smaller systems that they consume?",
      problemNumber: "10"
    },
    {
      problemStatement: "How could we design matching logic that ensures groups with different areas of study have an equally educational experience on a single itinerary?",
      problemNumber: "486"
    },
    {
      problemStatement: "How could we make it easy to automate complex full-stack, multi-platform deployments on a small team?",
      problemNumber: "1028"
    }
  ],
  hardProblems: {
    title: "Super Light",
    text: "Every problem is unique (like snowflakes). And while we use frameworks like React.js and .NET MVC to solve many of them, we believe in being flexible and using the right tools or frameworks that best fit each problem.</br></br> We also believe in long-term thinking and short-term goals, and testing our assumptions along the way. We care about avoiding and eliminating tech debt.  And evolving to complexity through iteration."
  },
  people: {
    title: "Small but mighty teams",
    text: "Bigger is not always better (except when it comes to sandwiches). That’s why we use just four- to eight-person teams of developers, UX designers, business analysts, and product owners to turn complex problems into elegant solutions. </br></br> To bring those solutions to life we look for people who are freakishly talented, while still being someone you could grab a beer or apple juice with. And in return:",
    subBlocks: [
      {
        title: "Our people give a ",
        text: "Work with people who care. About the latest episode of <i>Game of Thrones</i>. About global warming. And most importantly, about helping people discover the world through technology and UX."
      },
      {
        title: "Career growth is real",
        text: "Business analysts have become developers, and developers have transferred to offices across the globe. And whether you want to move to another country, a different department, or simply out of your comfort zone—you can."
      },
      {
        title: "Autonomous teams",
        text: "You’ll work in cross-functional, co-located, and self-organized teams that focus on customer problems rather than systems or technical disciplines."
      }
    ]
  },
  mission: {
    title: "A mission to connect the world",
    text: "Technology is revolutionizing how and where we learn. If making an impact, traveling the globe, and opening the world through education sound good to you, then you’re the type of person we’re looking for. If not, we’re sure you’re still a good person. You might be happier elsewhere though."
  },
  pictureCaptions: [
    {
      text: "",
      hasTitle: false,
      hasText: true
    },
    {
      title: "Alex Zito-Wolf, Front-end Developer",
      text: "&quot;EF's mission is to create global citizens, and the work culture perfectly embodies that. I’ve been given the opportunity to transfer to Shanghai ... I'm writing this from the office in Jiao’Tong!&quot; </br></br> <span class='suzie'>Alex Zito Wolf</span>",
      hasTitle: true,
      hasText: true
    },
    {
      hasTitle: false,
      hasText: false
    },
    {
      title: "A space to call your own",
      text: "Aside from the travel perks, working in the Boston EF office comes with an open floor plan, a bar in the lobby, and a 360-degree view of the city."
    },
    {
      title: "Gretchen Carey, UX Researcher",
      text: "&quot;Knowing I could move departments to better harness my strengths was super empowering and has helped me grow professionally and personally.&quot; <span class='suzie gretchen'>Gretchen Carey</span>"
    },
    {
      hasTitle: false,
      hasText: false
    },
    {
      hasTitle: false,
      hasText: false
    }
  ],
  perkCaptions:{
    passport: "International travel is more than a perk. It’s part of the job.",
    calculator: "25% company match on your 401k",
    shoes: "Complimentary gym, showers, and locker room",
    camera: "3 weeks paid vacation your first year",
    flashcards: "Onsite language classes",
    sportsTickets: "Discounted tickets to basketball and hockey games",
    bowTie: "No dress code (but please wear something)"
  },
  footer: {
    title: "Join our team",
    text: "From UX designers to developers, we're always on the lookout for talented people with all levels of experience.",
    copyright: "&copy; azitowolf <br/> http://alexzitowolf.com",
    categories: [
      {
        title: "View UX Jobs",
        text: "Create holistic user-centric design",
        link: "http://alexzitowolf.com"
      },
      {
        title: "View Tech Jobs",
        text: "Write clean sustainable code",
        link: "http://alexzitowolf.com"
      },
      {
        title: "View Product Jobs",
        text: "Implement insightful product management",
        link: "http://alexzitowolf.com"
      }
    ]
  }
}

class AppComponent extends React.Component {
  constructor(props){
    super(props)
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.state = {
      overlayActive: false
    };

  }
  toggleOverlay(text){
    this.setState({
      overlayActive: this.state.overlayActive ? false:true,
      text: text
    });
  }
  render() {
    var screenWidth = window.innerWidth;
    var isMobile = screenWidth > 480 ? false : true;
    var overlay = this.state.overlayActive ?
      <Overlay overlayText={this.state.text} isMobile={isMobile} toggleOverlay={this.toggleOverlay} /> : '';

    return (
      <div className="app-wrapper">
        {overlay}
        
        <HeroComponent isMobile={isMobile} problemsJson={jsonSource}/>


        <div className="app-content-wrapper">
          <Slider problemsJson={jsonSource} />
          <PrimaryContentSection isMobile={isMobile} problemsJson={jsonSource} toggleOverlay={this.toggleOverlay} />
        </div>
        <Footer isMobile={isMobile} problemsJson={jsonSource}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
