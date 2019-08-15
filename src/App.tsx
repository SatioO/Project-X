import './style.css';
import React from 'react';
import metadata from './metadata.json';
import { Metadata } from './types/metadata';
import { SpreadX } from './components';

const App: React.FC = () => {
    const spreads: { [key: string]: Metadata } = metadata;

    return (
        <div className="container">
            {Object.keys(spreads).map((id: string) => {
                return <SpreadX key={id} data={spreads[id]} />;
            })}
        </div>
    );
};

export default App;
