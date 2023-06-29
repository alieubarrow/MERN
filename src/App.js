import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Header from './components/Header'
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Header />
        </header>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-exercise" element={<CreateExercisePage />} />
            <Route path="/edit-exercise/:id" element={<EditExercisePage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}


export default App;
