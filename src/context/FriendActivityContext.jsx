import { createContext, useContext, useState } from "react";

// 1. Context create
const FriendActivityContext = createContext();

// 2. Provider component
export const FriendActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (type, friend) => {
    const newActivity = {
      id: Date.now(),
      type,
      friendName: friend.name,
      time: new Date().toLocaleString(),
    };

    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <FriendActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </FriendActivityContext.Provider>
  );
};

// 3. Custom hook
export const useFriendActivity = () => useContext(FriendActivityContext);