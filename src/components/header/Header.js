import { Container, Flex, Button } from "theme-ui";
import { Keyframes } from "framer-motion";
import { Link } from "react-scroll";
import Logo from 'components/Logo';
import LogoDark from 'assets/logo.png';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

const Header = ({className}) => {
  return (
    <header sx={styles.header} className={className}>
      Header
      </header>
  )
}

export default Header