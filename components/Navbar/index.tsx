import { Row, Button } from '@components'
import { Nav, Toggle, FirstNav} from './styled'
import Link from 'next/link'
import { FiMenu } from "react-icons/fi";
export const Navbar: React.FC<{
    showSideBar: () => void;
    showModal: (event : React.MouseEvent<HTMLButtonElement>) => void;
 }> = ({ showSideBar, showModal }) => {
   return (
     <>
     <Row height="6.125rem" justify="center" align="center">
         <Nav height="100%" padding="0 4rem" width="100%" justify="space-between">
           <Button onClick={showModal}>Subscribe</Button>
           <Toggle onClick={showSideBar}>
             <FiMenu />
           </Toggle>
           <FirstNav>
           <Link href="/">
             <li>Home</li>
           </Link>
           <Link href="/about">
           <li>About</li>
           </Link>
           </FirstNav>
         </Nav>
         </Row>
     </>
   );
 };