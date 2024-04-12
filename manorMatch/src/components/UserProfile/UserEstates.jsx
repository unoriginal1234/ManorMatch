/* eslint-disable react/prop-types */
const UserEstates = ({ userAddresses }) => {

  return (
    <div className="p-6 bg-gray-900 w-full flex">

      {userAddresses.map((address, i) => {

      return (
        <div key={i} className="bg-mmcream rounded-lg shadow-md p-4 mb-4 text-mmblue w-1/3 m-2">
          <div className="border border-mmblue rounded flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">{address.address1}</h2>
            <h2 className="text-xl font-semibold mb-2">{address.address2}</h2>
            <div className="flex">
              <h2 className="text-xl font-semibold mb-2 mr-1">{address.city}, </h2>
              <h2 className="text-xl font-semibold mb-2 mr-3">{address.state}</h2>
              <h2 className="text-xl font-semibold mb-2">{address.zip}</h2>
            </div>
          </div>
        </div>
      )})}
  </div>

  );
}

export default UserEstates;