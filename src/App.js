import React from "react";
import { Provider } from "react-redux";
import Container from "./components/Container/Container";
import store from "./store/store";
import HomePageContainer from "./container/HomePageContainer";

function App() {
    console.log(store.getState());
    return (
        <Provider store={store}>
            <>
            <Container>
             <HomePageContainer/>
            </Container>
            </>
        </Provider>
    );
}

export default App;
