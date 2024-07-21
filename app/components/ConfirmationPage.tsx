interface FormData {
  firstName: string;
  lastName: string;
  instagramHandle: string;
  email: string;
  product: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

interface ConfirmationPageProps {
  formData: FormData;
}

const ConfirmationPage = ({ formData }: ConfirmationPageProps) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4">
      <div className="text-center mb-8 flex items-center flex-col">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20" />
        <p className="text-lg sm:text-xl font-semibold w-full sm:w-[40%] text-center">
          Confirmation and tracking information will be sent to your email!
        </p>
      </div>
      <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md w-full sm:w-[500px] max-w-full text-left">
        <h3 className="text-base sm:text-lg font-semibold mb-4">Shipping Information</h3>
        <p><strong>Full Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong>Instagram Handle:</strong> @{formData.instagramHandle}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Product:</strong> {formData.product}</p>
        <p><strong>Address Line 1:</strong> {formData.address1}</p>
        <p><strong>Address Line 2:</strong> {formData.address2}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>Zip Code:</strong> {formData.zip}</p>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Are you a seller too? Check us out here <a href="https://yourlink.com" className="text-blue-600">[hyper link]</a>.
        </p>
      </div>
      <img src="/flightPath2.png" alt="Flight Path" className="absolute bottom-0 left-0 mb-4 mr-4 w-[90vw]" />
      <img src="/logo.png" alt="Logo" className="absolute mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20 right-4 sm:right-[50px] bottom-16 sm:bottom-[100px]" />
      <p className="absolute bottom-16 sm:bottom-[70px] right-0 mb-2 mr-2 text-sm text-gray-600">powered by Thryft Ship</p>
    </div>
  );
};

export default ConfirmationPage;
