import Pages from "pages";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Pages />
      </Provider>
    </Router>
  );
};

export default App;
