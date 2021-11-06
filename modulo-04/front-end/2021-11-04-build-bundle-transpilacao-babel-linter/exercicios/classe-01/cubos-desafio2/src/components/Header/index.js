/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import profileImg from "../../assets/images/profile.jpg";
import SearchInput from "../SearchInput";
import "./styles.css";

export default function Header({
    setMoviesNameFilter,
    setIsMobileBagOpen,
}) {
    return (
        <header className="header">
            <Logo
                className="header__logo"
                role="button"
                aria-label="Voltar para listagem de filme"
                onClick={() => setIsMobileBagOpen(false)}
            />
            <SearchInput setMoviesNameFilter={setMoviesNameFilter} />
            <div className="header__item-container">
                Bem vindo Dina
                <img
                    className="item-container__img"
                    src={profileImg}
                    alt="profile"
                />
            </div>
        </header>
    );
}
