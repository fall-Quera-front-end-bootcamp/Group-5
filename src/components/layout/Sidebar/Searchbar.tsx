import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface SearchbarProps {
  className: string;
  placeholder: string
}
const Searchbar = ({className, placeholder}:SearchbarProps) => {
  return (
    <form className="flex items-center bg-[#F6F7F9] text-center">
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "gray" }} />
      </IconButton>
      <input type="text" className={className} placeholder={placeholder} >
      </input>
    </form>
  );
};

export default Searchbar;
