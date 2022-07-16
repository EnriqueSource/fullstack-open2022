import React from "react";

const Country = ({country}) => {
    return (
        <div>
            <p><strong>{country.name}</strong></p>
            <p>{country.area}</p>
            <p>{country.capital}</p>
        </div>
    )
}

export default Country;
