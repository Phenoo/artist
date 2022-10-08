import React from 'react'

const FormComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='form-component'>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input type="text" name="name" placeholder='first and last name *' required />
        </div>
        <div className="form-input">
          <input type="email" name="email" placeholder='Email *' required />
        </div>
        <div className="form-input">
          <select name="work" required placeholder='type of request *'>
            <option value="1">commission a work</option>
            <option value="2">interview</option>
            <option value="3">other</option>
          </select>
        </div>
        <div className="form-input">
          <textarea name="message" cols="10" rows="10" placeholder='Message *' id='message'></textarea>
        </div>
        <div className="form-input">
          <input type="checkbox" name="checkbox" id='checkbox' />
          <p>
        I have read the privacy policy and consent to the storage of my data in your records in accordance with the European Data Protection Regulation No. 679/2016, GDPR.
        </p>
        </div>
        <div>
          <button className="btn" type='submit'>
            send
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent