import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {v4 as uuidv4} from 'uuid'
const AddExpense = () => {
    
    const [exname, setExName] = useState("")
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState("")
    
    const history = useHistory()
    
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

        const expense = {id,exname, price, category, date}
        console.log(expense);

        fetch("http://localhost:8000/expenses", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(expense)
        })
        .then(() => {
            history.push('/')
        })

        setExName('')
        setPrice()
        setCategory('')
        history.push('/')

    }

    return (
        <div className="add-expense">
            <form onSubmit={handleSubmit}>
                
                <label>Add What you bought:</label>
                <input
                    onChange={(e) => setExName(e.target.value)}
                    value={exname}
                    type="text" 
                />
                <label>Price:</label>
                <input
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    type="number"
                />

                <label>Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value) }
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