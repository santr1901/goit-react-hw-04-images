import css from './Searchbar.module.css';
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');
  const handleChangeName = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchName.trim() === '') {
      alert('Введите название картинки для поиска');
      return;
    }

    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchName}
          onChange={handleChangeName}
        />
      </form>
    </header>
  );
};

export default Searchbar;
