import {useState} from 'react'
import { useNavigate } from "react-router-dom";
function Login(props) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
   
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
  
    email: '',
    password: '',
  });
  const [errorMessage,setErrorMessage]=useState('')
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };
   

  
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
    fetch(`https://post-app-kappa.vercel.app/login`,{
            method:'POST',
            headers: { 'Accept': 'application/json',
                'Content-Type':'application/json',
                "Access-Control-Allow-Credentials": true,
                'Access-Control-Allow-Origin':'*'
              },
            body: JSON.stringify(formData)
          }).then((res)=>res.json())
          .then((res)=>{
            console.log(res)
            if(res.message==='User not found'  || res.message==='Incorrect password')
            {
                setErrorMessage(res.message)
            }
            else{
        props.setAuthenticated(res.accessToken)
        navigate('/posts')
        console.log('Form submitted:', formData);
            }
          }).catch((e)=>{
           
          
              setErrorMessage('Login failed please try again')
             
            // props.setReg(true)
          })
        }
  
  };

  return  (
       
    <div className="mx-auto h-fit w-fit relative z-40">
      <form className="bg-white bg-opacity-75 p-8 shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Login</h2>
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
            className={`w-64 sm:w-80 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500
            ${
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
            className={`w-64  sm:w-80 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500
            ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
           {errors.password && <p className='text-[12px] text-red-500 '>{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Login
        </button>
        {errorMessage && (
          <p className="mx-auto text-red-500 mt-4">{errorMessage}</p>
        )}
      </form>
     
    </div>
   
  )
}

export default Login
