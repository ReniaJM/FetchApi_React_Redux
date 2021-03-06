import React, {useEffect, useState} from "react";
import CommentList from "../../components/CommentList/CommentList";
import "./home.css";
import PropTypes from "prop-types";

const HomePage = ({comment, isLoading, isError, fetchCommentsToApp}) => {
    useEffect(() => {
        fetchCommentsToApp();
    }, [fetchCommentsToApp]);

    const [email, searchEmail] = useState('');

    const clearInput = () => {
        searchEmail('')
    };

    if (isError) {
        return <h2 className="info-error">Sorry, there's an error during fetching data </h2>;
    }

    if (isLoading) {
        return <div className="spinner"/>
    }

    return (
        <>
            <div className="p-3">
                <h3>Search email</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"
                           placeholder="Search..."
                           id="email"
                           value={email}
                           onChange={e => searchEmail(e.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="button" onClick={clearInput}>Clear</button>
                    </div>
                </div>

            </div>

            <CommentList comment={comment} email={email}/>

        </>
    );
};


HomePage.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    fetchCommentsToApp: PropTypes.func.isRequired,
};


export default HomePage;

