import React from "react";

const Donor = props => {
  return (
    <tr>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td style={{ textAlign: "right" }}>${props.donation}</td>
    </tr>
  );
};

export default Donor;
