const FilterBar = ({ myProps }) =>  {
  const { filterArray, setFilterArray, deleteItem, setFilterData, data } = myProps

  const resetFilter = () =>{
    setFilterArray([])
    setFilterData(data)
  }

  return (
    <div className="filter-content">
      <div className="label-box">
        { filterArray.lenght !== 0 ? filterArray.map((item,index)=>{
          return (<div className="label" key={index}>
            <span className="describe">{item}</span>
            <span className="cancel" onClick={()=>{deleteItem(index)}}>X</span>
          </div>)
        }) : '' }
        
      </div>
      <div className="clear-all" onClick={resetFilter}>Clear</div>
    </div>
    )
}

export default FilterBar