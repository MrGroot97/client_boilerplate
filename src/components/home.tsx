import React from 'react';
interface props {
    name: string;
}

const Home: React.FC<props> = (props) => {
    const { name } = props;
    return (
        <>
            <div className="text-3xl font-bold underline">Welcome {name}!</div>
            <div>This is Home for React App without CRA</div>
        </>
    );
};

export default Home;
