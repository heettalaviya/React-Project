
import { Route, Routes } from "react-router";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header"
import AddProduct from "./Component/Add/Add";
import EditProduct from "./Component/Edit/Edit";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addproduct" element={<AddProduct  />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        {/* <Route path="/add" element={<AddProduct />} />
         */}
      </Routes>
    </>


  );
}

export default App;
