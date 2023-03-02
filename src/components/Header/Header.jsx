import { SearchForm } from 'components/SearchForm/SearchForm';
import style from './Header.module.css';

export const Header = data => {
    return (
        <header className={style.Header} id="header">
            <div className={style.HeaderWindow}>
                <h1 className={style.HeaderTitle}>Best image finder for you</h1>
                <SearchForm onSubmit={data} />
            </div>
        </header>
    );
};
