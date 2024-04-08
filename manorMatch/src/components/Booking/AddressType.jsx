

const AddressType = ({ setAddressType, goToNextPage }) => {

  const handleClick = (type) => {
    setAddressType(type);
    goToNextPage();
  }

  return (
      <div className="relative w-1/2 h-1/2 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
          <button onClick={() => handleClick('enter')}>ENTER ADDRESS</button>
          <div> OR </div>
          <button onClick={() => handleClick('select')}>SELECT FROM SAVED ADDRESSES</button>
      </div>
  )
}

export default AddressType;
