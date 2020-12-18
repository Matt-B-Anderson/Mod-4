import React from 'react'
import Form from './Form'
import UgliesList from './UgliesList'


function App() {
  return (
    <main>
      <section className='form-holder'>
        <Form />
      </section>
      <section className='uglies-holder'>
        <UgliesList />
      </section>
    </main>
  )
}

export default App