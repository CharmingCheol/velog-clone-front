import React from "react";
import { Helmet } from "react-helmet";

// component
import Form from "components/Register/Form";

// style
import * as S from "./style";

const Register = () => (
  <>
    <Helmet>
      <title>회원가입 - velog</title>
    </Helmet>
    <S.Layout>
      <S.Header>
        <h1>환영합니다!</h1>
        <div>기본 회원 정보를 등록해주세요.</div>
      </S.Header>
      <Form />
    </S.Layout>
  </>
);

export default Register;
