import { useAppState } from "./state";

export default () => {
  const [state, actions] = useAppState();
  const handleClick = () => actions.testAction(Math.random());
  
  return <div onClick={handleClick}>Component {JSON.stringify(state)}</div>;
};
