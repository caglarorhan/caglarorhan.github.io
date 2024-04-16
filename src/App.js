import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './routes/Blogs';
import BlogPost from './routes/BlogPost';
import Articles from './routes/Articles';
import Home from './routes/HomeRoutes';
import NotFound from './routes/NotFound';
import LayoutMain from './components/layout/LayoutMain';

function App() {

  return (
      <Router>
          <LayoutMain>
              <Routes>
                  <Route path="/" element={<Home someProp="someValue"/>} />
                  <Route path="/blogs" element={<Blogs someProp="someValue" />}>
                      <Route path=":postIid" element={<BlogPost someProp="someValue" />} />
                  </Route>
                  <Route path="/articles" element={<Articles someProp="someValue" />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </LayoutMain>
      </Router>
  );
}

export default App;
