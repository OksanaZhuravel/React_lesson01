import React from "react";


export default class Counter extends React.Component {
    render() {
        return (
            <div>
              <span className="counter">{this.props.count}</span>
            </div>
    );
    }
}
