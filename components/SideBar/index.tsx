import Link from 'next/link'
import { FaTimes } from "react-icons/fa";
import styles from './Sidebar.module.css'

export const Sidebar: React.FC<{
    hideSideBar: () => void;
  }> = ({ hideSideBar }) => {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.sidebar_container}>
            <button className={styles.button} onClick={hideSideBar}>
              <FaTimes />
            </button>
            <ul>
            <Link href="/">
              <li className={styles.link} onClick={hideSideBar}>Home</li>
            </Link>
            <Link href="/about">
              <li className={styles.link}  onClick={hideSideBar}>About</li>
            </Link>
            </ul>
          </div>
        </div>
      </>
    );
  };
  