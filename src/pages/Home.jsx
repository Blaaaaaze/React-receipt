import { getAllCategories } from '../api';
import { useState, useEffect } from 'react';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';
import {
  useLocation,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = async (str) => {
    await setFilteredCatalog(
      catalog.filter((el) => el.strCategory.toLowerCase().includes(str)),
    );

    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) => 
              item.strCategory.
            toLowerCase().
            includes(search.split('=')[1].toLowerCase())
            ) : data.categories,
      );
    });
  }, [search]);

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

export { Home };
