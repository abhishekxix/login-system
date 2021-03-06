import {useEffect, useState} from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  const [formType, setFormType] = useState('signup');
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [token, setToken] = useState('');
  const [greetingName, setGreetingName] = useState(
    localStorage.getItem('greetingName'),
  );

  const state = {
    name,
    email,
    phoneNumber,
    password,
    confirmationPassword,
    token,
    setName,
    setEmail,
    setPhoneNumber,
    setPassword,
    setConfirmationPassword,
    setToken,
    formType,
    setFormType,
    isLoggedIn,
    setIsLoggedIn,
    greetingName,
    setGreetingName,
  };

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('greetingName', isLoggedIn ? greetingName : '');
  }, [isLoggedIn]);

  return (
    <>
      <Navbar {...state} />
      <Form {...state} />
    </>
  );
}

export default App;
