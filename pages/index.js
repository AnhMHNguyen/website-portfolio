import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Introduction from '../components/introduction/introduction';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Sidebar from '../components/sidebar/sidebar';
import { rotateZVariants } from '../utils/animate';
import { Events } from 'react-scroll';
import useWindowSize from '../utils/useWindowSize';
import { Container, Main, SidebarWrapper, SidebarIcon, Circle, PageWrapper, SidebarText } from '../styles/Home.style';

const data = {
  ease: 0.1,
  current: 0,
  previous: 0,
  rounded: 0
};

export default function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const scrollRef = useRef();
  const [visibleSection, setVisibleSection] = useState(null);

  const size = useWindowSize();

  const openToggle = () => {
    setToggleSidebar(true)
  }

  const closeToggle = () => {
    setToggleSidebar(false)
  }

  useEffect(() => {
    const skewScrolling = () => {
      //Set Current to the scroll position amount
      data.current = window.scrollY;
      // Set Previous to the scroll previous position
      data.previous += (data.current - data.previous) * data.ease;
      // Set rounded to
      data.rounded = Math.round(data.previous * 100) / 100;

      // Difference between
      const difference = data.current - data.rounded;
      const acceleration = difference / size.width;
      const velocity = +acceleration;
      const skew = velocity * 7.5;

      //Assign skew and smooth scrolling to the scroll container
      scrollRef.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
      
      //loop vai raf
      requestAnimationFrame(() => skewScrolling());
    }
    requestAnimationFrame(() => skewScrolling());
  }, [size.width, data]);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      setBodyHeight();
    }
  }, [size.height])
  
  const setBodyHeight = () => {
    document.body.style.height = `${scrollRef.current.getBoundingClientRect().height}px`;
  }

  useEffect(() => {
    Events.scrollEvent.register("end", function () {
      setToggleSidebar(false)
    })
    return () => {
      Events.scrollEvent.remove("end");
    }
  },[])
  
  return (
    <>
      <Container>
        <Head>
          <title>Kate Nguyen</title>
          <meta name="description" content="Kate Nguyen's website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main id="main-container"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" }
          }}
        >
            <SidebarWrapper
              onClick={openToggle}
            >
              <SidebarIcon/>
              <SidebarText >{ visibleSection ? visibleSection : 'Introduction' }</SidebarText>
            </SidebarWrapper>
            <PageWrapper ref={scrollRef}>
            <Introduction setVisibleSection={setVisibleSection}/>
              <Skills setVisibleSection={setVisibleSection}/>
              <Projects setVisibleSection={setVisibleSection}/>
              <About setVisibleSection={setVisibleSection}/>
              <Contact setVisibleSection={setVisibleSection}/>
            </PageWrapper>
        </Main>
      </Container>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        >
        {toggleSidebar && <Sidebar onClose={closeToggle}/>}
      </AnimatePresence>
    </>
  )
}
