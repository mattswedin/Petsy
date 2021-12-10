import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const CategoryNav = ({ fetchCategories, fetchPets, categories }) => {

    useEffect(() => {
        fetchCategories()
    }, [])

    const allCats = Object.values(categories)

    return allCats[0] ? ( 
        
        <div className="top-nav-cats" >
            {
                allCats.map( (cat , i) => 
                    <Link className="top-nav-cats-color"key={i} to={`/categories/${cat.id}`}><h1>{cat.title}</h1></Link>
                    )
            }
        </div>

    ) : null
}

export default CategoryNav