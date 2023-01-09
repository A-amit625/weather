import axios from "axios"
import React, { useEffect, useState } from "react"
const Tempapp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")
    const[myData,setMyData]=useState([])
    useEffect(() => {
        const fetchApi = async () => {
            // const url="https://www.boredapi.com/api/activity"
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ad74c34e0102b57a937406475d5fb4f8&units=metric`
            const response = await fetch(url)
            const resJson = await response.json()
            console.log(resJson);
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])
   useEffect(()=>{
    axios.get("https://api.nationalize.io?name=nathaniel")
    .then((res)=>
        console.log("amit",res.data)
        // setMyData(res.data)
    )

   },[])
    return (
        <div className="container">

            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" onChange={(event) => {
                        setSearch(event.target.value)

                    }} />
                </div>
                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <div className="info">
                        <h2 className="location">
                            <i className="fa-solid fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp">{city.temp}°cel</h1>
                        <h3 className="tempmin_max">Min:{city.temp_min}°cel | Max:{city.temp_min}°cel</h3>

                    </div>
                )}

                <div className="wave1"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>


            </div>

        </div>
        
    )
}
export default Tempapp;