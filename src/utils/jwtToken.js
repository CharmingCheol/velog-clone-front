function setAccessToken(token) {
  sessionStorage.setItem("access_token", token);
}

function getAccessToken() {
  return sessionStorage.getItem("access_token");
}

function setRefreshToken(token) {
  // refresh token은 cookie에다가 저장
}

function getRefreshToken() {
  // cookie에 있는 refresh token 불러오기
}

export { setAccessToken, getAccessToken, setRefreshToken, getRefreshToken };
