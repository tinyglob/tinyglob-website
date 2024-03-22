import AfricaPng from '../assets/continents-quick/africa.png';
import AsiaPng from '../assets/continents-quick/asia.png';
import AustraliaPng from '../assets/continents-quick/australia.png';
import EuropePng from '../assets/continents-quick/europe.png';
import NorthAmericaPng from '../assets/continents-quick/north-america.png';
import SouthAmericaPng from '../assets/continents-quick/south-america.png';

export const getContinentImageByText = (continent: string) => {
  switch (continent) {
    case 'africa':
      return AfricaPng;
    case 'asia':
      return AsiaPng;
    case 'australia':
      return AustraliaPng;
    case 'europe':
      return EuropePng;
    case 'north-america':
      return NorthAmericaPng;
    case 'south-america':
      return SouthAmericaPng;
    default:
      return '';
  }
};
