import React from "react";

function DisplayRadian({ planetSettings, planetDegrees, planetRadians }) {
  return (
 
        <table className="table-auto w-full text-center ">
          <thead>
            <tr>
              <th>Orbit</th>
              <th><div className="planet tiny planet-empty mx-2"></div></th>
              <th>Planet</th>
              <th>Degree</th>
              <th>Radian</th>
            </tr>
          </thead>
          <tbody>
            {planetSettings.map((planet, index) => (
              <tr key={index} className="">
                <td>{index + 1}</td>
                <td className=" ">
                  <img
                    className="planet tiny"
                    src={`/image/${planet.name}.jpg`}
                    alt={planet.name}
                  />
                </td>
                <td className="col-span-2">{planet.name} </td>
                <td>{planetDegrees[`move${planet.name}`]?.toFixed(1)}</td>
                <td>{planetRadians[`move${planet.name}`]?.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
 
  );
}

export default DisplayRadian;
