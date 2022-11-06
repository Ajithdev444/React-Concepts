import React from 'react'

const Planet = () => {
    const planets = [
        { name: 'mars' , isGasPlanet:false},
        { name: 'Earth' , isGasPlanet:false},
        { name: 'Jupiter' , isGasPlanet:true},
        { name: 'Venus' , isGasPlanet:false},
        { name: 'Neptune' , isGasPlanet:true},
        { name: 'Uranus' , isGasPlanet:true}
    ]
   
    return(
        <div>
            {planets.map((planet) =>{
                return(
                 planet.isGasPlanet && <div> {planet.name}</div>
           ) })}
        </div>
    )
}
export default Planet