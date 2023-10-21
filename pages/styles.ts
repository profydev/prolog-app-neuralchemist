import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  background: white;
`;

export const Container = styled.div`
  width: 80rem;
  height: 5rem;
  padding: 0 2rem;
  margin: 0 auto;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* DEBUG */
  border: 1px solid black;
`;

export const Logo = styled.img`
  padding: 1.5rem 0;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  padding: 0 1rem;
`;

export const StyledNav = styled.nav`
  a {
    text-decoration: none;
    color: #667085;
  }
`;

export const StyledDashboardButton = styled.a`
  background-color: #7f56d9;
  color: #ffffff;
  padding: 0.625rem 1.125rem;

  border-radius: 0.5rem;
  border: 1px solid var(--primary-600, #7f56d9);
  background: var(--primary-600, #7f56d9);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  box-sizing: border-box;

  /* Text */
  text-decoration: none;
  color: var(--White, #fff);

  /* Text md/Medium */
  font-weight: 500;
  line-height: 1.5rem;
`;
