import AfricaPng from '../assets/continents-quick/africa.png';
import AsiaPng from '../assets/continents-quick/asia.png';
import AustraliaPng from '../assets/continents-quick/australia.png';
import EuropePng from '../assets/continents-quick/europe.png';
import NorthAmericaPng from '../assets/continents-quick/north-america.png';
import SouthAmericaPng from '../assets/continents-quick/south-america.png';

export const PRODUCTION_API_URL =
  'https://tinyglob-backend-production.up.railway.app';

export const CONTINENTS = [
  {
    name: 'North America',
    route: '/north-america',
    image: NorthAmericaPng,
  },
  {
    name: 'Europe',
    route: '/europe',
    image: EuropePng,
  },
  {
    name: 'Asia',
    route: '/asia',
    image: AsiaPng,
  },
  {
    name: 'South America',
    route: '/south-america',
    image: SouthAmericaPng,
  },
  {
    name: 'Africa',
    route: '/africa',
    image: AfricaPng,
  },
  {
    name: 'Australia',
    route: '/australia',
    image: AustraliaPng,
  },
];
