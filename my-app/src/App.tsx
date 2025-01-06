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
import Posts from './Pages/Posts/Posts';
import NotFound from './Pages/NotFound/NotFound';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute';
import Profile from './Pages/Profile/Profile';
import MyPosts from './Pages/MyPosts/MyPosts';
import SelectedMyPost from './Pages/SelectedMyPost/SelectedMyPost';

const App = () => {

  return (
   <>
    <Routes>
        <Route path='/' element= {<Layout />}>
          <Route path='/' element = {<Posts />}>Home</Route>
          <Route path='/add-post' element = {<ProtectedRoute><AddPost /></ProtectedRoute>}>Add Post</Route>
          <Route path = "/" element = {<Posts />} />
          <Route path = "/:result" element = {<SelectedPost />} />
          <Route path = "/sign-up" element = {<SignUp />} />
          <Route path = "activate/:uid/:token" element = {<SuccessfulConfirmation/>} />
          <Route path = "/sign-in" element = {<SignIn />} />
          <Route path = "/success" element = {<Success />} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path = "/my-posts" element = {<ProtectedRoute><MyPosts /></ProtectedRoute>} />
          <Route path = "/my-posts/:result" element = {<ProtectedRoute><SelectedMyPost /></ProtectedRoute>} />
          <Route path = '/search-results' element = {<SearchResults/>} />
          <Route path = '*' element = {<NotFound />} />
       </Route>
    </Routes>
   </>
   
  )
}

export default App
