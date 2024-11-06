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
    
        let delimiter = ",";
        let numSection = numbers;

        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
    
            delimiter = numbers.slice(2, delimiterEndIndex);

            numSection = numbers.slice(delimiterEndIndex + 1);
        }

        const splitDelimiters = [delimiter, "\n", ","];

        let delimiterRegex = new RegExp(`[${splitDelimiters.join('')}]`);

        let numArray = numSection.split(delimiterRegex).map(num => num.trim());

        let sum = 0;
        const negativeNumbers = [];
    
        for (let i = 0; i < numArray.length; i++) {
            const num = Number(numArray[i]);
    
            if (isNaN(num)) {
                continue;
            }
    
            if (num < 0) {
                negativeNumbers.push(num);
            } else {
                sum += num;
            }
        }

        if (negativeNumbers.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }
    
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