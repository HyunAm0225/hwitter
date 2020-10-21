import React from "react";

const Hweet = ({ hweetObj, isOwner }) => (
  <div>
    <h4>{hweetObj.text}</h4>
    {isOwner && (
      <>
        <button>Delete Hweet</button>
        <button>Edit Hweet</button>
      </>
    )}
  </div>
);
export default Hweet;
