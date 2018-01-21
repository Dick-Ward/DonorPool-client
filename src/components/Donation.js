import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  Form,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

class Donation extends React.Component {
  state = {
    pledge: 0
  };

  handleChange = event => {
    this.setState({
      pledge: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    this.props.changePledge(
      this.props.supportId,
      parseInt(this.state.pledge, 10),
      this.props.charity
    );
  };

  render() {
    console.log(this.props);
    return (
      <Card style={{ marginBottom: "5px" }}>
        <CardBody>
          <CardTitle>
            <img
              className="donationCardImage"
              src={this.props.icon}
              alt={this.props.name}
            />
            {this.props.name}
          </CardTitle>
          <CardSubtitle>Goal: {this.props.tagline}</CardSubtitle>
          <br />
          <Form>
            <Label for="donation">Donation Amount</Label>

            <InputGroup>
              <InputGroupAddon>$&nbsp; </InputGroupAddon>
              <Input
                onChange={this.handleChange}
                type="number"
                name="donation"
                id="donationAmount"
                value={this.state.pledge}
              />
              <Button onClick={this.handleClick}> Change Pledge </Button>
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
  componentDidMount() {
    this.setState({
      pledge: this.props.pledge
    });
  }
}

export default connect(null, actions)(Donation);
