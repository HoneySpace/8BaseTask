import React, { ReactNode, useEffect, useState } from 'react';
import { ETag } from '../interfaces';

const FilterContext = React.createContext({
  checked: [] as ETag[],
  setChecked: (arg: ETag[]) => { }
});

interface Props {
  children: ReactNode;
}

const FilterContextProvider = ({ children }: Props) => {
  const [checked, setChecked] = useState<ETag[]>([])

  useEffect(() => {

  })

  return (
    <FilterContext.Provider
      value={{
        checked,
        setChecked
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;

export { FilterContextProvider };