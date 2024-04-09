

const AddressType = ({ setAddressType, goToNextPage }) => {

  const handleClick = (type) => {
    setAddressType(type);
    goToNextPage();
  }

  return (
      <div className="relative w-1/2 h-1/2 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex flex-col">
          <button
            className="bg-mmcream text-black p-2 rounded h-16 w-64 text-2xl"
            onClick={() => handleClick('enter')}>
            Enter address
          </button>
          <div> OR </div>
          <button
            className="bg-mmcream text-black p-2 rounded h-16 w-64 text-2xl"
            onClick={() => handleClick('select')}>
            Select from saved addresses
          </button>
      </div>
  )
}

export default AddressType;
