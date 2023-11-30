import React from 'react'

const Home = () => {
const greetings = 'hello'
return <Page value={greetings} />}
function Page(props) {


  return<h2>{props.value}</h2>
}

export default Home
