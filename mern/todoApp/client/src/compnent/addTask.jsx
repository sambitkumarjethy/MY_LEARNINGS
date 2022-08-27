import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddTask() {
  return (
    <>
      <Form.Group className="mb-6">
        <Form.Label>Task Name</Form.Label>
        <Form.Control placeholder="Task Name" />
      </Form.Group>
      <Form.Group className="mb-6 mt-10">
        <Form.Label>Priority</Form.Label>
        <Form.Select>
          <option>P0</option>
          <option>P1</option>
          <option>P2</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-6">
        <Form.Check type="checkbox" label="Completed" />
      </Form.Group>
      <Button variant="success">Save</Button>
    </>
  );
}

export default AddTask;
