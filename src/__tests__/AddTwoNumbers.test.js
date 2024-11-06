import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddTwoNumbers from "../components/AddTwoNumbers";
import '@testing-library/jest-dom'

describe('Add Numbers', () => {
    test('renders input fields and button' , () => {
        render(<AddTwoNumbers />)
        const input = screen.getByTestId('input-field')
        const button = screen.getByTestId('button')

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument()
    });
    test('adds comma separated arguments', () => {
        render(<AddTwoNumbers />)
        const input = screen.getByTestId('input-field')
        const button = screen.getByTestId('button')
        const result = screen.getByTestId('result')

        fireEvent.change(input, { target: {value: '1,2'} });
        fireEvent.click(button)

        expect(result).toHaveTextContent('3')
    });
    test('method handles any number of arguments', () => {
        render(<AddTwoNumbers />)
        const input = screen.getByTestId('input-field')
        const button = screen.getByTestId('button')
        const result = screen.getByTestId('result')

        fireEvent.change(input, { target: {value: '1,2,3,4,5,6,7,8,9,10'} });
        fireEvent.click(button)

        expect(result).toHaveTextContent('55')
    });
    test('method handles new lines between numbers(instead of commas)', () => {
        render(<AddTwoNumbers />)
        const input = screen.getByTestId('input-field')
        const button = screen.getByTestId('button')
        const result = screen.getByTestId('result')

        fireEvent.change(input, { target: {value: '1\n2,3'} });
        fireEvent.click(button)

        expect(result).toHaveTextContent('6')
    });
    test('method handles any custom delimiter', () => {
        render(<AddTwoNumbers />)
        const input = screen.getByTestId('input-field')
        const button = screen.getByTestId('button')
        const result = screen.getByTestId('result')

        fireEvent.change(input, { target: {value: '//;\n1;2'} });
        fireEvent.click(button)

        expect(result).toHaveTextContent('3')
    });
    test('method should throw exception if negative numbers are given as input', () => {
        render(<AddTwoNumbers />)
        const input = screen.getByTestId('input-field')
        const button = screen.getByTestId('button')
        const error = screen.getByTestId('error')

        fireEvent.change(input, { target: {value: '1,2,-3'} });
        fireEvent.click(button)
        expect(error).toBeInTheDocument();

        expect(error).toHaveTextContent('Negative numbers not allowed: -3')
    })
    
})