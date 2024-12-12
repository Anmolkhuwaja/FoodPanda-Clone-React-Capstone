import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
   <>
   <h1 className="text-3xl font-bold underline text-blue-800">
      Hello world!
    </h1>
    <FontAwesomeIcon className="text-blue-700" icon={faApple}/>
    <FontAwesomeIcon icon={faBell}/>
   </>
  );
}

export default App;
