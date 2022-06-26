import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExpensesList from "./ExpencesList";

const Home = ({expenses}) => {
    const [emptyArray, setEmptyArray] = useState(true)
    return (
        <div className="home">
            {expenses && <ExpensesList expenses={expenses} /> }
            {expenses && !expenses.length && 
               <>
                <div className="warning">
                    <p>ops, there is nothing here ... </p>
                </div>
               </>
            }
        </div>
    );
}
 
export default Home;