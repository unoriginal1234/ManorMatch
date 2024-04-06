

const AddressType = ({ setAddressType, goToNextPage }) => {

  const handleClick = (type) => {
    setAddressType(type);
    goToNextPage();
  }

  return (
      <div>
          <button onClick={() => handleClick('enter')}>ENTER ADDRESS</button>
          <div> OR </div>
          <button onClick={() => handleClick('select')}>SELECT FROM SAVED ADDRESSES</button>
      </div>
  )
}

export default AddressType;
