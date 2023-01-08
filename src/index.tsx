import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store/store";
import "./firebase";
import { GlobalStyles } from "ui";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
);
