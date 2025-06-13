import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Landing from './components/Landing/Landing';
import QuizOverview from './components/Quiz/QuizOverview';
import QuizQuestion from './components/Quiz/QuizQuestion';
import Tips from './components/Tips/Tips';
import Games from './components/Games/Games';
import Progress from './components/Progress/Progress';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="quiz" element={<QuizOverview />} />
          <Route path="quiz/:levelId" element={<QuizQuestion />} />
          <Route path="quiz/:levelId/:questionIndex" element={<QuizQuestion />} />
          <Route path="tips" element={<Tips />} />
          <Route path="games" element={<Games />} />
          <Route path="progress" element={<Progress />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;