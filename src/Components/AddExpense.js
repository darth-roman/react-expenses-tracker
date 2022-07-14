import { useState } from "react";
import { useHistory } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'

const AddExpense = () => {
    
    const [expense,setExpense] = useState({})
    
    const history = useHistory()
    
    const handleChange = (e) => {
        setExpense({...expense, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const id = uuidv4()

        const today = new Date()

        const date = {
            day: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear(),
            hour: today.getHours(),
            minute: today.getMinutes()
        }

        setExpense({...expense, id,date})
        
        console.log(expense);

        fetch("http://localhost:8000/expenses", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(expense)
        })
        .then(() => {
            setExpense({})
            history.push('/')
        })

    }

    return (
        <div className="add-expense">
            <form onSubmit={handleSubmit}>
                
                <label>Add What you bought:</label>
                <input
                    onChange={handleChange}
                    name="exname"
                    value={expense.exname || ''}
                    type="text" 
                />
                <label>Price:</label>
                <input
                    value={expense.price || "0"}
                    name="price"
                    onChange={handleChange}
                    type="number"
                />

                <label>Category</label>
                <select
                    value={expense.category}
                    name="category"
                    onChange={handleChange}
                >
                    <option value="Food">Food</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Education">Education</option>
                </select>


                <button>Add Meee</button>
            </form>
        </div>
    );
}
 
export default AddExpense;
