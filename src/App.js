import React from "react";
import "./App.css";
import Counter from "./Counter";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    };

    increase = () => {
        this.setState(prevState => ({
            counter: prevState.counter +1,
        }));
    };
    render() {
        return (
            <div className="button">
                <Counter count = {this.state.counter} />
                <button className="butt" onClick={this.increase}>Нажми меня</button>
           </div>
        );
    };
}
export default App;