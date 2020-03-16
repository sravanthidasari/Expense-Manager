import React from 'react';

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3003'
// } else {
  baseURL = 'https://git.heroku.com/expense-manager-one.git'
}

// console.log('current base URL:', baseURL)

class expenseManager extends React.Component {
    render() {
        return(
            <div>
            <h1> Hello World</h1>
            </div>
        )
    }
}

export default expenseManager;
