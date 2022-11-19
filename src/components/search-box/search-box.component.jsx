import './search-box.styles.css';
const SearchBox = ({className, placeholder,onSearchHandler }) => (
    <div>
        <input
            type='search'
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onSearchHandler}
        />
    </div>
)
export default SearchBox;