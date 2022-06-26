import Home from "./Components/Home";
import {useEffect, useState} from 'react'
import AddExpense from "./Components/AddExpense";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Summarize from "./Components/Summarize";
import Navbar from "./Components/Navbar";

function App() {
  const [expenses, setExpenses] = useState(null)
  const {error, setError} = useState(null)
  const [sum, setSum] = useState(0)

    useEffect(() => {
      fetch("http://localhost:8000/expenses")
      .then(res => {
          if(!res.ok){
            throw Error("Problem Fetching Data ... ")
          }
          return res.json()
      })
      .then(data => {
          setExpenses(data)
          const summerize = data.reduce((prev, nxt) => {return prev + nxt.price}, 0)
          setSum(summerize)
      }).catch(err=>{
        setError(err.message)
      })
    
  }, [])

  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Summarize sum={sum} />
        
        <Switch>
          <Route exact path="/">
           <Home expenses={expenses} />
          </Route>
          <Route path="/add">
            <AddExpense />
          </Route>
        </Switch>
        {error && 
        <>
          <div className="error">
            <p>Ops. soemthing went wrong ... {error.message}</p>
          </div>
        </>
        }

        
      </div>
    </Router>
  );
}

export default App;
