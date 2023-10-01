import React from "react";
import { forwardRef } from "react";

const Card = forwardRef(({name, branch, address, phone, schedule, img},ref) =>{
    schedule = schedule.split(",");
    return(
        <div ref={ref} className="card" >
            <h3>{name} - <span>{branch}</span></h3>
            <p>Address: <span>{address}</span></p>
            <p>Phone: <span>{phone}</span></p>
            <p>{schedule[0]}<br/>{schedule[1]}</p>
            <img src={img}  alt="..."/>
        </div>
    );
});

export default function CardSection({locations, locationsRef}) {
    let index = 0;
    return(
        <div className="card-section">
            <div className="section-header">
                <h1>Our Coffee Shop Locations:</h1>
                <p>
                Explore our charming coffee shop branches across the city. 
                Each location offers a unique blend of flavors and a 
                cozy atmosphere, perfect for your coffee moments.
                </p>
            </div>

            <div className="section-cards">
                {locations.map(location => {
                    return location.branches.map( (branch) =>{
                        let current = index;
                        index++;
                        return <Card
                        key={current}
                        ref={element => locationsRef.current[current] = element}
                        name={location.name}
                        branch={branch.branch}
                        address={branch.address} 
                        phone={branch.phone} 
                        schedule={branch.schedule}
                        img={location.img}
                        />
                    });
                })}
            </div>
        </div>
    );
    
}