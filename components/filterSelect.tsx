import { ChangeEventHandler, useContext } from "react";
import FilterContext from "../context/filter";
import { ETag } from "../interfaces";

const tags = [ETag.cats, ETag.food, ETag.spots]


const FilterSelect = () => {

  const { checked, setChecked } = useContext(FilterContext)

  const onChange = (event: any) => {

    const targetTag = event.target.getAttribute("data-tag")

    if (event.target.checked)
      setChecked([...checked, targetTag])
    else
      setChecked([...checked.filter(item => item !== targetTag)])
  }

  return (
    <div className="text-lg">
      {tags.map(tag =>
        <div key={tag} className="flex items-center">
          <input checked={checked.includes(tag)} type="checkbox" data-tag={tag} className="mr-2" onChange={onChange} />
          <div>
            {tag}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterSelect