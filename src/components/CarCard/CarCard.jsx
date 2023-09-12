import LearnMore from 'components/Buttons/LearnMore/LearnMore';
import {
  CarCardWrapper,
  CarDetails,
  CarImage,
  CarInfo,
  RentalPrice,
  WrapperBlock,
} from './CarCardStyled';

const CarCard = ({ car }) => {
  return (
    <CarCardWrapper>
      <CarImage src={car.img} alt={car.make} />
      <WrapperBlock>
        <CarInfo>
          {car.make} {car.model}, {car.year}
        </CarInfo>
        <RentalPrice>{car.rentalPrice}</RentalPrice>
      </WrapperBlock>
      <CarDetails>
        {car.address} | {car.rentalCompany} | {car.type} | {car.model}
        {car.mileage} | {car.accessories}
      </CarDetails>

      <LearnMore />
    </CarCardWrapper>
  );
};

export default CarCard;
