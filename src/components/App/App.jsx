import { Routes, Route } from 'react-router-dom';

import './App.css'

import { ROUTES } from '../../utils/constants';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


import HomeFeed from '../../pages/HomeFeedPage';
import NewsItemPage from '../../pages/NewsItemPage';
import { getNewsAll, getNewsIds, refreshNews } from '../../services/actions/news';
import Aside from '../Aside/Aside';


function App() {

  const dispatch = useDispatch();
  const newsIds = useSelector(store => store.news.newsIds);

  const [isAsideOpen, setIsAsideOpen] = useState(true);

  function handleAsideClose() {
    setIsAsideOpen(false);
  }

  function handleAsideOpen() {
    setIsAsideOpen(true);
  }

  useEffect(()=> {
        dispatch(
            getNewsAll()
        );
    }, []);
 
  function handleRefresh() {
      dispatch(refreshNews(newsIds)); //передаем текущий массив с id новостей
  }

  

  return (
    <div className="flex content">
      <div className='flex w-full'>
      <Aside className={`basis-[310px] shrink-0 border-r border-gray-300 max-laptop:fixed ${isAsideOpen ? 'block': 'hidden'}`} onClose={handleAsideClose} />
      <div className="basis-full w-full">      
        <Header 
          className="w-full bg-themegreen-normal laptop:bg-themesky-normal olpc:bg-themepink-100"
          onRefresh={handleRefresh}
          handleAsideOpen={handleAsideOpen}
        />
        <Routes>
          <Route path={ROUTES.home} element={<HomeFeed handleRefresh={handleRefresh} />} />
          <Route path={ROUTES.newsItem} element={<NewsItemPage />} />
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default App;
