import React, {useEffect, useState} from 'react'
import "../styles/App.css"
import axios from 'axios'
const App = () => {

const [dataArray, setDataArray] = useState([]);

useEffect(() => {
  axios.get('https://60ef36aaf587af00179d3969.mockapi.io/fitbots/interview/articles')
    .then((res) => {
        setDataArray([...res.data])
        console.log(dataArray);
    })
}, [])

  return (
      <div className="row" style={{padding:20, backgroundColor:"#e6e6e6"}}>
      <div className="col-md-9 col-sm-12" style={{display:"flex", flexWrap: "wrap", justifyContent:"center"}}>
        {dataArray && dataArray.map((data,key) => (
        <div key={key} style={{textAlign: 'center', backgroundColor:"white", margin:10, height:"350px", borderRadius:10}}>
          <img src={data.banner_img} width="300px" height="200px" style={{borderTopLeftRadius:10, borderTopRightRadius:10}}/>
          <div style={{paddingTop:20}}>
          <h4>{data.headline}</h4>
          <h5>{data.createdAt}</h5>
          <h6>{data.publisher}</h6>
          </div>
        </div>
        ))}
      </div>
      <div className="col-md-3">
        {dataArray && dataArray.map((data,key) => (
        <div key={key} style={{backgroundColor:"white",margin:10, borderRadius:10, padding:10}}>
          <h3>{data.headline}</h3>
          <div className="row">
            <div className="col-8">
            <h5>{data.createdAt}</h5>
            <h6>{data.publisher}</h6>
            </div>
            <div className="col-4">
              <button style={{padding:5, borderRadius:5, backgroundColor:"#ff4d6a", color:"white", fontWeight:600, border:"none"}}>Category</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
} 

export default App
