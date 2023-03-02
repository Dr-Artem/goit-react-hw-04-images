import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <ProgressBar
                height="100"
                width="100"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#3f51b5"
                barColor="#909ff3"
            />
        </div>
    );
};
