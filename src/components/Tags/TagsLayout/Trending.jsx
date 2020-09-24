import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POPULAR_TAGS_LOAD_REQUEST } from "store/actions/postAction";
import { useInfiniteScroll } from "hooks";
import * as S from "./style";
import TagItem from "./TagItem";
import TagsFallBackLayout from "../TagsFallBackLayout";

const Trending = () => {
  const dispatch = useDispatch();
  const popularTags = useSelector((state) => state.postReducer.popularTags);
  useEffect(() => {
    dispatch({
      type: POPULAR_TAGS_LOAD_REQUEST,
    });
  }, []);

  // fall back 출력 여부
  const showTagsFallback = useSelector(
    (state) => state.postReducer.showTagsFallback
  );
  // 인피니트 스크롤링 계속 해도 되는지 판단
  const hasMoreTags = useSelector(
    (state) => state.postReducer.hasMorePopularTags
  );
  useInfiniteScroll(popularTags, hasMoreTags, 0.75, POPULAR_TAGS_LOAD_REQUEST);

  return (
    <>
      <S.StyledTagSection>
        {popularTags.map((Tag, index) => (
          <TagItem Tag={Tag} key={index} />
        ))}
      </S.StyledTagSection>
      {showTagsFallback || <TagsFallBackLayout />}
    </>
  );
};

export default Trending;
