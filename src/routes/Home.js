import React, { useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [hweet, setHweet] = useState("");
  const onSubmit = async event => {
    event.preventDefault();
    await dbService.collection("hweets").add({
      hweet,
      createdAt: Date.now(),
    });
    setHweet("");
  };
  const onChange = event => {
    const {
      target: { value },
    } = event;
    setHweet(value);
  };
  //   const
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={hweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Hweet" />
      </form>
    </div>
  );
};

export default Home;
