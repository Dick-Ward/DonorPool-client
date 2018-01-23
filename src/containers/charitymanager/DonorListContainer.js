import React from "react";
import Donor from "../../components/charitymanager/Donor";
import { connect } from "react-redux";
import { Table } from "reactstrap";

class DonorListContainer extends React.Component {
  render() {
    const donations = this.props.supporters.map(
      supporter => supporter.donation
    );
    function getSum(total, num) {
      return total + num;
    }

    const total = donations.reduce(getSum);

    const donor = this.props.supporters.map(supporter => {
      return (
        <Donor
          key={supporter.id}
          id={supporter.id}
          firstName={supporter.first_name}
          lastName={supporter.last_name}
          donation={supporter.donation}
        />
      );
    });
    return (
      <Table>
        <thead>
          <tr>
            <th>Donor</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {donor}
          <tr>
            <td style={{ fontWeight: "bold" }}>Total:</td>
            <td style={{ textAlign: "right" }}>${total}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  supporters: state.auth.management.supporters
});
export default connect(mapStateToProps)(DonorListContainer);
