import { Button } from 'components/Button/Button';
import { Header } from 'components/Header/Header';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
    const [input, setInput] = useState('');
    const [page, setPage] = useState(1);
    const [loadMore, setLoadMore] = useState(false);

    const handleFormSubmit = input => {
        setInput(input);
        setPage(1);
        const gallerySection = document.getElementById('gallery');
        const headerSection = document.getElementById('header');

        if (gallerySection) {
            gallerySection.style.padding = '25px';
        }
        setTimeout(
            () =>
                window.scrollBy({
                    top: headerSection.offsetHeight,
                    behavior: 'smooth',
                }),
            100
        );
        clearTimeout();
    };

    const handleLearnMorePage = event => {
        event.preventDefault();
        setPage(prevPage => prevPage + 1);
    };

    const handleTotalPages = totalPages => {
        page >= totalPages ? setLoadMore(false) : setLoadMore(true);
    };

    return (
        <>
            <Header settingForm={handleFormSubmit} />

            <ImageGallery name={input} page={page} total={handleTotalPages} />
            {loadMore && (
                <Button
                    curPage={page}
                    learnMorePage={handleLearnMorePage}
                    isFalse={loadMore}
                />
            )}
            <ToastContainer autoClose={3000} />
        </>
    );
};
