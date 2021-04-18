import React, { useState } from "react";
import "./VisitorTotalLoanCalculator.css";

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
  const [totalLoanAmount, setTotalLoanAmount] = useState("");
  const [totalMonthlyFees, setTotalMonthlyFees] = useState("");
  const [totalApr, setTotalApr] = useState("");

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

  const getTotalLoanAmount = () => {
    let totalLoanAmount = initial.reduce((total, loan) => {
      return total + Number(loan.loanAmount);
    }, 0);
    setTotalLoanAmount(totalLoanAmount);
  };

  const getTotalFees = () => {
    let totalFees = initial.reduce((total, loan) => {
      return total + Number(loan.monthlyFees);
    }, 0);
    setTotalMonthlyFees(totalFees);
  };

  const getTotalApr = () => {
    let totalApr =
      initial.reduce((total, loan) => {
        return total + Number(loan.apr);
      }, 0) / initial.length;
    let aprRounded = Math.round(totalApr * 100) / 100;
    setTotalApr(aprRounded);
  };

  return (
    <div id="page">
      <div id="title">
        Like the Lindbergs, calculate your total loan position
      </div>
      <div id="photo">
        <div class="table">
          <div class="tableContent">
            <div class="tableHeader">
              <div class="tableRow">
                <div class="tableData">
                  <div>Creditor name</div>
                </div>
                <div class="tableData">
                  <div>Loan amount (sek)</div>
                </div>
                <div class="tableData">
                  <div>Monthly fees (sek)</div>
                </div>
                <div class="tableData">
                  <div>APR (%)</div>
                </div>
              </div>
              <div class="tableBody">
                {initial.map((loan, index) => (
                  <div data-cy="loanForm" class="tableRow" key={index}>
                    <div class="tableData">
                      <input
                        div
                        class="inputField"
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
                        div
                        class="inputField"
                        name="loanAmount"
                        placeholder="Total loan amount"
                        data-id={index}
                        data-cy="loanAmount"
                        type="text"
                        value={loan.loanAmount}
                        onChange={handleLoanChanges}
                      />
                    </div>
                    <div class="tableData">
                      <input
                        div
                        class="inputField"
                        name="monthlyFees"
                        placeholder="Monthly fees"
                        data-id={index}
                        data-cy="monthlyFees"
                        type="text"
                        value={loan.monthlyFees}
                        onChange={handleLoanChanges}
                      />
                    </div>
                    <div class="tableData">
                      <input
                        div
                        class="inputField"
                        name="apr"
                        placeholder="APR"
                        data-id={index}
                        data-cy="apr"
                        type="text"
                        value={loan.apr}
                        onChange={handleLoanChanges}
                      />
                    </div>
                  </div>
                ))}
                <div class="tableRow">
                  <div class="tableData">
                    <button
                      data-cy="button"
                      id="saveButton"
                      onClick={() => {
                        addAdditionalLoan();
                        getTotalLoanAmount();
                        getTotalFees();
                        getTotalApr();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div class="tableFooter">
                  <div data-cy="loanTotals" class="tableRow">
                    <div class="tableData">
                      <div>Totals:</div>
                    </div>
                    <div data-cy="totalLoanAmount" class="tableData">
                      {totalLoanAmount}
                    </div>
                    <div data-cy="totalMonthlyFees" class="tableData">
                      {totalMonthlyFees}
                    </div>
                    <div data-cy="totalApr" class="tableData">
                      {totalApr}
                    </div>
                  </div>
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