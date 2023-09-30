import React from "react";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col gap-4 flex-1">
          <input
            id="name"
            type="text"
            placeholder="Name"
            required
            className="border p-3 rounded-lg"
          />
          <textarea
            id="description"
            type="text"
            placeholder="Description"
            required
            className="border p-3 rounded-lg"
          />
          <input
            id="address"
            type="text"
            placeholder="Address"
            required
            className="border p-3 rounded-lg"
          />

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sell" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-lg"
                type="number"
                id="bedroom"
                min={1}
                max={10}
                required
              />
              <span>Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-lg"
                type="number"
                id="bathroom"
                min={1}
                max={10}
                required
              />
              <span>Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-lg"
                type="number"
                id="bedroom"
                min={1}
                max={10}
                required
              />
              <p className="flex flex-col items-center">
                <span className="font-semibold">Regular Price</span>
                <span className="text-sm">(Rs / Month)</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-lg"
                type="number"
                id="bedroom"
                min={1}
                max={10}
                required
              />
              <p className="flex flex-col items-center">
                <span className="font-semibold">Discounted Price</span>
                <span className="text-sm">(Rs / Month)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Image:
            <span className="font-normal text-gray-600">
              The first imange will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 rounded uppercase hover:shadow-lg disabled:opacity-80 text-green-700 border border-green-700">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
