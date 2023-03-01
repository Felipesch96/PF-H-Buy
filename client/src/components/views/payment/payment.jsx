import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const { REACT_APP_API_URL } = process.env;

const FORM_ID = 'payment-form';

export default function Payment() {
  
  const orderId = useSelector((state) => state.cart.orderId)
  const [preferenceId, setPreferenceId] = useState(null);
  
  const func = async () => {
    const { data } = await axios.post(`${REACT_APP_API_URL}/payment/${orderId}`);
    setPreferenceId(data.preferenceId);
  }
  useEffect(() => {
    if (!preferenceId?.length)func()      
}, [orderId, preferenceId?.length]);


  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.setAttribute('data-preference-id', preferenceId);
      const form = document.getElementById(FORM_ID);
      console.log(form);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return (
    <div>
        <div>MIERDA</div>
        <form id={FORM_ID} method="GET">
            <button type='submit'>culo</button>
        </form>
    </div>
    
  );
}