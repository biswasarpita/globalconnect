import React from 'react';

export default function footer() {
  return (
    <footer className="fixed-bottom bg-dark text-white mt-5 p-3 text-center">
    Copyright &copy; {new Date().getFullYear()} DevConnector
  </footer>
  )
}
