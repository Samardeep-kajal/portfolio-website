import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-Poppins bg-[#E0E1DD] max-h-screen ">
      <Navbar />
      <div className="mt-24 ml-20">
        <p className="text-2xl ">Hello, my name is</p>
        <h1 className="mt-4 text-5xl font-bold ">Samardeep Kajal.</h1>
        <p className="mt-4 text-1xl">I create full stack web applications.</p>
        <p className="mt-2">
          A 4th year student pursuing Bachelors in Information technology. I
          have done numerous full stack web application projects based on MERN
          stack which could provide some value and experience.
        </p>
      </div>
      {/* <LogoAnim /> */}
    </div>
  );
}

export default App;

// "icons": [
//     {
//       "src": "favicon.ico",
//       "sizes": "64x64 32x32 24x24 16x16",
//       "type": "image/x-icon"
//     },
//     {
//       "src": "logo192.png",
//       "type": "image/png",
//       "sizes": "192x192"
//     },
//     {
//       "src": "logo512.png",
//       "type": "image/png",
//       "sizes": "512x512"
//     }
//   ],
