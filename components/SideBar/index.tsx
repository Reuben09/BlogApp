import { SideBarContainer, SideBar, Cancel} from './styled'
import Link from 'next/link'
import { FaTimes } from "react-icons/fa";

export const Sidebar: React.FC<{
    hideSideBar: () => void;
  }> = ({ hideSideBar }) => {
    return (
      <>
        <SideBarContainer>
          <SideBar>
            <Cancel onClick={hideSideBar}>
              <FaTimes />
            </Cancel>
            <ul>
            <Link href="/">
              <li onClick={hideSideBar}>Home</li>
            </Link>
            <Link href="/about">
              <li onClick={hideSideBar}>About</li>
            </Link>
            </ul>
          </SideBar>
        </SideBarContainer>
      </>
    );
  };
  