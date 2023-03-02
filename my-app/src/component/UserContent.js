// import { useEffect } from "react"

const UserContent = ({ data, imgArr, myProps }) => {
  const { handleFilter } = myProps

  return (
    <div className="user-content">
      { data.map((item,index)=>{
        const addArray = [ item.level, item.role, ...item.languages, ...item.tools ]

        return (
          <div className="user" key={item.id}>
            <div className="describe-box">
              <div className="img">
                <img src={imgArr[item.id-1]} alt="" />
              </div>
              <div className="describe">
                <div className="company-bar">
                  <div className="company">{item.company}</div>
                  <div className="feature-box">
                    { item.new ? <div className="new-one">NEW!</div> : '' }
                    { item.featured ? <div className="new-featured">FEATURED</div> : '' }
                  </div>
                </div>
              <div className="level">{item.position}</div>
              <div className="charge">
                <div className="posted">{item.postedAt}</div>
                <div className="contract">{item.contract}</div>
                <div className="location">{item.location}</div>
              </div>
                </div>
              </div>
              <div className="tags">
                { addArray.map((item, index)=>{
                  return <div className="own-tag" key={index} onClick={handleFilter}>{item}</div>
                }) }
              </div>
            </div>
          )
      })
    }
    </div>
  )
}

export default UserContent