import React, {Component} from 'react';
import songService from "../services/songService";

class ViewSongComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            song: {}
        }
    }

    componentDidMount() {
        songService.getSongById(this.state.id).then( res => {
           this.setState({song: res.data});
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <p className="card-title center-align center">{this.state.song.title}</p>
                                <p>By: {this.state.song.artist}</p>
                                <p>Album: {this.state.song.album}</p>
                                <p>Released: {this.state.song.releaseDate}</p>
                            </div>
                            <div className="card-action">
                                <a href={"/add-song/" + this.state.id}>Update</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewSongComponent;