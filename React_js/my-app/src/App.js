import React, { useRef, useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import Postitem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Javascript - Язык програмирования' },
        { id: 2, title: 'React', body: 'React - Язык програмирования, работающий JS' },
        { id: 3, title: 'Vue', body: 'Vue - Язык програмирования, работающий JS' }
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={createPost} />
            {posts.length
                ?
                < PostList remove={removePost} posts={posts} title="Список постов" />
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>
            }
        </div>
    );
}

export default App;
