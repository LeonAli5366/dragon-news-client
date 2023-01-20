import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCard from '../../Shared/NewsSummuryCard/NewsSummuryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>amount of category:{categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummuryCard
                    key={news._id}
                    news={news}
                ></NewsSummuryCard>)
            }
        </div>
    );
};

export default Category;