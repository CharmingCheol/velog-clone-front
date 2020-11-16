import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

// components
import MarkDownContainer from "components/Write/MarkDownContainer";
import LeftBottomContainer from "components/Write/LeftBottomContainer";
import MarkDownPreviewContainer from "components/Write/MarkDownPreviewContainer";
import WriteSettingContainer from "components/Write/WriteSettingContainer";

// action
import { loadSavedPostRequest } from "store/actions/writeAction";

// style
import * as S from "./style";

const Write = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const printWriteSetting = useSelector((store) => store.write.printWriteSetting);

  useEffect(() => {
    const postId = location.search.split("=")[1];
    if (postId) {
      dispatch(loadSavedPostRequest(postId));
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>새 글 작성</title>
      </Helmet>
      <S.Layout>
        <div className="container">
          <section className="left">
            <MarkDownContainer />
            <LeftBottomContainer />
          </section>
          <section className="right">
            <MarkDownPreviewContainer />
          </section>
        </div>
      </S.Layout>
      {printWriteSetting && <WriteSettingContainer />}
    </>
  );
};

export default Write;
