import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import * as S from "./style";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import SearchButton from "./SearchButton";

const Header = ({ location }) => {
  const isLoggedIn = true;
  const includeKeyword = ["register", "write"];
  const url = includeKeyword.some((word) => location.pathname.includes(word));

  return (
    <>
      {url ? null : (
        <S.HeaderLayout>
          <S.HeaderLogo to="/"> clonelog </S.HeaderLogo>
          <S.Menu>
            <SearchButton />
            {isLoggedIn ? <UserButton /> : <LoginButton />}
          </S.Menu>
        </S.HeaderLayout>
      )}
    </>
  );
};

Header.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Header);
