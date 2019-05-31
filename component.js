import { appState } from "./state";

export default () => {
  const [state, actions] = appState.useState();
  const handleClick = () => actions.testAction(1,2,3);
  
  return <div onClick={handleClick}>Component {JSON.stringify(state)}</div>;
};
