import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <form className="flex items-center bg-[#F6F7F9] text-center">
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "gray" }} />
      </IconButton>
      <input type="text" placeholder="جستجو کنید" className="font-body text-[12px] text-right pr-1 h-[40px] w-[274px] bg-[#F6F7F9]">
      </input>
    </form>
  );
};

export default Searchbar;
