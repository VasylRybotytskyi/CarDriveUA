import styled from 'styled-components';

export const CarCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 16px;
  width: 274px;
`;

export const CarImage = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    linear-gradient(0deg, #f3f3f2, #f3f3f2);

  object-fit: cover; /* Зберігає пропорції та обрізає зайві частини картинки */
`;

export const WrapperBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CarInfo = styled.div`
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`;

export const RentalPrice = styled.div`
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: rgba(18, 20, 23, 1);
  border-radius: 8px;
`;

export const CarDetails = styled.div`
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(18, 20, 23, 0.5);
  padding: 8px;
  border-radius: 8px;
`;
