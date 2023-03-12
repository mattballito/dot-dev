


import { Switch, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import Loading from "./subComponents/Loading";
import videoSrc from './calamigos-cut.mp4'
import styled from "styled-components";


//Components
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));





/*
const VideoContainer = () => 
{
  return (
    <div className="main">
      <video src={videoSrc} autoPlay loop />
    </div>
  )
}
*/



function App() {
  const location = useLocation();

  return (

<div className="bigMain">
  <video
    autoPlay
    loop
    muted
    style={
      {position:"absolute",
       width:"100%",
       left:"50%",
      top:"50%",
    height:"100%",
  objectFit:"cover",
transform:"translate(-50%,-50%)",
zIndex:"-1" }
    } className="video-bg"
    playsinline 
    poster="https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg">
  
      <source src={videoSrc} type ="video/mp4"/>
    </video>
  
    
      <>
  
      <GlobalStyle />
      
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
        
          <SoundBar />
          
          
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
            
              <Route exact path="/" component={Main} />

              <Route exact path="/about" component={AboutPage} />

              <Route exact path="/blog" component={BlogPage} />

              <Route exact path="/work" component={WorkPage} />

              <Route exact path="/skills" component={MySkillsPage} />
            </Switch>
          </AnimatePresence>
          
        </Suspense>
      </ThemeProvider>
      
      </>
  </div>
  
  );
}

export default App;





