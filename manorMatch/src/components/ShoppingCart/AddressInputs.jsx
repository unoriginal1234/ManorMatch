import React, { useState } from 'react';

const AddressInputs = () => {
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    telephoneNumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (propName, value) => {
    setAddress({ ...address, [propName]: value });
  };

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <label htmlFor="firstName" className='block text-sm font-medium text-mmblue'>First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder='First Name'
          value={address.firstName}
          onChange={e => handleChange('firstName', e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
      </div>
      <div>
        <label htmlFor="lastName" className='block text-sm font-medium text-mmblue0'>Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder='Last Name'
          value={address.lastName}
          onChange={e => handleChange('lastName', e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
      </div>
      <div>
        <label htmlFor="telephoneNumber" className='block text-sm font-medium text-mmblue'>Telephone Number</label>
        <input
          id="telephoneNumber"
          type="tel"
          placeholder='Telephone Number'
          value={address.telephoneNumber}
          onChange={e => handleChange('telephoneNumber', e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
      </div>
      <div>
        <label htmlFor="address1" className='block text-sm font-medium text-mmblue'>Address 1</label>
        <input
          id="address1"
          type="text"
          placeholder='Address 1'
          value={address.address1}
          onChange={e => handleChange('address1', e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
      </div>
      <div>
        <label htmlFor="address2" className='block text-sm font-medium text-mmblue'>Address 2</label>
        <input
          id="address2"
          type="text"
          placeholder='Address 2'
          value={address.address2}
          onChange={e => handleChange('address2', e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div>
          <label htmlFor="city" className='block text-sm font-medium text-mmblue'>City</label>
          <input
            id="city"
            type="text"
            placeholder='City'
            value={address.city}
            onChange={e => handleChange('city', e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div>
          <label htmlFor="state" className='block text-sm font-medium text-mmblue'>State</label>
          <input
            id="state"
            type="text"
            placeholder='State'
            value={address.state}
            onChange={e => handleChange('state', e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div>
          <label htmlFor="zip" className='block text-sm font-medium text-mmblue'>Zip</label>
          <input
            id="zip"
            type="text"
            placeholder='Zip'
            value={address.zip}
            onChange={e => handleChange('zip', e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
      </div>
    </div>
  );
}

export default AddressInputs;
