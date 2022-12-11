import React from 'react'
import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewList from './NewList';
import response from '../response.json';
async function HomePage() {
	// fetch by news data
	// categories.join(',') == general,bussiness...
  const news: NewsResponse =
		 (await fetchNews(categories.join(",")));   

  // console.log(news);

  // set time out for loading
  await new Promise((resolve) => setTimeout(resolve, 3000));
  

  return (
    <div>
      {/* newList */}
      <NewList news={news} />
    </div>
  );
}

export default HomePage;
