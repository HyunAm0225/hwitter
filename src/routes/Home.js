import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Hweet from "components/hweet";
import HweetFactory from "components/HweetFactory";

const Home = ({ userObj }) => {
  const [hweets, setHweets] = useState([]);

  useEffect(() => {
    dbService.collection("hweets").onSnapshot(snapshot => {
      const hweetArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHweets(hweetArray);
    });
  }, []);

  return (
    <div className="container">
      <HweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {hweets.map(hweet => (
          <Hweet key={hweet.id} hweetObj={hweet} isOwner={hweet.creatorId === userObj.uid} />
        ))}
      </div>
    </div>
  );
};

export default Home;
