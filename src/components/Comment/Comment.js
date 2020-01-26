import React from "react";
import "./comment.css";
import PropTypes from 'prop-types';

const Comment = ({id, postId, name, email, body}) => {
    return (
        <>
            <div className="card comment">
                <div className="card-body">
                    <h4 className="card-title">Name</h4>
                    <p className="name">{name}</p>
                    <h4 className="card-title">Email</h4>
                    <p className="email">{email}</p>
                    <h4 className="card-title">Body</h4>
                    <p className="body">{body}</p>
                    <h6 className="card-text">ID: {id}</h6>
                    <h6 className="card-text">Post id: {postId}</h6>
                </div>
            </div>

        </>
    );
};

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default Comment;


