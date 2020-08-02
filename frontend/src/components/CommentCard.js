/*
 * 11551144832 Cheng Mo
 * 1155116199  Yousif Alebyary
 * 1155086631  Anju Otsuka
 * 1155098386  Dineth Perera
 */
import React from "react";
import { Card } from "react-bootstrap";

const CommentCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.content}</Card.Title>
        <Card.Text>{props.username}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentCard;
