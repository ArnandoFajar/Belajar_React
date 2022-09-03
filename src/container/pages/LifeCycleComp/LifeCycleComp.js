import React, { Component, Fragment } from "react";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDrivedStateFromProps(props, state) {
    console.log("getDrivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <Fragment>
        <h1>Halaman LifeCycleComp</h1>
        <hr/>
        <button onClick={this.changeCount} className="btn btn-primary">
          Component Button : {this.state.count}
        </button>
      </Fragment>
    );
  }
}
export default LifeCycleComp;
