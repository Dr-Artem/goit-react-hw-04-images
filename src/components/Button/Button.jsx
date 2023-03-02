import style from './Button.module.css';

export const Button = ({ learnMorePage }) => {
    return (
        <div className={style.ButtonWrapper}>
            <button
                type="button"
                className={style.Button}
                onClick={learnMorePage}
            >
                Load more
            </button>
        </div>
    );
};
