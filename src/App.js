import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./assaets/fonts/Poppins-Bold.otf";
import "./assaets/fonts/Poppins-Regular.otf";
import "./assaets/fonts/rimouski-sb.ttf";
import AuthLogin from './pages/auth/authLogin/AuthLogin';
import Dashboard from './pages/dashboard/Dashboard';
import Quize from './pages/quize/Quize';
import Profile from './pages/auth/profile/Profile';
import Articles from './pages/articles/Articles';
import Article from './pages/article/Article';
// import Test from './pages/test/Test';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<AuthLogin login/>} />
          <Route exact path="/register" element={<AuthLogin />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/quize" element={<Quize />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/article" element={<Article />} />
          {/* <Route exact path="/test" element={<Test />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
