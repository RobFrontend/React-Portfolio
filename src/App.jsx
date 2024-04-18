import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import GlobalStyles from "./styles/GlobalComponents";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
