import {useContext} from "react";
import {AuthContext} from "../AuthProvider";

export default function AddTouristSpot() {
  const {user} = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const photo = form.get("photo");
  };
  return (
    <>
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
                  name="country"
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
                    type="text"
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
                    type="text"
                    placeholder="Total Visitors Per Year"
                    name="totaVisitorsPerYear"
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
