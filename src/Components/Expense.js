import { useState } from "react";
import { useHistory } from "react-router-dom";


const Expense = ({expense}) => {

    const [isHidden, setIsHidden] = useState(true)
    const history = useHistory()
    const handleDelete = () => {
      fetch(`http://localhost:8000/expenses/${expense.id}`, {
        method: "DELETE"
      })
      .then(()=>{
        history.push("/")
      })
    }
    return (
        <div className="expense" 
            onMouseEnter={() => setIsHidden(false)}
            onMouseLeave={() => setIsHidden(true)}
        >
            <button 
              className="delete"
              onClick={handleDelete}
            >
              &#10006;
            </button>
            <h3>{expense.exname}</h3>
            <div className="expense-details">
                <p className="price">{expense.price} DZD</p>

                <div
                    className="show" 
                    style={{opacity:isHidden ? 0 : 1}}
                >
                    <p className="category">{expense.category}</p>
                    <p className="date">{`${expense.date.day}/${expense.date.month}/${expense.date.year} ${expense.date.hour}:${expense.date.minute}`}</p>
                </div>  

                {/* {isHidden && 
                  <>
                    <div className="hidden">
                        <p className="category">Category: {expense.category}</p>
                        <p className="date">Made on: {`${expense.date.day}/${expense.date.month}/${expense.date.year} ${expense.date.hour}:${expense.date.minute}`}</p>
                    </div>  
                  </>  
                }
                {!isHidden && 
                  <>
                  <div className="shown">
                    <p className="category">Category: {expense.category}</p>
                    <p className="date">Made on: {`${expense.date.day}/${expense.date.month}/${expense.date.year} ${expense.date.hour}:${expense.date.minute}`}</p>  
                  </div>
                  </>  
                } */}

            </div>
        </div>
    );
}
 
export default Expense;