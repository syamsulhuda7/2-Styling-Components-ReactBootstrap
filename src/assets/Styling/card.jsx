import React from "react";
import { Button, Card } from "react-bootstrap";

class Ccard extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} className="m-4">
        <Card.Img variant="top" src="src/assets/Styling/images/4.jpg" />
        <Card.Body>
          <Card.Title>Plant</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quaerat laborum numquam accusamus quia hic aspernatur, libero veritatis mollitia suscipit a, beatae doloremque. Minima impedit adipisci exercitationem nostrum nemo soluta!
          </Card.Text>
          <Button variant="primary">Read more ...</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Ccard;