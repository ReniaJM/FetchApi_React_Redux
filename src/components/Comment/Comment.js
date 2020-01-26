import React from "react";
import styles from "./Comment.module.css";

const Comment = ({isError, isLoading, id, name, postId, email, body}) => {

    if (isError) {
        return <h2>Error while loading... :(</h2>;
    }

    if (isLoading) {
        return <h2>Loading...</h2>;
    } else {
        return (
            <>
                <div className={styles.Comment}>
                    <h1>{postId}</h1>
                    <h1>{id}</h1>
                    <h3>{name}</h3>
                    <h3>{email}</h3>
                    <h3>{body}</h3>

                </div>
            </>
        );
    }
};

export default Comment;
