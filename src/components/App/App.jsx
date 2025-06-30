import { Routes, Route } from 'react-router-dom';

import './App.css'

import { ROUTES } from '../../utils/constants';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


import HomeFeed from '../../pages/HomeFeedPage';
import NewsItemPage from '../../pages/NewsItemPage';
import { getNewsAll, getNewsIds, refreshNews } from '../../services/actions/news';
import Aside from '../Aside/Aside';


function App() {

  const dispatch = useDispatch();
  const newsIds = useSelector(store => store.news.newsIds);

  useEffect(()=> {
        dispatch(
            getNewsAll()
        );
    }, []);
 
  function handleRefresh() {
      dispatch(refreshNews(newsIds)); //передаем текущий массив с id новостей
  }

  useEffect(()=> {
    const intervarRefresh = setInterval(handleRefresh, 20 * 1000);
    return () => clearInterval(intervarRefresh); 
  },[newsIds])

  return (
    <div className="flex content">
      <div className='flex w-full'>
      <Aside className="basis-[310px] shrink-0 border-r border-gray-300 max-laptop:fixed" />
      <div className="basis-full w-full">      
        <Header 
          className="w-full bg-themegreen-normal laptop:bg-themesky-normal olpc:bg-themepink-100"
          onRefresh={handleRefresh}
        />
        <Routes>
          <Route path={ROUTES.home} element={<HomeFeed />} />
          <Route path={ROUTES.newsItem} element={<NewsItemPage />} />
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default App;
