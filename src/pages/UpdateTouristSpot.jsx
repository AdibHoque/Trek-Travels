import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../AuthProvider";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";

export default function UpdateTouristSpot() {
  const {user} = useContext(AuthContext);
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.email != email) {
      navigate("/");
    }
  }, [user, navigate]);

  const data = useLoaderData();
  const {
    _id,
    tourists_spot_name,
    image,
    short_description,
    country_name,
    average_cost,
    location,
    total_visitors_per_year,
    seasonality,
    travel_time,
    email,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = user.displayName;
    const email = user.email;
    const image = form.get("photo");
    const tourists_spot_name = form.get("tourists_spot_name");
    const country_name = form.get("country_name");
    const location = form.get("location");
    const short_description = form.get("short_description");
    const average_cost = form.get("average_cost");
    const seasonality = form.get("seasonality");
    const travel_time = form.get("travel_time");
    const total_visitors_per_year = form.get("total_visitors_per_year");

    const data = {
      image: image,
      tourists_spot_name: tourists_spot_name,
      country_name: country_name,
      location: location,
      short_description: short_description,
      average_cost: average_cost,
      seasonality: seasonality,
      travel_time: travel_time,
      total_visitors_per_year: total_visitors_per_year,
      email: email,
      username: username,
    };
    fetch(`http://localhost:5000/touristspots/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        alert("Done");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="py-4 text-5xl font-bold text-center text-green-500 bg-base-200 animate__animated animate__bounce font-merriweather banner-font">
        Update Tourist Spot
      </h1>
      <div className="hero min-h-[86vh] bg-base-200 animate__animated animate__slideInDown">
        <div className="w-full hero-content">
          <div className="w-full max-w-lg border-2 border-green-500 rounded-none shadow-2xl card bg-base-100">
            <form onSubmit={handleUpdate} className="p-6">
              <div className="flex flex-col gap-x-6 md:flex-row">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    value={user.displayName}
                    placeholder={user.displayName}
                    name="username"
                    className="rounded-none input input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder={email}
                    value={user.email}
                    name="email"
                    className="rounded-none input input-bordered"
                    disabled
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="url"
                  defaultValue={image}
                  name="photo"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tourists Spot Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={tourists_spot_name}
                  name="tourists_spot_name"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>
                <select
                  name="country_name"
                  required
                  className="rounded-none select select-bordered"
                >
                  <option disabled defaultValue={country_name}>
                    {country_name}
                  </option>
                  <option>Bangladesh</option>
                  <option>Thailand</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Vietnam</option>
                  <option>Cambodia</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  defaultValue={location}
                  name="location"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  defaultValue={short_description}
                  name="short_description"
                  className="overflow-x-scroll rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="flex flex-col gap-x-6 md:flex-row">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Average Cost</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={average_cost}
                    name="average_cost"
                    className="rounded-none input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seasonality</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={seasonality}
                    name="seasonality"
                    className="rounded-none input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-x-6 md:flex-row">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Travel Time</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={travel_time}
                    name="travel_time"
                    className="rounded-none input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Visitors Per Year</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={total_visitors_per_year}
                    name="total_visitors_per_year"
                    className="rounded-none input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="mt-2 form-control">
                <button className="font-bold bg-green-500 rounded-none btn text-gray-950 hover:text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
