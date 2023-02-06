import style from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ pictures, onClose }) => {
    return pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
            <li className={style.ImageGalleryItem} key={id}>
                <img
                    className={style.ImageGalleryItem_image}
                    src={webformatURL}
                    alt={tags}
                    onClick={() => onClose(largeImageURL)}
                />
            </li>
        );
    });
};
