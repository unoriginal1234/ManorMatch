const AddressType = ({ setAddressType, goToNextPage }) => {

  const handleClick = (type) => {
    setAddressType(type);
    goToNextPage();
  }

  return (
      <div className="relative w-1/2 h-3/5 bg-mmblue rounded shadow-lg h-quto mx-auto flex items-center justify-center space-y-10 font-thin !min-w-max">
          <div><button
            className="bg-transparent text-white p-2 rounded h-20 w-64 text-2xl hover:underline"
            onClick={() => handleClick('enter')}>
            Enter address
          </button></div>
          <div className=" h-3/4 border-r bg-mmsand"></div>
          <div><button
            className="bg-transparent text-white p-2 rounded h-20 w-64 text-2xl hover:underline"
            onClick={() => handleClick('select')}>
            Select from saved addresses
          </button></div>
      </div>
  )
}

export default AddressType;
