import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

import { GetServerSideProps } from "next";
import { getSession } from 'next-auth/react';
import { prisma } from "../lib/prisma";






export default function Checkout(props: any) {
 
  const cart  = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');



  const [totall, setTotal] = React.useState(0);
  const [prodQtd, setProdQtd] = React.useState(0);


  const handleSubmit = event => {
    event.preventDefault();
    // Validate form values and submit to server
  };

//  selecionar usario e cart no banco e criar endereço de entrega
  
  
//   const itemsCount = Object.keys(cart.cart).reduce(function(prev, curr) {
//     return prev + cart.cart[curr].qtd;
//   }, 0);



// const total = Object.keys(cart.cart).reduce(function(prev, curr) {
//   return prev + cart.cart[curr].qtd * cart.cart[curr].product.price;
// }, 0);




  return (
    <div>
      <h1>Checkout</h1>
  

          
    </div>
  );
};

