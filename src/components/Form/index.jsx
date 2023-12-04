import React from 'react'

const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const user = Object.fromEntries(form.entries())
    addUser(user)
  }
  return (
    <form onSubmit={handleSubmit} className='my-5'>
      <div>
        <label htmlFor='name'>İsim</label>
        <input
          name='name'
          className='form-control'
          placeholder='örn:Ali'
          id='name'
          type='text' />
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          className='form-control'
          placeholder='örn:aliberk@gmail.com'
          id='email'
          type='email' />
      </div>

      <div>
        <label htmlFor='age'>Yaş</label>
        <input
          name='age'
          className='form-control'
          placeholder='örn:39'
          id='age'
          type='number' />
      </div>
      <div className='d-flex justify-content-end my-4'>
        <button type='submit' className='btn btn-primary'>Ekle</button>
      </div>
    </form>
  )
}

export default Form
