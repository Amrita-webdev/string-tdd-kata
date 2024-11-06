import React, {useState} from "react";
// import '../App.css'

const AddTwoNumbers = () => {
    const [input, setInput] = useState('')
    const [res, setRes] = useState('')
    const [error, setError] = useState('')
    
    function add(numbers) {
        // If the input string is empty, return 0
        if (numbers === "") {
            return 0;
        }
    
        // Split the string by commas and convert the substrings to numbers
        const numArray = numbers.split(",").map(Number);
    
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