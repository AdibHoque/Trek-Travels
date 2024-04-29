import {useEffect, useState} from "react";

function TD({spot, country, cost}) {
  return (
    <tr>
      <td>{spot}</td>
      <td>{country}</td>
      <td>{cost}</td>
      <td className="flex items-center justify-center gap-2">
        <button className="border-none btn btn-warning btn-xs">Update</button>
        <button className="bg-red-600 border-none btn btn-error btn-xs">
          Detele
        </button>
      </td>
    </tr>
  );
}

export default function MyList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/touristspots/")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="px-4 overflow-x-auto md:px-24 min-h-[87vh]">
        <h1 className="my-8 text-5xl font-bold text-center text-green-500 animate__animated animate__bounce font-merriweather banner-font">
          My List
        </h1>
        <table className="mx-auto table-xs md:table-md lg:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Tourist Spot Name</th>
              <th>Country</th>
              <th>Average Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((d) => (
              <TD
                key={d._id}
                spot={d.tourists_spot_name}
                country={d.country_name}
                cost={d.average_cost}
              ></TD>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
