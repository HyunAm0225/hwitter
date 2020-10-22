import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Hweet from "components/hweet";

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
  const onFileChange = event => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = finishedEvent => {
      console.log(finishedEvent);
    };
    reader.readAsDataURL(theFile);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={hweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Hweet" />
      </form>
      <div>
        {hweets.map(hweet => (
          <Hweet key={hweet.id} hweetObj={hweet} isOwner={hweet.creatorId === userObj.uid} />
        ))}
      </div>
    </div>
  );
};

export default Home;
