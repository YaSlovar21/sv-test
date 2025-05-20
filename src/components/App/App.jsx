import { Routes, Route } from 'react-router-dom';

import './App.css'

import { ROUTES } from '../../utils/constants';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


import HomeFeed from '../../pages/HomeFeedPage';
import NewsItem from '../../pages/NewsItemPage';
import { getNewsObjects } from '../../services/actions/news';


function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(
      getNewsObjects()
    );
  }, []);


  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.home} element={<HomeFeed />} />
        <Route path={ROUTES.newsItem} element={<NewsItem />} />
      </Routes>
    </>
  )
}

export default App;
