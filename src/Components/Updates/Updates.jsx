import React from 'react'
import "./updates.css"
import { UpdatesData } from '../../Data/Data'

const Updates = () => {
  return (
    <div className="Updates">
      <h1>Updates</h1>
      {UpdatesData.map((update)=>{
        return(
          <div className="update">
            <img src={update.img} alt="" />
            <div className="noti">
              <div style={{marginBottom:"0.5rem"}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Updates