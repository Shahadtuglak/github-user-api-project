import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json())
  }

  return (
    <>
      <div>
        <h1>GITHUB USERS</h1>
      </div>
      <div className='mainContainer'>

        {
          users.map((user) => {
            const { login, id, avatar_url, html_url, name } = user;

            return (
              <div className="card container cardSection" key={id} >
                <div>
                  <img src={avatar_url} className="card-img-top img" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-title">{login}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href={html_url} className="btn btn-lg btn-danger">Profile</a>
                  </div>
                </div>
              </div>
            )
            // return (
            //   <div key={id} className='cardSection'>
            //     <div className='card'>
            //       <img src={avatar_url} alt="profile" />
            //       <h1>{login}</h1>
            //       <a href={html_url}>Profile</a>
            //     </div>
            //   </div>
            // )
          })
        }
      </div>
      <footer>
        <h4>DESIGN BY
          <a target=" _blank" href="https://shahadtuglak.netlify.app"> SHAHAD
            TUGLAK🖤</a>
        </h4>
      </footer>
    </>


  )
}

export default App