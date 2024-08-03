import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e897fb47-ddba-4d77-85d4-2d748a8c4ed2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className='heading'>
        <h2>Contact us</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className='container'>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                name="firstName"
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                name="lastName"
                required
              />
            </div>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
              required
            />

            <label htmlFor="phoneNumber" className="form-label mt-3">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
              name="phoneNumber"
              required
            />

            <label htmlFor="company" className="form-label mt-3">Company</label>
            <input
              type="text"
              id="company"
              className="form-control"
              name="company"
            />

            <div className="mb-3 mt-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary button-contact">Submit</button>
          <button type="button" className="btn btn-primary Wbutton"><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
        </div>
      </form>
      <span className='form-submit'>{result}</span>
    </div>
  );
}
