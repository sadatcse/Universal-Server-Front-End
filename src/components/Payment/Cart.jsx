'use client'
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const Cart = () => {
    const makePayment = async () =>{

        const apiUrl = 'http://localhost:5000'; // try server with local host
        // const apiUrl = 'https://universal-survey-backend.vercel.app';
        const stripe = await loadStripe("pk_test_51OFDMCA34jDiSLEQltx4bmchbPYk8mJGSwMy4zcENlQgUW0PoRkkAgWCVjIGdHlJmbqDTYYvee3QxCWh5x2lZfWs00FMlnlYkZ");
        
        const cart = [
            {
              "id": "1",
              "name": "Widget A",
              "price": 10.99,
              "quantity": 2
            },
            {
              "id": "2",
              "name": "Widget B",
              "price": 5.49,
              "quantity": 1
            },
            {
              "id": "3",
              "name": "Widget C",
              "price": 7.99,
              "quantity": 3
            }
          ]
          

        const body  = {
            products : cart 
        }
        const headers = {
            "Content-Type" :"application/json"
        }
        const response = await fetch(`${apiUrl}/create-checkout-session`,{
            method:'POST',
            headers:headers,
            body:JSON.stringify(body)
        })

        const session = await response.json();
        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })
        if(result.error){
            console.log(result.error);
        }
    }
    return (
        <div>
            <button onClick={makePayment}>Subscribe</button>
        </div>
    );
};

export default Cart;