import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getALLCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const {push} = useNavigate();
  console.log(push)
  console.log(pathname, search )

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getALLCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default Home;
