import React, {Component} from 'react';
import Feed from './components/feed';

class App extends Component{


    constructor(props){
        super(props);
        this.state = {
            feed: [ 
                {id: 1, username: 'Jonathan', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Matheus', curtidas: 32, comentarios: 23},
                {id: 3, username: 'Amanda', curtidas: 54, comentarios: 41},
            ]
        };
    }

    render(){
        return(
            <div>
               {this.state.feed.map((item) => {
                return(
                    <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                );
               })}
            </div>
        )
    }


}


export default App;