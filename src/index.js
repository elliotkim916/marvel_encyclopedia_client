import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import SignUp from './components/sign-up';
// 
import Homepage from './components/homepage';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    notes: [
        {
            title: 'note 1',
            content: 'Integer fermentum libero ac neque tempor, ut varius ligula convallis. Aliquam ac sapien nisi. Nunc lacinia condimentum sodales. Curabitur aliquet purus et tincidunt ullamcorper. Vivamus ante odio, tempus at placerat eget, placerat et sapien. In id lectus sit amet ligula consequat hendrerit ut nec ipsum. Donec quis lectus fringilla, congue augue eget, malesuada velit'    
        },
        {
            title: 'note 2',
            content: 'Integer fermentum libero ac neque tempor, ut varius ligula convallis. Aliquam ac sapien nisi. Nunc lacinia condimentum sodales. Curabitur aliquet purus et tincidunt ullamcorper. Vivamus ante odio, tempus at placerat eget, placerat et sapien. In id lectus sit amet ligula consequat hendrerit ut nec ipsum. Donec quis lectus fringilla, congue augue eget, malesuada velit'
        }
    ],
    allComics: [
        {
            img: 'https://i.pinimg.com/originals/65/9c/b5/659cb5c324b48b5b80cd3515e9998030.jpg',
            title: 'thor issue 1'
        },
        {
            img: 'https://static.comicvine.com/uploads/scale_medium/11/117763/2652494-thor140.jpg',
            title: 'thor issue 2'
        },
        {
            img: 'https://imgc.allpostersimages.com/img/print/posters/marvel-comics-retro-the-mighty-thor-comic-book-cover-no-129-the-verdict-of-zeus-hercules-aged_a-G-13757890-13198931.jpg',
            title: 'thor issue 3'
        }
    ],
    readComics: [
        {
            img: '//:0',
            title: 'thor issue 4'
        },
        {
            img: '//:0',
            title: 'thor issue 5'
        },
        {
            img: '//:0',
            title: 'thor issue 6'
        }
    ],
    unreadComics: [
        {
            img: '//:0',
            title: 'iron man 1'
        },
        {
            img: '//:0',
            title: 'iron man 2'
        },
        {
            img: '//:0',
            title: 'iron man 3'
        }
    ]
}

const store = createStore(state => state, initialState);

ReactDOM.render(
    <Provider store={store}>
        <Homepage />
    </Provider>, 
    document.getElementById('root')
);


