import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' 
import { QueryClientProvider, QueryClient } from 'react-query'
import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools'
import HomePage  from './components/Home.page' 
import RQSuperHeroes from './components/RQSuperHeroes.page'
import SuperHeroes from './components/Superheroes.page'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeroes/>}/>
          <Route path='/rq-super-heroes' element={<RQSuperHeroes/>}/>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
