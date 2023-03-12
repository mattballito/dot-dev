import { motion } from "framer-motion";
import { lazy, useEffect, useState } from "react";
import styled from "styled-components";
import OtherMe from "../assets/Images/bitmoji.png";
import { mediaQueries } from "./Themes";
import { NavLink } from "react-router-dom";


const SocialIconRow = lazy(() => import("./../subComponents/SocialIconRow"));




const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: transparent;
`;


const Box = styled(motion.div)`
/* width: 50vw;
height:50vh;
 */
  width: 55vw;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  ${mediaQueries(40)`
    width: 60vw;
    
  
  `};

  ${mediaQueries(30)`
    width: 70vw;
    
  
  `};
  ${mediaQueries(20)`
    width: 60vw;
    
  
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }

  //height:70vh;
`;




const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
.pic {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  height: auto;
}
${mediaQueries(50)`
    width: 100%;
  height: 50%;
    .pic {
  
  width: 70%;
  
}

`};

${mediaQueries(40)`

    .pic {
  
  width: 80%;
  
}

`};

${mediaQueries(30)`
   

    .pic {
  
  width: 90%;
  
}

`};
${mediaQueries(20)`
   

   .pic {
 
 width: 80%;
 
}

`};
`;


const WORK = styled(NavLink)`
  color: #ffffffd9;
  position: relative;
  
  
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
  background-color: transparent;
`;
const ABOUT = styled(NavLink)`
  color: white;
  text-decoration: none;
  z-index: 1;
  background-color: transparent;
  position:relative;
`;
const SKILLS = styled(NavLink)`
  color: white;
  text-decoration: none;
  background-color: transparent;
  position: relative;
`;

const Contact = styled(NavLink)`
  color: white;
  position: relative;
  text-decoration: none;
  z-index: 1;
  background-color: transparent;
`;
const BLOG = styled(NavLink)`
  color: white;
  position: relative;
  
  
  
  z-index: 1;

  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
  background-color: transparent;
`;

const Text = styled(motion.div)`
font-size: calc(0.7rem + 0.8vw);
color: ${(props) => props.theme.body};
padding: 0.9rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;

& > *:last-child {
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};

  font-size: calc(0.5rem + 1.5vw);
  font-weight: 300;

  ${mediaQueries(40)`
      font-size: calc(0.5rem + 1vw);


`};
}

${mediaQueries(40)`
      font-size: calc(0.5rem + 0.8vw);


`};
${mediaQueries(20)`
       padding: 0.5rem;
       font-size: calc(0.7rem + 0.8vw);


`};

`;

const NoClickText = styled(motion.div)`
font-size: calc(0.7rem + 0.8vw);
color: ${(props) => props.theme.body};
padding: 0.9rem;
cursor: none;

display: flex;
flex-direction: column;
justify-content: center;

& > *:last-child {
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};

  font-size: calc(0.5rem + 1.5vw);
  font-weight: 300;

  ${mediaQueries(40)`
      font-size: calc(0.5rem + 1vw);


`};
}

${mediaQueries(40)`
      font-size: calc(0.5rem + 0.8vw);


`};
${mediaQueries(20)`
       padding: 1rem;



`};
`;

const myBitmoji = styled.img`
  src={OtherMe}; 
  alt="My Pic";
  padding:0.9rem;
`;






const Intro = () => {
  /* console.log(mq); */


  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");


  const handleClick = () => setClick(!click);

  const [height, setHeight] = useState("55vh");


  

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("50vh");
    }
  }, []);
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
      className="MainBox"
      >
      <SubBox
        style={{paddingLeft: '20px'}}
      >
        <Text>
        <center align="center" margin-bottom="30px">
        <motion.h2
                  
                  initial={{
                    y: -80,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  
                  
                    <NoClickText >
                      <>
                      Hi,
                      I'm Matt.
                      I'm a Software Engineer based in Anaheim, CA. Check out my work!
                      </>
                    </NoClickText >
                      

                    
                  

                  

                  
                  
                </motion.h2>
                </center>

          
          <div className="selection-list">

          <Text>
          <ul class="mainMenu">
            
            <li>
              
              <ABOUT
                onClick={() => setClick(false)}
                click={mq ? +false : +click}
                to="/about"
              >
                <motion.h2
                  onClick={() => setpath("about")}
                  initial={{
                    y: -50,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  About Me
                </motion.h2>
              </ABOUT>
                  
            
      
            </li>
            <li>
              
              <WORK click={+click} to="/work">
              <motion.h2
                onClick={() => setpath("work")}
                initial={{
                  y: -50,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Projects
              </motion.h2>
              </WORK>
                  
            
      
            </li>
            <li>
              
            <SKILLS to="/skills">
              <motion.h2
                onClick={() => setpath("skills")}
                initial={{
                  y: -10,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Experience
              </motion.h2>
            </SKILLS>
                  
            
      
            </li>
            <li>
              
            <BLOG click={+click} onClick={() => setpath("blog")} to="/blog">
              <motion.h2
                initial={{
                  y: 50,
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
                  
            
      
            </li>
            
            
            
            </ul>
            </Text>
          </div>
        </Text>
          
          
          

          
          
        
          
          {/*<SocialIconRow theme="dark" />*/}
          
        </SubBox>
      

      
        
      
        
      
      
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={OtherMe} alt="My Pic" >  
          </img>
        </motion.div>
      </SubBox>
    </Box>
    
  );
};

export default Intro;
