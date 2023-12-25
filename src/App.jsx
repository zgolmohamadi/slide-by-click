import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styled";
import { Provider } from "react-redux";
import store from "./store/store";
import CourseItems from "./components/CourseItems";
import SliderBox from "./components/SliderBox";

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
          <SliderBox />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
