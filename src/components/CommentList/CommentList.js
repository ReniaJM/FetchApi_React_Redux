import React from "react";
import CommentContainer from "../../container/CommentContainer";
import styles from "./CommentListCatalog.module.css";

const CommentList = ({ comment, email }) => {
    const textLower = email.toString().toLowerCase();

    const productsWithFilter= comment.filter(comment =>
        comment.email.toLowerCase().includes(textLower)
    );

    // const manufactureLowerText = manufacture;
    // const allFiltredItems = productsWithFilter.filter(product=>
    //     product.manufacture.toLowerCase().includes( manufactureLowerText)
    // );

    return(

    <div className={styles.Comments}>
        {productsWithFilter.map(e => (
            <CommentContainer key={e.id} {...e} />
        ))}
    </div>
    )

};

export default CommentList;
