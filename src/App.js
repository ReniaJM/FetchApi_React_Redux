import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePageContainer from "./container/HomePageContainer";

function App() {
    return (
        <Provider store={store}>
             <HomePageContainer/>
        </Provider>
    );
}

export default App;
