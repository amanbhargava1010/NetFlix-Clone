import appStore from "../Utils/appStore";
import Body from "./Body";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}

export default App;