import css from './SearchBox.module.css'
export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={css.searchform}>
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      />
      </div>
  );
};