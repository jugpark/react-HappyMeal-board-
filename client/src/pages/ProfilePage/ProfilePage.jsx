import React from "react";
import { Route, withRouter } from "react-router-dom";
import PageList from "../../components/PageList/PageList";

function MyPage({ match }) {
  return (
    <>
      <Route exact path={match.path} component={PageList} />
    </>
  );
}

export default withRouter(MyPage);
