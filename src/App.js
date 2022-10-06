// import logo from './logo.svg';
import './App.css';
import About from './About';
const arr = [
  {
    image : require("./image/v1.mp4"),
    "name":"MULTIMEDIA COURSES",
    "Class1" : "box1",
  },
  {
    image : require("./image/v2.mp4"),
    "name":"UI/UX & Graphics Design",
    "Class1" : "box2",
  },
  {
    image : require("./image/v3.mp4"),
    "name":"Programming IT",
    "Class1" : "box3",
  },
  {
    image : require("./image/v4.mp4"),
    "name":"Trendy Courses",
    "Class1" : "box4",
  },
  {
    image : require("./image/v5.mp4"),
    "name":"Civil-Mech. Engineering",
    "Class1" : "box5",
  },
  {
    image : require("./image/v6.mp4"),
    "name":"Business Development",
    "Class1" : "box6",
  }
]

function App() {
  return (
   <>
         
    <div class="main ">
   {
    arr.map((item) => {
     return(
      <About video={item.image} name = {item.name} iteam = {item.Class1}/>
     )
    }
    )
   }
   </div>
   </>
  );
}

export default App;
