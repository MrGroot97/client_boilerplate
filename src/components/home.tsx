import React from 'react';
interface props {
    name: string;
}

const Home: React.FC<props> = (props) => {
    const { name } = props;
    return (
        <div tw="flex flex-col justify-center text-center text-electric">
            <div>Welcome {name}!</div>
            <div>This is Home for React App without CRA</div>
        </div>
    );
};

export default Home;
