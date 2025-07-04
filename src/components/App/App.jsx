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
import useWindowResize from '../../utils/useWindowResize';


function App() {

  const dispatch = useDispatch();
  const newsIds = useSelector(store => store.news.newsIds);
  const windowWidth = useWindowResize();

  const [isAsideOpen, setIsAsideOpen] = useState(true);

  function handleAsideClose() {
    setIsAsideOpen(false);
  }

  function handleAsideOpen() {
    setIsAsideOpen(true);
  }

  useEffect(()=> {
    console.log('изменилась ширина', windowWidth);//1 раз должно быть
      if (windowWidth > 640) {
        setIsAsideOpen(true);
      }
      else {
        setIsAsideOpen(false)
      }
  },[windowWidth]);

  useEffect(()=> {
      //может здесь проверку (почему то за новостями ходим 2 раза...)
      dispatch(
        getNewsAll()
      );
  }, []);
 
  function handleRefresh() {
      dispatch(refreshNews(newsIds)); //передаем текущий массив с id новостей
  }

  return (
    <div className="flex flex-col min-h-screen content">
      <div className='flex w-full flex-1'>
        <Aside className={`basis-[310px]  shrink-0  border-r border-gray-300 max-laptop:fixed z-10  flex flex-col p-9 bg-themepink-300 olpc:bg-themepink-100 transition-all duration-300 ease-in ${isAsideOpen ? ' translate-x-0 opacity-100 visible': '-translate-x-full opacity-0 invisible'}`} onClose={handleAsideClose} />
        <div className="basis-full w-full">      
          <Header 
            className="w-full bg-themegreen-normal laptop:bg-themesky-normal olpc:bg-themepink-100"
            onRefresh={handleRefresh}
            handleAsideOpen={handleAsideOpen}
          />
          <Routes>
            <Route path={ROUTES.home} element={<HomeFeed windowWidth={windowWidth} handleRefresh={handleRefresh} />} />
            <Route path={ROUTES.newsItem} element={<NewsItemPage windowWidth={windowWidth}  isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />} />
          </Routes>
        </div>
      </div>
      <div className="p-5 shrink-0 border-t border-gray-500">
        Это футер
      </div>
    </div>
  )
}

export default App;
