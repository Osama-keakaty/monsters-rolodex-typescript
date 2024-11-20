import "./search-box.styles.css";
import { ChangeEventHandler } from "react";
// interface ISearchBoxProps {
//     className: string;
//     placeholder:string;
//     onChangeHandler:() => void

//     }
type searchBoxProps = {
  className: string;
  placeholder: string;
//   onChangeHandler: () => void;
  onChangeHandler:ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  placeholder,
  className,
  onChangeHandler,
}: searchBoxProps) => {
    return (
    <input type="search" 
    placeholder={placeholder} 
    className={`search-box ${className}`} 
    spellCheck={false} 
    onChange={onChangeHandler}
    />
    );
};
export default SearchBox;
