import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <div className='main'>
            <h1>Welcome</h1>
            <br></br>
            <h2>Happy Shopping</h2><br/>
          </div>
    <img
            className="shopping"
            src={"https://media.istockphoto.com/id/1369227756/photo/giggling-their-way-through-the-mall.jpg?b=1&s=170667a&w=0&k=20&c=OiDwC_sSwTJrNU63Wy0yNZHpvK6JLZabE43HUQU-SOw="}
            alt="logo"
          />
          <div className='fotter'>
<div className='content'>
  <h1>Thanks For Visiting Our Website</h1>
  <span>copyright2022</span>
</div>
          </div>
    </div>
  )
}

export default Home