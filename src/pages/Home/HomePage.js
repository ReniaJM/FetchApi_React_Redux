import React, { useEffect,useState } from "react";

import CommentList from "../../components/CommentList/CommentList";

const HomePage = ({ comment, isLoading, isError, fetchCommentsToApp }) => {
  useEffect(() => {
    fetchCommentsToApp();
  }, [fetchCommentsToApp]);
  const [email, searchEmail] = useState("");

  const clearInput = () => {
    searchEmail('')
  };


  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div >
        <div>
          <h4>Search</h4>
          <button  onClick={clearInput}> Clear </button>
        </div>
        <div>
          <input
              id="name"
              type="text"
              placeholder="search..."
              value={email}
              onChange={e => searchEmail(e.target.value)}
          />
        </div>
      </div>
      <CommentList comment={comment} email={email}/>
    </>
  );
};

export default HomePage;
