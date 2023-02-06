import { useCallback, useEffect } from 'react';
import style from './Modal.module.css';

export const Modal = data => {
    const handleKeyDown = useCallback(
        event => {
            if (event.code === 'Escape') {
                data.onClose();
            }
            window.removeEventListener('keydown', handleKeyDown);
        },
        [data]
    );
    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            data.onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <div className={style.overlay} onClick={handleBackdropClick}>
            <div className={style.modal}>{data.children}</div>
        </div>
    );
};

// export class OldModal extends Component {
//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown);
//     }
//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown);
//     }
//     handleKeyDown = event => {
//         if (event.code === 'Escape') {
//             this.props.onClose();
//         }
//     };
//     handleBackdropClick = event => {
//         if (event.currentTarget === event.target) {
//             this.props.onClose();
//         }
//     };
//     render() {
//         return (
//             <div className={style.overlay} onClick={this.handleBackdropClick}>
//                 <div className={style.modal}>{this.props.children}</div>
//             </div>
//         );
//     }
// }
