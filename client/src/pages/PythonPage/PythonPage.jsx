import React from 'react'

export default function PythonPage() {
  return (
    <>
      <h1>Python</h1>
      python3 manage.py runserver

      <h5>Database</h5>
      python3 manage.py makemigrations<br />
      python3 manage.py migrate <br />
    </>
  )
}


