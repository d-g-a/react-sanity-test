import { BrowserRouter,Route } from 'react-router-dom'
import AllPosts from './components/AllPosts'
import OnePost from './components/OnePost'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Route component={AllPosts} path="/" exact/>
        <Route component={OnePost} path="/:slug"/>
    </div>
    </BrowserRouter>
  );
}

export default App;
