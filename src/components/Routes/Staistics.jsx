// import { useState } from 'react';

// import { UserData } from 'components/Statistics/testData';
// import { BarChart } from './BarChart';
// import { MyVersion } from './InputSelect/MyVersion';
// import { MyVersionYears } from './InputSelect/MyVersionYears';
// import { useEffect } from 'react';
import { Diagram } from 'components/Statistics/Diagram/Diagram';
import { SelectCategories } from 'components/Statistics/SelectCategories/SelectCategoies';
import { CategoriesList } from 'components/Statistics/CategoriesList/CetegoriesList';

import {
  StatisticsContainer,
  GraphicsContainer,
  CategoriesContainer,
} from './Statistics.styled';

const months = [
  { name: 'January', type: 'january' },
  { name: 'February', type: 'February' },
  { name: 'March', type: 'march' },
  { name: 'April', type: 'april' },
  { name: 'May', type: 'may' },
  { name: 'June', type: 'june' },
  { name: 'July', type: 'july' },
  { name: 'August', type: 'august' },
  { name: 'September', type: 'september' },
  { name: 'October', type: 'october' },
  { name: 'November', type: 'november' },
  { name: 'December', type: 'december' },
];
const years = [
  { name: 2016, type: 2016 },
  { name: 2017, type: 2017 },
  { name: 2018, type: 2018 },
  { name: 2019, type: 2019 },
  { name: 2020, type: 2020 },
  { name: 2021, type: 2021 },
  { name: 2022, type: 2022 },
];

console.log(months, years);
export const Statistics = () => {
  return (
    <StatisticsContainer>
      <GraphicsContainer>
        <Diagram />
        <CategoriesContainer>
          <SelectCategories />
          <CategoriesList />
        </CategoriesContainer>
      </GraphicsContainer>
    </StatisticsContainer>
  );
};
