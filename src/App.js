import React, { useEffect, useState } from 'react'
import './App.css';



function App(){

// variable declaration
  const [name , setName] = useState('');
  const [userName ,setUserName ] = useState('');
  const [followers, setFollowers] = useState('');
  const [following ,setFollowing] = useState('');
  const [repos , setRepos] = useState('');
  const [avatar , setAvatar] = useState('');
  const [userInput , setUserInput] = useState('');
  const [error , setError] = useState('');
  const [profile , setProfile] = useState('');
  

  // effect hook
  useEffect(()=>{
    fetch(`https://api.github.com/users${userInput}`)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  },[])

  const setData = ({name, login, followers , following , public_repos , avatar_url,html_url}) =>{
    setName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
    setProfile(html_url)
  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const test=(e)=>{
    e. preventDefault();
    window.location.href=`https://api.github.com/users/${profile}`;
  }

  
  const handleSubmit = (e) => {
    e. preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if(data.message){
        setError(data.message)
      }else{
      setData(data);
      setError(null);
      }
    })
  }

  
  
    return (
      <div>
          <div className= "navbar">
            Github Search
          </div>
          <div className="search">
            <form className="ui form"  onSubmit={handleSubmit}  >
                <div className="field">
                  <label>Name</label>
                  <input type="text" name="github user" placeholder="name" onChange={handleSearch}/>
                </div>
                <button className="ui button" type="submit">Submit</button>
              </form>
          </div>

          {error ? (<h1>error</h1>) : (<div className="cardi">

          <div className="ui card">
            <div className="image">
              <img src={avatar}/>
            </div>
            <div className="content">
              <a className="header">{name}</a>
              <div className="description">{userName}</div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                {followers} followers
              </a>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                {following} following
              </a>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                {repos} Repository
              </a>
            </div>
            <button className="ui button btn" target="_blank" onClick={test} type="submit">See profile</button>
          </div>
          </div>
          )}

          


      </div>
    )
  
}

export default App;
