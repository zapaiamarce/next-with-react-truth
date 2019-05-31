import ReactTruth from "react-truth";

export default class AppState extends ReactTruth {
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

export const appState = new AppState({}, {
  persist: true
});