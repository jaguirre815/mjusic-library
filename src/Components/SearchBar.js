import { useState } from "react"

function SearchBar (props) {
    const [searchTerm, setSearchTerm] = useState(' ')
    
    return(
        <div>
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter  search term here'/>
                <input type='Submit'/>
            </form>
        </div>
    )
}

export default SearchBar