import React, { useState } from "react";

const Home = () => {
  const [hweet, setHweet] = useState("");
  const onSubmit = event => {
    event.preventDefault();
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
      <form>
        <input type="text" onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Hweet" />
      </form>
    </div>
  );
};

export default Home;
