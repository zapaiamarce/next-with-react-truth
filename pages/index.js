import StateProvider from "../state";
import Component from "../component"

export default () => {
  return (
    <StateProvider
        externalState={{query:{ a: "a" }}}
        initialState={{someValue:"initial"}}
        persist={true}>
      <Component />
    </StateProvider>
  );
};
