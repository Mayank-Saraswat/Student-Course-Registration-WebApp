import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Components/AppRoutes';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </Router>
  );
}

export default App;