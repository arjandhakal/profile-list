import React from 'react';
//Custom Hook that deals with API fetch calls
import useFetch from './utils/useFetch';
// Loading Spinner
import Spinner from './components/spinner/spinner.component';
//Profile Component to display list of user information
import Profile from './components/profiles/profiles.component';

//URL FOR THE LIST OF PHOTOS
const url="https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json"

function App() {
  //calling the fetch hook and saving the returned values
  const { state } = useFetch(url);
  const {loading,error,data: profiles} = state;


  if(error) return <main>Oops</main>
  if(loading) return <main><Spinner/></main>


  return (
    <main>
      <section className='container'>
        <div className="title">
          <h2>List of Profiles</h2>
        <div className="underline"/>
        </div>
        <Profile profiles={profiles}/>
      </section>
    </main>
  )
}

export default App;
