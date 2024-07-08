// import React from "react";
// import { Component } from "react";
// // import Home from "./Component/Home";
// // import Navbar from "./Component/Navbar";
// // import BookShow from "./Component/BookShow";
// // import LifeCycle from "./Component/LifeCycle";
// // import ProductFun from "./Component/ProductFun";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./App.css";
// // import DetailForm from "./Component/DetailForm";
// // import CountComp from "./Comp/CountComp";
// // import TestComp from "./Comp/TestComp";
// // import BirthdayShowComp from "./Component/BirthdayShowComp";
// // import Filter from "./Component/Filter";
// // import UseREf from "./Component/UseREf";
// import FilterTest from "./Component/FilterTest";
// // import HookForm from "./Component/HookForm";
// // import GrocerryList from "./Component/GrocerryList";
// // import { Routes, Route, Link } from "react-router-dom";
// // import ReudxCounter from "./Component/ReudxCounter";
// import HomeApi from "./Component/HomeApi";
// import About from "./Component/About";

// class App extends Component {
//   state = {
//     ishide: true,
//   };

//   handlechange = () => {
//     this.setState({ ishide: false });
//   };

//   render() {
//     return (
//       <div>
//         {/* <Navbar />
//         <Home /> */}

//         <HomeApi/>
//         <About/>

//         {/* <BookShow moviename={this.state.movieone}/> */}
//         {/* <BookShow moviename={this.state.movietwo}/>

//         <BookShow moviename={this.state.moviethree}/> */}
//         {/*
//         {this.state.ishide ? (
//           <ProductFun name={"Arnachalam"} nametwo={"ram"} />
//         ) : null} */}

//         {/* <button onClick={this.handlechange}>Logut </button> */}

//         {/* <DetailForm/> */}

//         {/* <TestComp /> */}
//         {/* <Filter/> */}

//         {/* <UseREf/> */}

//         {/* <HookForm/> */}

//         {/* <GrocerryList/> */}

//      {/* <div className="m-5"> */}

//       {/* <Link to="/"><a className="p-4">Home</a></Link> */}

//       {/* <Link to="/product"><a  className="p-4"> Product</a></Link> */}

//       {/* <Link to="/filter"><a  className="p-4"> Filter</a></Link> */}

//       {/* <CountComp  /> */}

//      {/* </div> */}



// {/* <ReudxCounter/> */}
//         {/* <Routes> */}
//           {/* <Route path="/" element={<CountComp />} /> */}

//           {/* <Route path="/product" element={<BirthdayShowComp />} />

//           <Route path="/filter" element={<FilterTest />} />
//         </Routes> */}
//       </div>
//     );
//   }
// }

// export default App;

// // // Hooks

// import React, { useState } from "react";
// import CountComp from "./Comp/CountComp";
// import CounterWithContext from "./Component/CounterWithContext";
// import Product from "./Component/FilterComp/Product";
// import LoginForm from "./Component/LoginForm";
// import HomeComp from "./Component/HomeComp";

// export default function App() {
//   const [moviename, setmoviename] = useState("Jailer");
//   const [name, setname] = useState("");

//   const handlechange = (a) => {
//     console.log(a);
//   };
//   return (
//     <div>
//       {/* <h1>{name}=------------</h1> */}
//       {/* <CountComp
//         handlechange={handlechange}
//         moviename={moviename}
//         setname={setname}
//       /> */}

//       {/* <CounterWithContext/> */}

//       <LoginForm />



//       <HomeComp/>

//       {/* <Product/> */}
//     </div>
//   );
// }



import React ,{useState ,useEffect ,Suspense} from 'react'
import About from "./Component/About";



export default function App() {


  // const [importedComponent, setImportedComponent] = useState(null);



const MyHOme = React.lazy(()=> import("./Component/HomeApi"))

    // const importComponent = async () => {

    //   const module = await import('./Component/FilterTest');
    //   const AnotherComponent = module.default;
    //   setImportedComponent(<AnotherComponent />);


    // };







  
  return (
    <div>
      
      {/* {importedComponent} */}

<Suspense fallback={"<h1>Loading </h1>"}>
<MyHOme/>

</Suspense>
               {/* <HomeApi/> */}
               <About/>


    </div>
  )
}
