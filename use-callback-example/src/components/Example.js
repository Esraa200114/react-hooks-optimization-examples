// import React, { useState, useCallback } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Search from "./Search";

// const names = ["nour", "sarah", "mona", "zeina", "salma"];

// function Example() {

//     const [users, setUsers] = useState(names);

//     console.log("Parent component was evaluated.");

//     const onShuffleButtonClicked = () => {

//         let shuffledNames = [...names]; // Make a copy of the names array
//         shuffledNames.sort(() => Math.random() - 0.5); // Shuffle the copied array
//         setUsers(shuffledNames);
//     };

//     const onInputChanged = useCallback((text) => {

//         console.log(users[0]);

//         // Filter based on the original names array
//         let filteredNames = names.filter(name => name.includes(text));
//         setUsers(filteredNames);

//     }, [users]);

//     return (
//         <React.Fragment>
//             <div className="d-flex align-items-start">
//                 <div>
//                     <button className="btn btn-primary mb-3" onClick={onShuffleButtonClicked}>
//                         Shuffle
//                     </button>
//                     <ul className="list-unstyled">
//                         {users.map(user => (
//                             <li key={user}>{user}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <Search onChange={onInputChanged} />
//             </div>
//         </React.Fragment>
//     );
// }

// export default Example;

import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

const names = ["nour", "sarah", "mona", "zeina", "salma"];

function Example() {

    const [users, setUsers] = useState(names);
    
    const [enteredText, setEnteredText] = useState("");

    console.log("Parent component was evaluated.");

    const onShuffleButtonClicked = () => {
        let shuffledNames = [...names];
        shuffledNames.sort(() => Math.random() - 0.5);
        setUsers(shuffledNames);
    };

    const onInputChanged = useCallback((text) => {
        setEnteredText(text);
    }, []);

    // Log first name before filtering
    console.log("First name in users before filtering is: ", users[0]);

    const filteredUsers = useMemo(() => {
        const filteredNames = enteredText.trim() === "" ? names : names.filter(name => name.includes(enteredText));
        setUsers(filteredNames); // Update users state here
        return filteredNames;
    }, [enteredText]);

    return (
        <React.Fragment>
            <div className="d-flex align-items-start">
                <div>
                    <button className="btn btn-primary mb-3" onClick={onShuffleButtonClicked}>
                        Shuffle
                    </button>
                    <ul className="list-unstyled">
                        {users.map(user => (
                            <li key={user}>{user}</li>
                        ))}
                    </ul>
                </div>
                <Search onChange={onInputChanged} />
            </div>
        </React.Fragment>
    );
}

export default Example;






