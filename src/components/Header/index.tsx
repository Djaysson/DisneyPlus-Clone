import LogoImg from "../../assets/images/logo.svg";
import HomeIcon from "../../assets/images/home-icon.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import WatchIcon from "../../assets/images/watchlist-icon.svg";
import OriginalIcon from "../../assets/images/original-icon.svg";
import MoviesIcon from "../../assets/images/movie-icon.svg";
import SeriesIcon from "../../assets/images/series-icon.svg";
import ProfileImg from "../../assets/images/user.png";
import { Nav, Logo, NavMenu, UserImg } from "./styles";

export function Header() {
  return (
    <Nav>
      <Logo src={LogoImg} />

      <NavMenu>
        <li>
          <a href=";">
            <img src={HomeIcon} alt="Home icon" />
            <span>HOME</span>
          </a>
        </li>
        <li>
          <a href=";">
            <img src={SearchIcon} alt="Search icon" />
            <span>SEARCH</span>
          </a>
        </li>
        <li>
          <a href=";">
            <img src={WatchIcon} alt="Watch icon" />
            <span>WATCHLIST</span>
          </a>
        </li>
        <li>
          <a href=";">
            <img src={OriginalIcon} alt="Original icon" />
            <span>ORIGINALS</span>
          </a>
        </li>
        <li>
          <a href=";">
            <img src={MoviesIcon} alt="Movies icon" />
            <span>MOVIES</span>
          </a>
        </li>
        <li>
          <a href=";">
            <img src={SeriesIcon} alt="Series icon" />
            <span>SERIES</span>
          </a>
        </li>
      </NavMenu>

      <UserImg src={ProfileImg} alt="User image" />
    </Nav>
  );
}
