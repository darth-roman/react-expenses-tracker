import Expense from "./Expense";

const ExpensesList = ({expenses}) => {
    return (
        <div className="expenses-list">
            {
                expenses.map(expense => (
                    <Expense expense={expense} key={expense.id}/>
                ))
            }
        </div>
    );
}
 
export default ExpensesList;