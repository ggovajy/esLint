import React, { useEffect, useState } from 'react'
import SearchBox from './searchBox';

function aboutItem({list}) {
    console.log("asdasd ");
    const [search, setSearch] = useState([]);
    const [searchList, setSearchList] = useState({list});

    const searchFunc = () => {
        setSearchList("asd");
        
        console.log("ggova = "+search);
    }
    function handleChange(e) {
        setSearch(e.target.value);
        
        console.log("ggova = "+searchList);
    }

    useEffect(() =>{
        searchFunc();
    },[])
    return (
        <>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search goods"
          value={search}
          onChange={handleChange}
        />
        <button onClick={searchFunc}>about 검색</button>
        {list.map((item) =>(
        <div key = {item.id}>
            <span>{item.name}</span>
            <br/>
        </div>
        ))}
        </>
    )
}

export default aboutItem