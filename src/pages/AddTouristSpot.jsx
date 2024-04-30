import {useContext} from "react";
import {AuthContext} from "../AuthProvider";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function AddTouristSpot() {
  const {user} = useContext(AuthContext);

  const handleAdd = (e) => {
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
    fetch("https://assignment-10-api-peach.vercel.app/touristspots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Added Tourist Spot!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="py-4 text-5xl font-bold text-center text-green-500 bg-base-200 animate__animated animate__bounce font-merriweather banner-font">
        Add Tourist Spot
      </h1>
      <div className="hero min-h-[86vh] bg-base-200 animate__animated animate__slideInDown">
        <div className="w-full hero-content">
          <div className="w-full max-w-lg border-2 border-green-500 rounded-none shadow-2xl card bg-base-100">
            <form onSubmit={handleAdd} className="p-6">
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
                    placeholder={user.email}
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
                  placeholder="Image URL (Recommended size 1200x800)"
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
                  placeholder="Name of the Tourist Spot"
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
                  <option disabled selected>
                    Country Name
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
                  placeholder="Location of the Tourist Spot"
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
                  placeholder="Short Description of the Tourist Spot"
                  name="short_description"
                  className="rounded-none input input-bordered"
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
                    placeholder="Average Cost"
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
                    placeholder="Best Season to Visit"
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
                    placeholder="Travel Time"
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
                    placeholder="Total Visitors Per Year"
                    name="total_visitors_per_year"
                    className="rounded-none input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="mt-2 form-control">
                <button className="font-bold bg-green-500 rounded-none btn text-gray-950 hover:text-white">
                  Add Tourist Spot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
