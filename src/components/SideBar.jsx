import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import "./Sidebar.css"


const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>
        {categories.map(category => (
            <button className="category-btn" key={category.name} style={{background: category.name === selectedCategory ? "#f01111" : "transparent", color: category.name === selectedCategory ? "#fff" : "red", borderRadius: "30px"}} onClick={() => setSelectedCategory(category.name)}>
                <span style={{marginRight: "15px"}}>{category.icon}</span>
                <span key={category.name} style={{opacity: category.name === selectedCategory ? "1" : "0.8", color: "#fff"}}>
                  {category.name}
                  </span>
            </button>
        ))}

    </Stack>
  )
}

export default SideBar