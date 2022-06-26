import { useState } from "react";

const Summarize = ({sum}) => {

    return (
        <div className="sum">
            <p>Your Total:
            </p>
            <span>
                <p>{sum} DA</p>
            </span>
            
        </div>
    );
}
 
export default Summarize;