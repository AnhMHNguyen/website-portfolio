import { useRef, useEffect } from "react";
import { CursorWrapper, Cursor, CursorSec } from "./custom-cursor.style";
import { motion, useViewportScroll, useTransform, useSpring, useMotionValue } from "framer-motion"

const CustomCursor = () => {
  // const y = useMotionValue(pos);
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  });

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${mouseX -
        mainCursor.current.clientWidth / 2}px, ${mouseY -
        mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);
  
  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor && secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px,${destinationY}px, 0)`;
      }
    };
    followMouse();
  }, [])
  // console.log({scrollYProgress})
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  return (
    <CursorWrapper>
      <Cursor ref={ mainCursor } />
      <CursorSec ref={secondaryCursor}>
        <svg viewBox="0 0 50 50" width="60" height="60">
          <motion.path
            fill="none"
            strokeWidth="3"
            stroke="white"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1 // Reverse direction of line animation
            }}
          />
        </svg>
      </CursorSec>
    </CursorWrapper>
  )
}

export default CustomCursor;