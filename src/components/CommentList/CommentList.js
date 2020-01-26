import React from "react";
import CommentContainer from "../../container/CommentContainer";
import styles from "./CommentListCatalog.module.css";

const CommentList = ({ comment, email }) => {
    const textLower = email.toString().toLowerCase();

    const productsWithFilter= comment.filter(comment =>
        comment.email.toLowerCase().includes(textLower)
    );

    return(
    <div className={styles.Comments}>
        {productsWithFilter.map(e => (
            <CommentContainer key={e.id} {...e} />
        ))}
    </div>
    )

};

export default CommentList;
