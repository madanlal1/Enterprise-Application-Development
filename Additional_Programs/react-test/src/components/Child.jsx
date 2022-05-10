import '../App.css';
import {useContext} from 'react';
import { contextExpense } from './contextExpense';

function Child() {

const expense = useContext(contextExpense);


  return (
   <>
   <div className='container'>
     <h1>Expense Tracker</h1>

     <h3>YOUR BALANCE <br/> $260.00</h3>

     <div className='expense_container'>
       <h4>INCOME <br/> $500.00</h4>
       <h4>Expense <br/> $240.00</h4>
     </div>

     <h3>History</h3>
     <hr/>

     <ul>
     {expense.map((obj) => {
         return (
                    <li>
                        <span>{obj.desc}</span>
                        <span>{obj.amount}</span>
                    </li>
         )
     })}
     </ul>

     <h3>Add new Transaction</h3>
     <hr/>
     <div className='transaction-container'>
     <label>Text</label> <br/>
     <input type="text" placeholder="Enter Description" required/><br/>
     <br/>
     <label>Amount <br/> [negative - expense positive + expense]</label>
     <br/>
     <input type="number" placeholder="Enter Amount" required/><br/>

     <button type="submit">Add Transaction</button>
     </div>
    </div>
   </>
  );
}

export default Child;
