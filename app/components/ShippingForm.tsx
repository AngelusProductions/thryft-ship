"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Modal from './Modal';
import ConfirmationPage from './ConfirmationPage';

interface FormData {
  instagramHandle: string;
  product: string;
  email: string;
  confirmEmail: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

const ShippingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    instagramHandle: '',
    product: '',
    email: '',
    confirmEmail: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);

  const validateInstagramHandle = (handle: string) => {
    const regex = /^[a-zA-Z0-9._]+$/;
    return regex.test(handle);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    let fieldErrors: Partial<FormData> = {};
    switch (name) {
      case 'instagramHandle':
        if (!validateInstagramHandle(value)) {
          fieldErrors.instagramHandle = 'Invalid Instagram handle.';
        } else {
          delete fieldErrors.instagramHandle;
        }
        break;
      case 'product':
        if (!value.trim()) {
          fieldErrors.product = 'Product is required.';
        } else {
          delete fieldErrors.product;
        }
        break;
      case 'email':
        if (!validateEmail(value)) {
          fieldErrors.email = 'Invalid email address.';
        } else {
          delete fieldErrors.email;
        }
        break;
      case 'confirmEmail':
        if (value !== formData.email) {
          fieldErrors.confirmEmail = 'Emails do not match.';
        } else {
          delete fieldErrors.confirmEmail;
        }
        break;
      case 'firstName':
        if (!value.trim()) {
          fieldErrors.firstName = 'First name is required.';
        } else {
          delete fieldErrors.firstName;
        }
        break;
      case 'lastName':
        if (!value.trim()) {
          fieldErrors.lastName = 'Last name is required.';
        } else {
          delete fieldErrors.lastName;
        }
        break;
      case 'address1':
        if (!value.trim()) {
          fieldErrors.address1 = 'Address Line 1 is required.';
        } else {
          delete fieldErrors.address1;
        }
        break;
      case 'city':
        if (!value.trim()) {
          fieldErrors.city = 'City is required.';
        } else {
          delete fieldErrors.city;
        }
        break;
      case 'state':
        if (!value.trim()) {
          fieldErrors.state = 'State is required.';
        } else {
          delete fieldErrors.state;
        }
        break;
      case 'zip':
        if (!value.trim()) {
          fieldErrors.zip = 'Zip code is required.';
        } else {
          delete fieldErrors.zip;
        }
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldErrors,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const fieldErrors: Partial<FormData> = {};
    if (!validateInstagramHandle(formData.instagramHandle)) {
      fieldErrors.instagramHandle = 'Invalid Instagram handle.';
    }
    if (!formData.product.trim()) {
      fieldErrors.product = 'Product is required.';
    }
    if (!validateEmail(formData.email)) {
      fieldErrors.email = 'Invalid email address.';
    }
    if (formData.confirmEmail !== formData.email) {
      fieldErrors.confirmEmail = 'Emails do not match.';
    }
    if (!formData.firstName.trim()) {
      fieldErrors.firstName = 'First name is required.';
    }
    if (!formData.lastName.trim()) {
      fieldErrors.lastName = 'Last name is required.';
    }
    if (!formData.address1.trim()) {
      fieldErrors.address1 = 'Address Line 1 is required.';
    }
    if (!formData.city.trim()) {
      fieldErrors.city = 'City is required.';
    }
    if (!formData.state.trim()) {
      fieldErrors.state = 'State is required.';
    }
    if (!formData.zip.trim()) {
      fieldErrors.zip = 'Zip code is required.';
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      alert('Please fix the errors before submitting.');
      return;
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    setIsSummaryVisible(true);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!isSummaryVisible ? (
        <>
          <div className="bg-white p-6 rounded-lg w-[500px] max-w-2xl relative">
            <div className="h-[100px] text-right">
              <h1 className="absolute top-[10px] right-[10px] text-xl font-bold w-[40%]">
                Thank you for purchasing from <span className="text-blue-600">[thryfter]</span>
              </h1>
              <img src="/flightPath1.png" alt="Flight Path" className="absolute top-[50px] left-[-10px] mt-2 inline-block" />
              <img src="/logo.png" alt="Logo" className="absolute top-[100px] right-[50px] w-15 h-15 mt-2 inline-block" />
            </div>
            <h2 className="text-lg font-semibold mb-4 mt-12">Your Shipping Information</h2>
            <p className="mb-4 text-sm text-gray-600">
              Your Instagram Handle helps us match your address to your purchase. We will send your shipment tracking information to your email.
            </p>
            <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-6">
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4">
                <div className="space-y-1 w-full sm:w-1/2 relative">
                  <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-700">Instagram Handle</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">@</span>
                    <input
                      type="text"
                      name="instagramHandle"
                      id="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={handleChange}
                      className="w-full pl-8 p-2 border rounded"
                    />
                    {errors.instagramHandle && <p className="text-red-500 text-sm mt-1 absolute">{errors.instagramHandle}</p>}
                  </div>
                </div>
                <div className="space-y-1 w-full sm:w-1/2 relative">
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product(s)</label>
                  <input
                    type="text"
                    name="product"
                    id="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  {errors.product && <p className="text-red-500 text-sm mt-1 absolute">{errors.product}</p>}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4">
                <div className="space-y-1 w-full sm:w-1/2 relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1 absolute">{errors.email}</p>}
                </div>
                <div className="space-y-1 w-full sm:w-1/2 relative">
                  <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">Confirm Email</label>
                  <input
                    type="email"
                    name="confirmEmail"
                    id="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  {errors.confirmEmail && <p className="text-red-500 text-sm mt-1 absolute">{errors.confirmEmail}</p>}
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="space-y-1 w-1/2 relative">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1 absolute">{errors.firstName}</p>}
                </div>
                <div className="space-y-1 w-1/2 relative">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1 absolute">{errors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-1 relative">
                <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                <input
                  type="text"
                  name="address1"
                  id="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.address1 && <p className="text-red-500 text-sm mt-1 absolute">{errors.address1}</p>}
              </div>
              <div className="space-y-1 relative">
                <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Apartment, Suite, Etc. (opt)</label>
                <input
                  type="text"
                  name="address2"
                  id="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.address2 && <p className="text-red-500 text-sm mt-1 absolute">{errors.address2}</p>}
              </div>
              <div className="flex space-x-4">
                <div className="space-y-1 w-1/3 relative">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full p-2 border rounded"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1 absolute">{errors.city}</p>}
                </div>
                <div className="space-y-1 w-1/3 relative">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="w-full p-2 border rounded"
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1 absolute">{errors.state}</p>}
                </div>
                <div className="space-y-1 w-1/3 relative">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Zip Code"
                    className="w-full p-2 border rounded"
                  />
                  {errors.zip && <p className="text-red-500 text-sm mt-1 absolute">{errors.zip}</p>}
                </div>
              </div>
              <div className="flex space-y-1 w-full justify-center">
                <button type="submit" className="mt-[50px] mb-[50px] px-6 py-2 bg-[#565BD7] text-white rounded">Submit</button>
              </div>
            </form>
            <p className="mt-4 text-center text-[#878787]">powered by Thryft Ship</p>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleModalSubmit}>
            <h3 className="text-lg font-semibold mb-4">Confirm Shipping Details</h3>
            <p>Full Name: {formData.firstName} {formData.lastName}</p>
            <p>Address Line 1: {formData.address1}</p>
            <p>Address Line 2: {formData.address2}</p>
            <p>Email: {formData.email}</p>
            <p>Product: {formData.product}</p>
          </Modal>
        </>
      ) : (
        <ConfirmationPage formData={formData} />
      )}
    </div>
  );
};

export default ShippingForm;
