import React from "react";
import { Helmet } from "react-helmet";

// components
import HomeAside from "components/Home/HomeAside";
import HomeTabContainer from "components/Home/HomeTabContainer";
import HomePostLayout from "components/Home/HomePostLayout";

// home layout style
import * as S from "./style";

const Home = () => (
  <>
    <Helmet>
      <title>velog</title>
    </Helmet>
    <S.HomeContainer>
      <HomeTabContainer />
      <S.MainContainer>
        <HomePostLayout />
        <HomeAside />
      </S.MainContainer>
    </S.HomeContainer>
  </>
);

export default Home;
