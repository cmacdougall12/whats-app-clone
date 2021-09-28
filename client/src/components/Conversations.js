import React from "react";
import { useConversations } from "../context/ConversationsProvider";
import { ListGroup } from "react-bootstrap";

export default function Conversations() {
  const { conversations } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item key={index}>
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
