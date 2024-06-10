import { Routes, Route } from "react-router-dom";
import Navigation from "../src/routes/Navigation/Navigation.component";
import Home from "../src/routes/Home/Home.component";
import Authentication from "./routes/authentication/Authentication.component";

const Shop = () => {
  return <h1>I am the shop page.</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
