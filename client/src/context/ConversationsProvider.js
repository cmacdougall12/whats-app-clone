import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ConversationsContexts = React.createContext();

export function useConversations() {
  return useContext(ConversationsContexts);
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );

  const createConversation = (recipients) => {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  };

  return (
    <ConversationsContexts.Provider
      value={{ conversations, createConversation }}
    >
      {children}
    </ConversationsContexts.Provider>
  );
}
