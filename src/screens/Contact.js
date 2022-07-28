import React from "react";
import './contact.css'

const Contact = () => {
  return (
    <div className="container ">
      <h3 className='text-center "text-uppercase pt-4'>contact us</h3>
      <div className="mx-auto contact-form-container shadow-sm p-4 rounded text-muted">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Phone number
            </label>
            <input type="numeric" className="form-control" id="number" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="timing" className="form-label">
              when can we reach you?
            </label>
            <select clasName="form-select" id="timing">
              <option defaultValue="">Best time to reach</option>
              <option value="M">Morning</option>
              <option value="A">Afternoon</option>
              <option value="E">Evening</option>
            </select>
          </div>

          <div className="mb-3">
          <label required htmlFor="query" className="form-label">
              Enter your query
            </label>
            <textarea className="form-control" id="query"></textarea>
          </div>


          <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </div>
     
        </form>
      </div>
    </div>
  );
};

export default Contact;
