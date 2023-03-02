import { useState } from 'react';
import { toast } from 'react-toastify';
import style from './SearchForm.module.css';

export const SearchForm = data => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = event => {
        const inValue = event.currentTarget.value.toLowerCase();
        setInputValue(inValue);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            toast('Please, enter something');
            return;
        }
        data.onSubmit.settingForm(inputValue);
    };

    return (
        <form className={style.SearchForm} onSubmit={handleSubmit}>
            <input
                className={style.SearchForm_input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className={style.SearchForm_button}
                to="/gallery"
            >
                <span>Search</span>
            </button>
        </form>
    );
};
