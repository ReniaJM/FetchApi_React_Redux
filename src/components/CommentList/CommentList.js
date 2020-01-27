import React from "react";
import CommentContainer from "../../container/CommentContainer";
import "./comments.css";
import PropTypes from "prop-types";

const CommentList = ({comment, email}) => {
    const textLower = email.toString().toLowerCase();

    const commentWithFilter = comment.filter(comment =>
        comment.email.toLowerCase().includes(textLower)
    );

    return (
        <div className="comments">
            {commentWithFilter.length > 0 ? (
                commentWithFilter.map(e => {
                    return <CommentContainer key={e.id} {...e} />
                })
            ) : (
                <div>
                    <h2 className="info-results">
                        <span role="img" aria-label="magnifying glass tilted left">&#128269; </span>
                        Oops, nothing found</h2>
                </div>
            )}

        </div>
    )

};

CommentList.propTypes = {
    comment: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired,
};


export default CommentList;

