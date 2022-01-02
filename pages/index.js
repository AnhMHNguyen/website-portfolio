import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence } from "framer-motion";
import Introduction from '../components/introduction/introduction';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import CustomCursor from '../components/custom-cursor/custom-cursor';
import Sidebar from '../components/sidebar/sidebar';
import { rotateZVariants } from '../utils/animate';
import { Container, Main, SidebarWrapper, SidebarIcon, Circle, PageWrapper, SidebarText } from '../styles/Home.style';


const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};



export default function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const scrollRef = useRef();
  const router = useRouter();

  const [visibleSection, setVisibleSection] = useState(null);
  const aboutRef = useRef(null)
  const introductionRef = useRef(null)
  const contactRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)

  const sectionRefs = [
    { section: "Introduction", ref: introductionRef },
    { section: "Skills", ref: skillsRef },
    { section: "Projects", ref: projectsRef },
    { section: "About", ref: aboutRef },
    { section: "Contact", ref: contactRef }
  ];

  const openToggle = () => {
    setToggleSidebar(true)
  }

  const closeToggle = () => {
    setToggleSidebar(false)
  }

  useEffect(() => {
    let scrollEl;
    import("locomotive-scroll").then((LocomotiveScroll) => {
      scrollEl = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
      });
      scrollEl.on('scroll', (args) => handleScroll(args.scroll));
      if (router.query.section) {
        scrollEl.scrollTo(`#${router.query.section}`)
        closeToggle();
      }
    });

    return () => scrollEl.destroy();
  }, [router.query])


  const handleScroll = (scroll) => {
    const { height: introductionHeight } = getDimensions(introductionRef.current);
    const scrollPosition = scroll.y + introductionHeight;

    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });
    
    if (selected && selected.section != visibleSection) {
      setVisibleSection(selected.section);
    } else if (!selected && visibleSection) {
      setVisibleSection(null)
    }
  }
  
  return (
    <Container>
      <Head>
        <title>Kate Nguyen</title>
        <meta name="description" content="Kate Nguyen's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main id="main-container" ref={scrollRef} data-scroll-container>
        <CustomCursor/>
        <SidebarWrapper
          variants={rotateZVariants}
          whileHover='hover'
          whileTap='tap'
          onClick={openToggle}
        >
          <SidebarIcon/>
          <SidebarText >{ visibleSection ? visibleSection : 'Introduction' }</SidebarText>
        </SidebarWrapper>
        <PageWrapper >
          <Introduction ref={introductionRef} />
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <About ref={aboutRef} />
          <Contact ref={contactRef} />
        </PageWrapper>
      </Main>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        >
        {toggleSidebar && <Sidebar onClose={closeToggle}/>}
      </AnimatePresence>
    </Container>
  )
}
