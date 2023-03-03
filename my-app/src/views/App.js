import FilterBar from "../component/FilterBar";
import UserContent from "../component/UserContent";
import data from "../data.json"

import com1 from '../images/photosnap.svg'
import com2 from '../images/manage.svg'
import com3 from '../images/account.svg'
import com4 from '../images/myhome.svg'
import com5 from '../images/loop-studios.svg'
import com6 from '../images/faceit.svg'
import com7 from '../images/shortly.svg'
import com8 from '../images/insure.svg'
import com9 from '../images/eyecam-co.svg'
import com10 from '../images/the-air-filter-company.svg'

import { useState, useEffect } from "react";

function App() {
  const imgArray = [com1, com2, com3, com4, com5, com6, com7, com8, com9, com10]
  const [filterArray, setFilterArray] = useState([])
  const [filterData, setFilterData] = useState(data)

  const handleFilter = (e) => {
    const newList = [...filterArray]
    const { innerText } = e.target
    if(newList.includes(innerText)) return
    newList.push(innerText)
    setFilterArray(newList) 
  }

  const deleteItem = (index) => {
    const newList = [...filterArray]
    const isDelete = newList.splice(index, 1)
    setFilterArray(newList)
    console.log('delete:: ', newList, isDelete)
  }

  const propsData = {
    filterArray: filterArray,
    setFilterArray: setFilterArray,
    handleFilter: handleFilter,
    deleteItem: deleteItem,
    setFilterData: setFilterData,
    data: data
  }

  useEffect(()=>{
    const dataWithTags = [...filterData]
    dataWithTags.map(item=> item.tags = [item.level, item.role, ...item.languages, ...item.tools] )

    filterArray.forEach(filterItem=>{
      setFilterData(dataWithTags.filter(item=>{return item.tags.includes(filterItem)}))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filterArray]) 

  return (
    <div className="main-content">
      <FilterBar myProps={propsData}></FilterBar>
      <UserContent data={filterData} imgArr={imgArray} myProps={propsData}></UserContent>
    </div>
  );
}

export default App;
