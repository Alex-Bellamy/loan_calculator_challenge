import React, { useState } from "react";

const initialValues = [
  {
    name: "",
    loanAmount: "",
    monthlyFees: "",
    apr: "",
  },
];

const VisitorTotalLoanCalculator = () => {
  const [initial, setInitial] = useState(initialValues);

  const handleLoanChanges = (e) => {
    const updatedValues = [...initial];
    updatedValues[e.target.dataset.id][e.target.name] = e.target.value;
    setInitial(updatedValues);
  };

  const addAdditionalLoan = () => {
    setInitial((prevLoans) => [
      ...prevLoans,
      { name: "", loanAmount: "", monthlyFees: "", apr: "" },
    ]);
  };

  return (
    <div class="table">
      <div class="tableContent">
        <div class="tableHeader">
          <div class="tableRow">
            <div class="tableBody">
              {initial.map((loan, index) => (
                <div class="tableRow" key={index}>
                  <div class="tableData">
                    <input
                      name="name"
                      placeholder="Creditor name"
                      data-id={index}
                      data-cy="creditorName"
                      type="text"
                      value={loan.name}
                      onChange={handleLoanChanges}
                    />
                  </div>
                  <div className="tableData">
                    <input
                      name="loanAmount"
                      placeholder="Total loan amount"
                      data-id={index}
                      data-cy="loanAmount"
                      type="number"
                      value={loan.loanAmount}
                      onChange={handleLoanChanges}
                    />
                  </div>
                  <div class="tableData">
                    <input
                      name="monthlyFees"
                      placeholder="Monthly fees"
                      data-id={index}
                      data-cy="monthlyFees"
                      type="number"
                      value={loan.monthlyFees}
                      onChange={handleLoanChanges}
                    />
                  </div>
                  <div class="tableData">
                    <input
                      name="apr"
                      placeholder="APR"
                      data-id={index}
                      data-cy="apr"
                      type="number"
                      value={loan.apr}
                      onChange={handleLoanChanges}
                    />
                  </div>
                </div>
              ))}
              <div class="tableRow">
                <div class="tableData">
                  <button
                    onClick={() => {
                      addAdditionalLoan();
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorTotalLoanCalculator;