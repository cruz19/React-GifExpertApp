import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

// __Functional Component__
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
            {
                categories.map(category => (
                    <GifGrid key={ category } category={ category } />
                ))
            }
            </ol>
        </>
    )
}

export default GifExpertApp;
