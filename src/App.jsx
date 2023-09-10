import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import CourseList from './components/CourseList/CourseList';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route  path="/courselist" element={<CourseList />} />
        <Route  path="/courselnfo" element={<CourseInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
