import { useRef } from "react";
import "./App.css";
import logo from "./assets/Mask group.svg";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // useState 
  const [error, setError] = useState({
    name: '',
    nameError:'',
    email: '',
    emailError:'',
    phone: '',
    phoneError:'',
    country: '',
    countryError:''
  })

  // useRef
  const nameRef = useRef('');
  const phoneRef = useRef('');
  const emailRef = useRef('');
  const countryRef = useRef('');

  function validate(nameRef, phoneRef, emailRef, countryRef, error) {

    
    if (!error.name) {
      setError({...error, nameError:"Name is empty!"});
      return false;
    } else {
      setError({...error, nameError:""})
    }
    
    if (nameRef.current.length < 3) {
      alert("3 ta harfdan ko'p bo'lishi kerak!");
      nameRef.current.focus();
      return false;
    }
    
    if (!error.email) {
      setError({...error, emailError:"Email is empty!"});
      return false;
    } else {
      setError({...error, emailError:""})
    }

    if (emailRef.current.value.length < 3 ) {
      alert("3 ta harfdan ko'p bo'lishi kerak!");
      emailRef.current.focus();
      return false;
    }
    
    if (!error.phone) {
      setError({...error, phoneError:"Phone number is empty!"});
      return false;
    } else {
      setError({...error, phoneError:""})
    }

    if (phoneRef.current.value.length < 3 ) {
      alert("3 ta harfdan ko'p bo'lishi kerak!");
      phoneRef.current.focus();
      return false;
    }
    
    if (!error.country) {
      setError({...error, countryError:"Country is empty!"});
      return false;
    } else {
      setError({...error, countryError:""})
    }

    if (countryRef.current.value.length < 3) {
      alert("3 ta harfdan ko'p bo'lishi kerak!");
      countryRef.current.focus();
      return false;
    }

      return true;
  }

function  handleSubmit(e) {
  e.preventDefault();
  if (validate(nameRef, phoneRef, emailRef, countryRef, error)) {
    alert("Success");
  }
}

  return (
    <>
      <div className="container">
        <header className="header">
          <nav className="navbar">
            <a href="#">
              <img src={logo} alt="logo image" />
            </a>

            <ul className="list-group">
              <li className="list">
                <a href="#">Vakansiyalar</a>
              </li>
              <li className="list">
                <a href="#">Kandidatlar</a>
              </li>
              <li className="list">
                <a href="#">Kompaniyalar</a>
              </li>
              <li className="list">
                <a href="#">Xizmatlar</a>
              </li>
              <li className="list">
                <a href="#">Ta’lim</a>
              </li>
            </ul>

            <span>
              <select name="language" id="select">
                <option value="O'zb">O'zb</option>
              </select>
              <button className="button">Boshlash</button>
            </span>
          </nav>
        </header>
        <body className="body">
          <form className="main" onSubmit={handleSubmit}>
            <h1 className="title">Kompaniya ma’lumotlari</h1>
            <p className="description">
              Kompaniya haqidagi ma’lumotlarni kiriting
            </p>

            <label htmlFor="name">Kompaniya nomi *</label>
            <input
              className="input"
              id="name"
              type="text"
              placeholder="Kompaniya nomi"
              ref={nameRef}
              value={error.name}
              onChange={(e) => {setError({...error, name:e.target.value})}}
            />
            {
              error.nameError && <p className="name-error">{error.nameError}</p>  
            }

            <label htmlFor="email">Email *</label>
            <input
              className="input"
              id="email"
              type="email"
              placeholder="Email"
              ref={emailRef}
              value={error.email}
              onChange={(e) => {setError({...error, email:e.target.value})}}
            />
            {
              error.emailError && <p className="name-error">{error.emailError}</p>  
            }

            <label htmlFor="number">Telefon raqami *</label>
            <input
              className="input"
              id="number"
              type="number"
              placeholder="UZ +9989"
              ref={phoneRef}
              value={error.phone}
              onChange={(e) => {setError({...error, phone:e.target.value})}}
            />
              {
                error.phoneError && <p className="name-error">{error.phoneError}</p>  
              }
            

            <label htmlFor="name">Davlat *</label>
            <select className="input" name="country" id="name" value={error.country} ref={countryRef} onChange={(e) => {setError({...error, country:e.target.value})}}>
              <option  defaultChecked value="">Davlatni Tanlang</option>
              <option value="UZB">UZB</option>
              <option value="USA">USA</option>
              <option value="ENG">ENG</option>
              <option value="RUS">RUS</option>
            </select>
            {
              error.countryError && <p className="name-error">{error.countryError}</p>  
            }

            <button className="submit">Submit</button>
          </form>
        </body>
      </div>
    </>
  );
}

export default App;