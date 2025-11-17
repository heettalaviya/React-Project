import { Route, Routes } from "react-router"
import Header from "./Components/Header/Header"
import HomePage from "./Components/HomePage/HomePage"
import Add from "./Components/Add/Add"
import Men from "./Components/Men/Men"
import Footer from "./Components/Footer/Footer"
import Edit from "./Components/Edit/Edit"


function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Add" element={<Add />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/Edit/:id" element={<Edit />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
