import React, {Component} from 'react';
import AppMenu from "./menu";
import MainContent from "./mainContent";

class App extends Component {
    render() {
        return (
            <div>
                <AppMenu/>
                <MainContent/>
            </div>

        );
    }
}

export default App;
