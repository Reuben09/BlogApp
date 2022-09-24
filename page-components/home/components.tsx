import { Row, Button } from "@components";
import {
 Nav,
 ButtonContainer
} from "./styled";

export const Header: React.FC<{
 
  }> = () => {
    return (
      <Nav height="100%" padding="0 4rem" align="center" justify="space-between">
          <ButtonContainer>
          <li><Button>Subscribe</Button></li>
        </ButtonContainer>
      </Nav>
    );
  };
  
