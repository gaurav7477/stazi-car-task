import React from 'react'
import './navbar.css'
import { useSearch } from '../../context/Search'

const Navbar = () => {

  const [search , setSearch] = useSearch();

  return (

    <div>
        <nav className='navbardiv'>
            <form className="d-flex searchBox" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </form>

        </nav>
    </div>
  )
}

export default Navbar