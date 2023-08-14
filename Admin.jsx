import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin({token}){
    const [message, setMessage] = useState('');
    useEffect(() => {
        const fetchProtectedData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/protected', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            setMessage(response.data.message);
          } catch (error) {
            console.error('Error fetching protected data:', error);
          }
        };
        if (token) {
            fetchProtectedData();
          }
        }, [token]);
      

    return(<h1>This is Admin Page</h1>)
}

export default Admin;