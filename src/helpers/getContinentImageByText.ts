import AfricaPng from '../assets/continents/africa.png';
import AsiaPng from '../assets/continents/asia.png';
import AustraliaPng from '../assets/continents/australia.png';
import EuropePng from '../assets/continents/europe.png';
import NorthAmericaPng from '../assets/continents/north-america.png';
import SouthAmericaPng from '../assets/continents/south-america.png';

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
