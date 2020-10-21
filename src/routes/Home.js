import React, { useState, useEffect } from "react";
import { dbService } from "fbase";

const Home = ({ userObj }) => {
  const [hweet, setHweet] = useState("");
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
  const onSubmit = async event => {
    event.preventDefault();
    await dbService.collection("hweets").add({
      text: hweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setHweet("");
  };
  const onChange = event => {
    const {
      target: { value },
    } = event;
    setHweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={hweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Hweet" />
      </form>
      <div>
        {hweets.map(hweet => (
          <div key={hweet.id}>
            <h4>{hweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
