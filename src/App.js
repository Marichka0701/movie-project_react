import './App.css';

import {createContext, useState} from "react";

export const ClosedSidebarContext = createContext({});

function App() {
    const [sidebarClosed, setSidebarClosed] = useState(false);
    const [leftPartClosed, setLeftPartClosed] = useState(false);

    const propsForSidebar = {
        sidebarClosed,
        setSidebarClosed,
        leftPartClosed,
        setLeftPartClosed,
    }

  return (
    <div className="App"></div>
  );
}

export default App;
