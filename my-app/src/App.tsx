import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './Pages/AddPost/AddPost';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import AllPosts from './Pages/AllPosts/AllPosts';
import SignUp from './Pages/SignUp/SignUp';
import SuccessfulConfirmation from './Pages/SuccessfulConfirmation/SuccessfulConfirmation';
import SignIn from './Pages/SignIn/SignIn';
import Success from './Pages/Success/Success';
import SelectedPost from './Pages/SelectedPost/SelectedPost';
import SearchResults from './Pages/SearchResults/SearchResults';

const App = () => {

  return (
   <>
    <Routes>
        <Route path='/' element= {<Layout />}>
          <Route path='/' element = {<Home />}>Home</Route>
          <Route path='/add-post' element = {<AddPost />}>Add Post</Route>
          <Route path = "/posts" element = {<AllPosts />} />
          <Route path = "/posts/:result" element = {<SelectedPost />} />
          <Route path = "/sign-up" element = {<SignUp />} />
          <Route path = "/successfully" element = {<SuccessfulConfirmation/>} />
          <Route path = "/sign-in" element = {<SignIn />} />
          <Route path = "/success" element = {<Success />} />
          <Route path = '/search-results' element = {<SearchResults/>} />
       </Route>
    </Routes>
   </>
   
  )
}

export default App
