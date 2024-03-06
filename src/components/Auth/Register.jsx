import {useState} from 'react'
import { useNavigate } from "react-router-dom";
function Register(props) {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });
  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', email: '', password: '' };
   

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    else if(formData.password.length<8)
    {
        newErrors.password = 'Password should contain atleast 8 characters';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(validateForm())
    {
       
        fetch(`http://localhost:3002/register`,{
            method:'POST',
            headers: { 'Accept': 'application/json',
                'Content-Type':'application/json',
                "Access-Control-Allow-Credentials": true},
            body: JSON.stringify(formData)
          }).then((res)=>res.json())
          .then((res)=>{
        props.setAuthenticated(true)
        navigate('/posts')
        console.log('Form submitted:', formData);
          }).catch((e)=>{
             console.log(e.message)
          })
    }
    else {
        console.log('Form validation failed');
      }
    // Add your registration logic here

  };

  return  (
       
    <div className="mx-auto h-fit w-fit relative z-40">
      <form className="bg-white p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-64 sm:w-80 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 
            ${errors.username ? 'border-red-500' : ''}`}
          />
         {errors.username && <p className='text-[12px] text-red-500 '>{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-64 sm:w-80 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
          />
            {errors.email && <p className='text-[12px] text-red-500 '>{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-64  sm:w-80 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
          />
             {errors.password && <p className='text-[12px] text-red-500 '>{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Register
        </button>
      </form>
    </div>
   
  )
}

export default Register


// src/components/RegistrationForm.js


