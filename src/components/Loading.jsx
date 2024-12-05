import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div>
            render(<CirclesWithBar
                height="100"
                width="100"
                color="#283c86"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />)
        </div>
    );
};

export default Loading;