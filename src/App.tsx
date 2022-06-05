import Header from "./components/Header/Header";
import "./globalCss/global.css";
import "./globalCss/variables.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import Footer from "./components/Footer/Footer";
import GetStartedForm from "./components/GetStartedForm/GetStartedForm";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes />
        <GetStartedForm />
        <Footer />
      </Router>
    </>
  );
}

export default App;
