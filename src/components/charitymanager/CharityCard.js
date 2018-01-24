import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import { connect } from "react-redux";

class CharityFull extends React.Component {
  render() {
    const { charity } = this.props;
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
            <ul>
              Featured Users Supporting {charity.name}
              <div>Probably a cool person</div>
            </ul>
            <div>{charity.mission}</div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  charity: state.auth.management.charity
});

export default connect(mapStateToProps)(CharityFull);
