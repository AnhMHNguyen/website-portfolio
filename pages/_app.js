import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../styles/theme.config';
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          x: '-100vw'
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9]
          }
        },
      }}
      >  
      <Component {...pageProps} />
    </motion.div>
    </ThemeProvider>
  )
}

export default MyApp
