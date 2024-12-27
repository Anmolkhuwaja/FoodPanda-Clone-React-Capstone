import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone is required"),
});

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert("Order placed successfully!");
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto p-4 bg-white shadow rounded-lg"
    >
      <h2 className="text-lg font-bold mb-4">Address Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          {...register("name")}
          className="w-full p-2 border rounded"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          {...register("email")}
          className="w-full p-2 border rounded"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          {...register("address")}
          className="w-full p-2 border rounded"
          placeholder="Enter your address"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          {...register("phone")}
          className="w-full p-2 border rounded"
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Place Order
      </button>
    </form>
  );
};

export default AddressForm;
