import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styled";
import { Provider } from "react-redux";
import store from "./store/store";
import CourseItems from "./components/CourseItems";
import Slider from "./components/slider";

const theme = {
  mobile: "768px",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <CourseItems />
          <Slider />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
