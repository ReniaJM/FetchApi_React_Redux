import React from "react";
import CommentContainer from "../../container/CommentContainer";
import  "./comments.css";
import PropTypes from "prop-types";

const CommentList = ({ comment, email }) => {
    const textLower = email.toString().toLowerCase();

    const productsWithFilter= comment.filter(comment =>
        comment.email.toLowerCase().includes(textLower)
    );

    return(
    <div className="comments">
        {productsWithFilter.map(e => (
            <CommentContainer key={e.id} {...e} />
        ))}
    </div>
    )

};

CommentList.propTypes = {
    comment: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired,
};


export default CommentList;

