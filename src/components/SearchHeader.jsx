import React from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs'
import {Link, useNavigate, useParams} from 'react-router-dom'

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = React.useState('');
  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }
  React.useEffect(() => setText(keyword || ''), [keyword])
  return (
   <header>
     <Link to='/'>
       <BsYoutube/>
       <h1>Youtube</h1>
     </Link>
     <form onSubmit={handleSearchClick}>
       <input type="text" placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)}/>
       <button><BsSearch/></button>
     </form>
   </header>
  );
}