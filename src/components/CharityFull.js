import React from "react";
import {
  Alert,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input,
  Row,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

class CharityFull extends React.Component {
  state = {
    modal: false,
    amount: 0
  };
  handleClick = event => {
    event.preventDefault();
    if (this.state.amount <= 0) {
      this.props.handleError("Donation must be greater than zero.");
    } else {
      this.props.addSupport(
        this.props.user,
        this.props.charity,
        parseInt(this.state.amount, 10)
      );
      this.setState({ modal: !this.state.modal });
    }
  };

  handleBack = () => {
    this.props.resetSearch(this.props.supported.length > 0);
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = event => {
    this.setState({
      amount: event.target.value
    });
  };

  render() {
    const { charity } = this.props;
    const supportedCheck = this.props.supported.filter(supportedCharity => {
      return supportedCharity.id === charity.id;
    });

    return (
      <div>
        {this.props.doesUserSupport ? (
          <button onClick={this.handleBack}>Back</button>
        ) : null}
        <Card style={{ margin: "5px" }}>
          <CardBody>
            <CardTitle>
              <img
                src={charity.icon}
                alt={charity.name}
                className="fullCardImage"
              />
              {charity.name}
            </CardTitle>

            <div style={{ maxHeight: "400px", overflow: "hidden" }}>
              <CardImg src={charity.picture} alt={charity.name} />
            </div>

            <div className="byLine">{charity.tagline}</div>
            <div style={{ float: "right" }}>
              <a href={charity.URL} target="_blank">
                Website
              </a>
            </div>
            <br />
            <div>{charity.mission}</div>
            {supportedCheck.length > 0 ? null : (
              <Button
                onClick={this.toggleModal}
                style={{ float: "right", marginTop: "20px" }}
              >
                Support {charity.name}
              </Button>
            )}
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>
                Support {charity.name}
              </ModalHeader>
              <ModalBody>
                By pledging your support, you are agreeing to pay the amount
                selected upon submission. You will be charged your pledged
                amount on the first of each month unless you change or cancel
                your support.
              </ModalBody>
              {this.props.error ? (
                <Alert color="danger">{this.props.error}</Alert>
              ) : null}
              <Row>
                <Col xs="3" />
                <Col xs="4">
                  <Form onSubmit={this.handleClick}>
                    <Label for="donation">Donation Amount</Label>
                    <InputGroup>
                      <InputGroupAddon>$&nbsp; </InputGroupAddon>
                      <Input
                        onChange={this.handleChange}
                        type="number"
                        name="donation"
                        id="donationAmount"
                        value={this.state.amount}
                      />
                    </InputGroup>

                    <ModalFooter>
                      <Button color="secondary" onClick={this.toggleModal}>
                        Cancel
                      </Button>
                      <Button color="secondary" onClick={this.handleClick}>
                        Submit
                      </Button>
                    </ModalFooter>
                  </Form>
                </Col>
                <Col xs="3" />
              </Row>
            </Modal>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  supported: state.auth.user.supported,
  user: state.auth.user,
  error: state.auth.error
});

export default connect(mapStateToProps, actions)(CharityFull);
