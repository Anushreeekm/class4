import React from "react"
import Ex1 from "./component/Ex1";
import Ex5 from "./component/Ex5";
import Ex7 from "./component/Ex7"
import Ex9 from "./component/Ex9";

/* react hook => method -> dedicated to functional components, function, const arrow, const local */

function App(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">React Hooks</h3>
        </div>
      </div>
      <Ex9 itemPerPage = {20} />
    </div>
  )
}

export default App;
