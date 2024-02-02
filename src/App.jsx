import Ccard from "./assets/Styling/card";
import Ccarousel from "./assets/Styling/carousel";
import Cnavbar from "./assets/Styling/navbar";

function App() {
  return (
    <>
      <Cnavbar />
      <Ccarousel />
      <div className="d-flex flex-wrap justify-content-center my-5">
        <Ccard />
        <Ccard />
        <Ccard />
        <Ccard />
        <Ccard />
        <Ccard />
      </div>
    </>
  );
}

export default App;
