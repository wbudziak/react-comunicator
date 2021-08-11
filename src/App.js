import React, { useEffect } from "react";
import { useState } from "react";
import Chat from "./Chat";
import Username from "./Username";
function App() {
  const [username, setUsername] = useState("");
  const addUserName = (username) => {
    setUsername(username);
  };

  return (
    <React.Fragment>
      {username === "" ? (
        <Username username={addUserName}></Username>
      ) : (
        <Chat username={username}></Chat>
      )}
    </React.Fragment>
  );
}

export default App;
