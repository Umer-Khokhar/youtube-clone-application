import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
   e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      onSubmit={handleSubmit}
    >
      <input
        className="search-bar"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ outline: "none", border: "none", width: "35vw" }}
      />
      <IconButton type="submit" sx={{ p: "8px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
