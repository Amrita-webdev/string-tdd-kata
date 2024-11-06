import React, {useState} from "react";
// import '../App.css'

const AddTwoNumbers = () => {
    const [input, setInput] = useState('')
    const [res, setRes] = useState('')
    const [error, setError] = useState('')
    
    function add(numbers) {
        if (numbers === "") {
            return 0;
        }

        const numArray = numbers.split(/[\n,]+/).map(num => {
            const parsedNum = Number(num.trim());
            return isNaN(parsedNum) ? 0 : parsedNum;
        });
    
        // Sum up the numbers
        const sum = numArray.reduce((acc, num) => acc + num, 0);
    
        return sum;
    }

    const addNumbers = () => {
        try{
            const sum = add(input)
            console.log(sum, '17')
            setRes(sum.toString())
        } catch(error) {
            setError(error.message)
            setRes('')
        } finally{
            setInput('')
        }
    }
    return(
        <>
            <div className="input-box">
                <textarea data-testid="input-field" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter The numbers"/>
                <button  data-testid="button" onClick={addNumbers}>Add</button>
                <p data-testid="result">{res}</p>
                <p data-testid='error'>{error}</p>
            </div>
        </>
    )
}

export default AddTwoNumbers