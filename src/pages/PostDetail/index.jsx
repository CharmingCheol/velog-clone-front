import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

// componenets
import CommentContainer from "components/PostDetail/CommentContainer";
import LeftButtonsContainer from "components/PostDetail/LeftButtonsContainer";
import PostContent from "components/PostDetail/PostContent";
import PostHeader from "components/PostDetail/PostHeader";
import PostSeries from "components/PostDetail/PostSeries";
import PostSeriesNavigator from "components/PostDetail/PostSeriesNavigator";
import PostUserInfo from "components/PostDetail/PostUserInfo";
import PostTocContainer from "components/PostDetail/PostToc/PostTocContainer";

// action
import { LOAD_POST_DETAIL_REQUEST } from "store/actions/postDetailAction";

// style
import * as S from "./style";

const PostDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const postInfo = useSelector((state) => state.postDetailReducer.postInfo);

  useEffect(() => {
    const { author, title } = params;
    dispatch({
      type: LOAD_POST_DETAIL_REQUEST,
      data: { author, title },
    });
  }, [dispatch]);

  return (
    <>
      {postInfo ? (
        <>
          <Helmet>
            <title>{params.title.replace(/-/g, " ")}</title>
          </Helmet>
          <S.Wrapper>
            <PostTocContainer />
            <S.Container>
              <LeftButtonsContainer />
              <PostHeader />
              <PostSeries />
              <PostContent />
              <PostUserInfo />
              <PostSeriesNavigator />
              <CommentContainer />
            </S.Container>
          </S.Wrapper>
        </>
      ) : null}
    </>
  );
};

export default PostDetail;
