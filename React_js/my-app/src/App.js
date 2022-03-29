import React, { useRef, useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import Postitem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Javascript - Язык програмирования' },
        { id: 2, title: 'React', body: 'React - Язык програмирования, работающий JS' },
        { id: 3, title: 'Vue', body: 'Vue - Язык програмирования, работающий JS' }
    ])

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                    />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
