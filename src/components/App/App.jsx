import { Routes, Route } from 'react-router-dom';

import './App.css'

import { ROUTES } from '../../utils/constants';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


import HomeFeed from '../../pages/HomeFeedPage';
import NewsItemPage from '../../pages/NewsItemPage';
import { getNewsIds } from '../../services/actions/news';
import Aside from '../Aside/Aside';


function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(
      getNewsIds()
    );
  }, []);


  return (
    <div className="flex content">
      <div className='flex w-full'>
      <Aside className="basis-[310px] shrink-0 border-r border-gray-300" />
      <div className="basis-full w-full">      
        <Header className="w-full bg-themegreen-normal laptop:bg-themesky-normal olpc:bg-themepink-100" />
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
