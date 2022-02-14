import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Cards from './Components/Cards/Cards';
import Layout from './Components/Layout/Layout';
import Table from './Components/Table/Table';
import { getComments } from './redux/commentSlice';
import { getPosts } from './redux/postSlice';
import { getUsers } from './redux/userSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getPosts())
    dispatch(getComments())
  },[])

  return (
    <Layout>
      <Cards/>
        <Table/>
    </Layout>
  );
}

export default App;
