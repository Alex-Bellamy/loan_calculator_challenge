import React from "react";

const VisitorTotalLoanCalculator = () => {
  return (
    <div>
      <input name="name" placeholder="Creditor name" type="text" />
      <input name="loanAmount" placeholder="Total loan amount" type="number" />
      <input name="monthlyFees" placeholder="Monthly fees" type="number" />
      <input name="apr" placeholder="APR" type="number" />
    </div>
  );
};

export default VisitorTotalLoanCalculator;