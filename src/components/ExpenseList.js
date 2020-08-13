import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    // <>
    //   <div className="container" style={{ marginTop: 20 }}>
    //     <div className="row justify-content-center">
    //       <div className="col-md-auto">
    //         <h2>Expenses</h2>
    //       </div>
    //     </div>
    //     <div className="row justify-content-center">
    //       <ul className="list-group">
    //         {expenses.map((expense) => (
    //           <li className="list-group-item" key={expense.ID}>
    //             <div className="col-md-auto">{expense.ID}</div>
    //             <div className="col-md-auto">{expense.name}</div>
    //             <div className="col-md-auto">
    //               {"Rs."} {expense.amount}
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </>
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Expense</th>
            <th scope="col">Amount in Rs</th>
          </tr>
        </thead>

        <tbody>
          <ul className="list-group">
            {expenses.map((expense) => (
              <li className="list-group-item" key={expense.ID}>
                <tr>
                  <th scope="row">{expense.ID}</th>
                  <td>{expense.name}</td>
                  <td>{expense.amount}</td>
                </tr>
              </li>
            ))}
          </ul>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
