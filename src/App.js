import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './styles/App.css';
import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Язык программирования клиентской части' },
        { id: 2, title: 'CSS', body: 'Стили сайта' },
        { id: 3, title: 'HTML', body: 'Гипертекстовый язык разметки' },
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <Counter init={5} />
            <ClassCounter />
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать элемент
            </MyButton>
            <MyModal visible={modal} setVisible={setModal} >
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedSearchedPosts} title='Список постов' />

        </div>
    );
}

export default App;
