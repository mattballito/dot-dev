import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

//Components
import { YinYang } from "./AllSvgs";
import {PizzaPie} from "./AllSvgs";
import Intro from "./Intro";
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";


const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));

const LogoComponent = lazy(() => import("./../subComponents/LogoComponent"));

//   import SocialIcons from './../subComponents/SocialIcons';
// import LogoComponent from './../subComponents/LogoComponent';




const MainContainer = styled(motion.div)`
  background: transparent;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    background-color: transparent;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
  
`;

const rotate = keyframes`
from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: transparent;
  outline: none;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  & > *:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > *:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 0rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`;






const LinkTag = styled.a`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 2rem;
right: calc(0.5rem + 3vw);
text-decoration: none;
z-index: 1;

border-radius: 4px;
opacity: 0.9;

border-radius: 1px;
opacity: 0.8;
filter: alpha(opacity=20); 
background-color: transparent;
background-size:100%;
color: #651480;
text-align: center;
font-size: 15px;
padding: 5px;
width: 50px;
transition: all 0.5s;
cursor: pointer;
margin: 5px;

`;


const Contact = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  background-color: transparent;
  border-radius: 4px;
  opacity: 0.9;

  border-radius: 7px;
  background-color: transparent;
  color: #03c855;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  width: 80px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 8px;
  
`;




const RESUME = styled.a`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(0.5rem + 3vw);
  text-decoration: none;
  z-index: 1;

  border-radius: 4px;
  opacity: 0.9;

  border-radius: 1px;
  opacity: 0.8;
  filter: alpha(opacity=20); 
  background-color: transparent;
  background-size:100%;
  color: #651480;
  text-align: center;
  font-size: 15px;
  padding: 5px;
  width: 50px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  top:50%;
`;
const WORK = styled(NavLink)`
  color: #000000;
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
  
  
    
    border-radius: none;
    background-color: transparent;
    color: #03c855;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 80px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 8px;

  
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  z-index: 1;
  background-color: transparent;

  border-radius: 7px;
  background-color: transparent;
  color: #03c855;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  width: 80px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 8px;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  background-color: transparent;

  border-radius: 7px;
  background-color: transparent;
  color: #03c855;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  width: 80px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 8px;
`;




const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;


${(props) =>
  props.click
    ? mediaQueries(50)`
     height: 50%;
right:0;

width: 100%;
transition: width 0.5s ease, height 1s ease 0.5s;
`
    : mediaQueries(50)`
     height: 0;

width: 0;
`};

`;


const SpanStyle = styled.span`
  position: absolute;
  top: 49%;
  left: 37%;
  transform: "translate(-50%, -50%)";
  pointer-events: none;
  cursor: none;
  `;
  

const ButtonWrap = styled.span`
  position: center;
  background-color: transparent;
`;



/*
Music by <a href="/users/wataboi-12344345/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=1167">Wataboi</a> from <a href="https://pixabay.com/music/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=1167">Pixabay</a>
*/

const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");

  const handleClick = () => setClick(!click);

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;


  return (
    
    <Suspense fallback={<Loading />}>
      
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.6 }}
      >
        
        
        <DarkDiv click={click} />
        
        <Container>
          <LogoComponent theme={click ? "dark" : "light"} />
          <PowerButton />
          {mq ? (
            <SocialIcons theme="light" />
          ) : (
            <SocialIcons theme={click ? "dark" : "light"} />
          )}
          
          
          <Center click={click} className="pizzaEmblem">
            {mq ? (
              <PizzaPie
                onClick={() => handleClick()}
                width={click ? 80 : 150}
                height={click ? 80 : 150}
                fill="currentColor"
              />
            ) : (
              <>
              <PizzaPie
                onClick={() => handleClick()}
                width={click ? 120 : 200}
                height={click ? 120 : 200}
                fill="currentColor"
              />
                 <SpanStyle className="texting-container">
                    <div >Click Me</div>
                 </SpanStyle>
                  
              </> 
            )}
          </Center>
          
          

          {mq ? (
            <>
            </>
          ) : (
            <LinkTag
              click={+click}
              target="_blank"
              href={"mailto:mbutner@csu.fullerton.edu" }
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button class="button"><span >Contact Me</span> </button>
                
              </motion.h3>
            </LinkTag>
          )}

          
            <RESUME href="https://drive.google.com/file/d/1KZ-3nXz3RRVNytzIuykjHFEVub7YX9WK/view?usp=sharing" target="_blank">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/*<button class="button"><span >View Resume</span> </button>*/}
              </motion.h2>
            </RESUME>



          {mq ? (
            
            <>{/* for blog1*/}
            </>
              
          ) : (
            
            <>{/* for blog2*/}
            </>
            
          )}
    
          

          <BottomBar>
          
            
            
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
  
      </MainContainer>
      
    </Suspense>
  );
};

export default Main;


/*


<BLOG click={+click} onClick={() => setpath("blog")} to="/blog">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Blog
              </motion.h2>
            </BLOG>





            <BLOG click={+false} onClick={() => setpath("blog")} to="/blog">
              
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button class="button"><span>Blog</span> </button> 
              </motion.h2>
              
              
            </BLOG>














            <WORK click={+click} to="/work">
            <motion.h2
              onClick={() => setpath("work")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button class="button"><ButtonWrap>Work</ButtonWrap> </button>
              </motion.h2>
              </WORK>




              <ABOUT
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/about"
            >
              <motion.h2
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {<button class="button"><div className="aboutButton">About</div> </button> }
              </motion.h2>
            </ABOUT>




            <SKILLS to="/skills">
              <motion.h2
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button class="button"><span>My Skills</span> </button>
                </motion.h2>
                </SKILLS>
*/