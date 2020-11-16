import React from "react";
import { Helmet } from "react-helmet";

// component
import SavePostLayout from "components/Saves/SavePostLayout";

// style
import * as S from "./style";

const Saves = () => (
  <>
    <Helmet>
      <title>임시 글 목록 - velog</title>
    </Helmet>
    <S.Layout>
      <S.Title>임시 글 목록</S.Title>
      <SavePostLayout />
    </S.Layout>
  </>
);

export default Saves;
