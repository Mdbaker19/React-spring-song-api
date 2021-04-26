import React, {Component} from 'react';
import songService from "../services/songService";

class ListSongComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs : []
        }

    }
    componentDidMount() {
        songService.getSongs().then( res => {
            this.setState( {
                songs:res.data
            });
        });
    }

    render() {
        return (
            <div>
                <h1 className="blue-text text-darken-2">Songs : </h1>

                <table className="highlight centered responsive-table">
                    <thead>
                    <tr>
                        <th className="blue-text">Title</th>
                        <th className="blue-text">Album</th>
                        <th className="blue-text">Artist</th>
                        <th className="blue-text">Release Date</th>
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
