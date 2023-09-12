import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import LearnMore from 'components/Buttons/LearnMore/LearnMore';
import CarCard from 'components/CarCard/CarCard';
import { CarListWrapper } from './CarListStyled';

const CarList = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    // URL-адреса Mock API
    const endpoint = 'https://64730c62d784bccb4a3c3840.mockapi.io/contacts';

    // Використовуємо Axios для отримання даних з Mock API
    axios
      .get(endpoint)
      .then(response => {
        // Отримуємо список автомобілів з відповіді
        const data = response.data;
        setCarList(data);
      })
      .catch(error => {
        console.error('There was a problem fetching data:', error);
      });
  }, []); // Порожній масив для того, щоб запустити ефект тільки один раз

  return (
    <div>
      <CarListWrapper>
        {carList.map(car => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </CarListWrapper>
    </div>
  );
};

export default CarList;
