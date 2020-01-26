import {connect} from "react-redux";

import HomePage from "../pages/Home/HomePage";

import {fetchCommentsToApp} from "../actions/comments";

const mapStateToProps = state => ({
    comment: state.comments.comment,
    isLoading: state.comments.isLoading,
    isError: state.comments.isError
});

const mapDispatchToProps = {
    fetchCommentsToApp: fetchCommentsToApp
};

const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export default HomePageContainer;
