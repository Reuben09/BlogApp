import Link from 'next/link'
import { FiMenu } from "react-icons/fi";
import styles from './Navbar.module.css'

export const Navbar: React.FC<{
    showSideBar: () => void;
    showModal: (event : React.MouseEvent<HTMLButtonElement>) => void;
 }> = ({ showSideBar, showModal }) => {
   return (
     <>
     <div className={styles.container}>
         <div className={styles.navbarContainer}>
           <button className={styles.subscribeButton} onClick={showModal}>Subscribe</button>
           <button className={styles.menuButton} style={{color: "#1D3153"}} onClick={showSideBar}>
             <FiMenu />
           </button>
           <ul className="flex lg:flex hidden">
           <Link href="/">
             <li className='px-4 text-lg font-medium'>Home</li>
           </Link>
           <Link href="/about">
           <li className='px-4 text-lg font-medium'>About</li>
           </Link>
           </ul>
         </div>
         </div>
     </>
   );
 };