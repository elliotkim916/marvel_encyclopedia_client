import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {characterReducer} from './reducers';
import {combineReducers} from 'redux';

const initialState = {
    notes: [
        {
            title: 'Note 1',
            content: 'Integer fermentum libero ac neque tempor, ut varius ligula convallis. Aliquam ac sapien nisi. Nunc lacinia condimentum sodales. Curabitur aliquet purus et tincidunt ullamcorper. Vivamus ante odio, tempus at placerat eget, placerat et sapien. In id lectus sit amet ligula consequat hendrerit ut nec ipsum. Donec quis lectus fringilla, congue augue eget, malesuada velit'    
        },
        {
            title: 'Note 2',
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
            img: 'https://readcomics.io/images/manga/avengers-disassembled-thor/1/1.jpg',
            title: 'thor issue 4'
        },
        {
            img: 'http://www.openlettersmonthly.com/stevereads/wp-content/uploads/2010/09/thor-615.jpg',
            title: 'thor issue 5'
        },
        {
            img: 'https://fsmedia.imgix.net/d7/df/8b/b3/1fb1/4b69/8cc8/46c45b84f333/thor-112-featuring-thor-battling-the-hulk.jpeg',
            title: 'thor issue 6'
        }
    ],
    unreadComics: [
        {
            img: 'https://static.comicvine.com/uploads/scale_medium/11/117763/2466955-ironman001.jpg',
            title: 'iron man 1'
        },
        {
            img: 'https://static.comicvine.com/uploads/scale_small/0/4/41288-6504-46598-1-iron-man.jpg',
            title: 'iron man 2'
        },
        {
            img: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1330017.jpg',
            title: 'iron man 3'
        }
    ]
}

export default createStore(
    combineReducers({
        character: characterReducer,
        search: (state=initialState) => state 
    }),

    applyMiddleware(thunk)
);

// Redux Thunk allows action creators to return functions to be run
// The functions can run asynchronous code like our AJAX request

// Redux Thunk allows you to create async actions