import React, {Component} from 'react';
import songService from "../services/songService";

class ListSongComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs : []
        }
        this.addSong = this.addSong.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
        this.editSong = this.editSong.bind(this);
        this.viewSong = this.viewSong.bind(this);
    }
    componentDidMount() {
        songService.getSongs().then( res => {
            this.setState( {
                songs:res.data
            });
        });
    }

    editSong(id) {
        this.props.history.push(`/add-song/${id}`);
    }

    viewSong(id) {
        this.props.history.push(`/view-songs/${id}`);
    }

    addSong() { // in nav
        this.props.history.push('/add-song/create'); // router path from router props obj in app.js routes -> render this component mapped to route
    }

    deleteSong(id) {
        songService.deleteSong(id).then( res => {
            this.setState({songs: this.state.songs.filter( e => e.id !== id)});
            this.props.history.push("/songs");
        });
    }

    render() {
        return (
            <div>
                <h1 className="row blue-text text-darken-2">Songs : </h1>

                <table className="highlight centered responsive-table">
                    <thead>
                    <tr>
                        <th className="blue-text">Title</th>
                        <th className="blue-text">Album</th>
                        <th className="blue-text">Artist</th>
                        <th className="blue-text">Release Date</th>
                        <th className="blue-text text-darken-2">Actions</th>

                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.songs.map( (e, i) => {

                            return <tr key={e.id}>
                                <td>{e.title}</td>
                                <td>{e.album}</td>
                                <td>{e.artist}</td>
                                <td>{e.releaseDate}</td>
                                <td>
                                    <button className="green-text text-darken-2" onClick={ () => this.editSong(e.id)}>Update</button>
                                    <button className="red-text text-darken-2" onClick={ () => this.deleteSong(e.id)}>Delete</button>
                                    <button className="orange-text text-darken-2" onClick={ () => this.viewSong(e.id)}>View</button>
                                </td>
                            </tr>

                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListSongComponent;
