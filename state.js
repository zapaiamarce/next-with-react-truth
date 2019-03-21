import React from "react";
import ReactTruth, { withAppState } from "react-truth";


const AppContext = React.createContext({});

export default class Actions extends ReactTruth {
  constructor(props) {
    super(props, AppContext);
  }
  async componentDidMount() {
    this.setState({
      ...this.state,
      someValue: "didMount"
    })
  }
  async testAction(newValue){
    // you can this.setState as usual or return a value
    return {
      ...this.state,
      someValue: newValue
    }
  }
}

export const useAppState = withAppState(AppContext);