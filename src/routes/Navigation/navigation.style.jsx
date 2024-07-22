import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  .logo-container {
    width: 70px;
    padding: 25px;
    display: flex;
    align-items: flex-start; /* Align items to the top */
    justify-content: center;
    position: relative;
  }

  .logo-container svg {
    height: 100%;
    position: relative;
    top: -10px; /* Adjust this value to move the logo up or down */
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
