import React from "react";

function DisplayRadian({ planetSettings, planetDegrees, planetRadians }) {
  return (
    <div className="px-12 mb-20 mt-5">
    <div className="display-board text-center">
      {/* <div className="board-head">Real-time Planet Position Data</div> */}

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Orbit</th>
            <th>Planet</th>
            <th>Name</th>
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
                  className="planet small"
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
    </div>
    </div>
  );
}

export default DisplayRadian;
