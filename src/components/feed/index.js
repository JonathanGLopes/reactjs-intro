import React, {Component} from "react";

class Feed extends Component {
    render() {
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a> {this.props.curtidas} Curtidas / {this.props.comentarios} Comentários </a>
            </div>
        )
    }
}

export default Feed;