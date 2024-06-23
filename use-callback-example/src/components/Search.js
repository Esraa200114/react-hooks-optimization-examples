import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Search(props) {

    console.log("Search component was evaluated.");

    function onTextEntered(event){
        props.onChange(event.target.value);
    }

    return (
        <React.Fragment>
            <input type="text" className="form-control ms-3" placeholder="Search for users..." onChange={onTextEntered} />
        </React.Fragment>
    );
}

export default React.memo(Search);
