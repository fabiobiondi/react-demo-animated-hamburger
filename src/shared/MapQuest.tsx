import React  from 'react';

interface MapProps {
  city: string;
  // NOTE:
  // width, height not necessary because we extend ImgHTMLAttributes
}

const API = 'https://www.mapquestapi.com/staticmap/v5/map?key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn';

// solution 1: extends interface:
// a) interface MapProps extends React.ImgHTMLAttributes<HTMLImageElement>
// b) use React.FC<MapProps>

// solution 2: support HTMLImage props
export const MapQuest: React.FC<MapProps & React.ImgHTMLAttributes<HTMLImageElement>> = ({
  city,
  width = 400,
  height = 100,
  ...rest
}) => {
  const url = `${API}&size=${width},${height}&center=${city}`;
  return <img src={url} alt={city} {...rest} width="100%"/>;
};
