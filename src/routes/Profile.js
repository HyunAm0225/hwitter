import React, { useEffect } from "react";
import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";

export default ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyHweets = async () => {
    const hweets = await dbService
      .collection("hweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    console.log(hweets.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    getMyHweets();
  }, []);
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
