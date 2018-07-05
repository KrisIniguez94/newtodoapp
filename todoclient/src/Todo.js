import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";

class Todo extends Component {
  render() {
    return (
      <Row>
        <Input placeholder="Placeholder" s={6} label="Task" />
        <Button>Add Task</Button>
      </Row>
    );
  }
}

export default Todo;
