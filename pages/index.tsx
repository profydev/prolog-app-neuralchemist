import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import {
  NavList,
  NavItem,
  StyledDashboardButton,
  Header,
  StyledNav,
  Logo,
  Container,
} from "./styles";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Header>
        <Container>
          <Logo src="/icons/logo-large.svg" alt="Prolog logo" />
          <StyledNav>
            <NavList>
              <NavItem>
                <Link href="/" passHref>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/product" passHref>
                  Products
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/documentation" passHref>
                  Documentation
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/pricing" passHref>
                  Pricing
                </Link>
              </NavItem>
            </NavList>
          </StyledNav>
          <StyledDashboardButton href={Routes.projects}>
            Open Dashboard
          </StyledDashboardButton>
        </Container>
      </Header>

      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
