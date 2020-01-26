import React, { useEffect,useState } from "react";

import CommentList from "../../components/CommentList/CommentList";
import styles from "./HomePage.module.css";

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
      <div className={styles.Search}>
          <h3>Search email</h3>
            <div className="input-group mb-3">
              <input type="text" className="form-control"
                     placeholder="Search..."
                     id="email"
                     value={email}
                     onChange={e => searchEmail(e.target.value)}/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={clearInput}>Clear</button>
                </div>
            </div>

      </div>
      <CommentList comment={comment} email={email}/>
    </>
  );
};

export default HomePage;
