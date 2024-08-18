import caloriesIcon from '/images/svg/calories-icon.svg';
import proteinIcon from '/images/svg/protein-icon.svg';
import carbIcon from '/images/svg/carb-icon.svg';
import fatIcon from '/images/svg/fat-icon.svg';

export const nutritionData = [
  {
    icon: caloriesIcon,
    key: 'calorieCount',
    unit: 'kCal',
    description: 'Calories',
  },
  {
    icon: proteinIcon,
    key: 'proteinCount',
    unit: 'g',
    description: 'Proteines',
  },
  {
    icon: carbIcon,
    key: 'carbohydrateCount',
    unit: 'g',
    description: 'Glucides',
  },
  { icon: fatIcon, key: 'lipidCount', unit: 'g', description: 'Lipides' },
];
