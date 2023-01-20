import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCard from '../../Shared/NewsSummuryCard/NewsSummuryCard';

const Home = () => {
    const AllNews = useLoaderData()
    return (
        <div>
            <h2>list of news:{AllNews.length}</h2>
            {
                AllNews.map(news => <NewsSummuryCard
                    key={news._id}
                    news={news}
                ></NewsSummuryCard>)
            }
        </div>
    );
};

export default Home;