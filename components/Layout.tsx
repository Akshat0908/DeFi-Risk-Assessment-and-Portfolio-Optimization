import { Box } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      bg="brand.background"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Box as="main" flex="1" pt="60px"> {/* Added top padding here */}
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout