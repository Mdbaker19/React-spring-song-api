import React, {Component} from 'react';
import songService from "../services/songService";

class CreateSongComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            title: "",
            artist: "",
            album: "",
            release: ""
        }

        this.changeAlbumHandler = this.changeAlbumHandler.bind(this);
        this.changeArtistHandler = this.changeArtistHandler.bind(this);
        this.changeReleaseHandler = this.changeReleaseHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);

        this.songMethods = this.songMethods.bind(this);
    }

    componentDidMount() {
        if(this.state.id > 0) {
            songService.getSongById(this.state.id).then(res => {
                let song = res.data;
                this.setState({
                    title: song.title,
                    album: song.album,
                    artist: song.artist,
                    release: song.releaseDate
                });
            });
        }
    }

    changeTitleHandler = (e) => {
        this.setState({title: e.target.value})
    }

    changeArtistHandler = (e) => {
        this.setState({artist: e.target.value})
    }

    changeAlbumHandler = (e) => {
        this.setState({album: e.target.value})
    }

    changeReleaseHandler = (e) => {
        this.setState({release: e.target.value})
    }

    songMethods = (e) =>{
        e.preventDefault();
        let song = {title: this.state.title, artist: this.state.artist, album: this.state.album, releaseDate: this.state.release}
        console.log("song => " + JSON.stringify(song));
        if(this.state.id > 0) {
            songService.updateSong(song, this.state.id).then(res => {
                this.props.history.push('/songs');
            });
        } else {
            songService.createSong(song).then(res => {
                this.props.history.push('/songs');
            });
        }
    }

    cancel = () =>{
        this.props.history.push('/songs');
    }

    getTitle() {
        if(this.state.id > 0) return <h1 className="center-align">Update Song</h1>;
        return <h1 className="center-align">Add Song</h1>;
    }

    getAction() {
        if(this.state.id > 0) return <button className="btn waves-light waves-effect col s6" onClick={this.songMethods}>Update</button>
        return <button className="btn waves-light waves-effect col s6" onClick={this.songMethods}>Add</button>
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.getTitle()
                    }
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="title" type="text" className="validate"
                                    value={this.state.title} onChange={this.changeTitleHandler}/>
                                    <label htmlFor="title">Title</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="artist" type="text" className="validate"
                                    value={this.state.artist} onChange={this.changeArtistHandler}/>
                                    <label htmlFor="artist">Artist</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="album" type="text" className="validate"
                                       value={this.state.album} onChange={this.changeAlbumHandler}/>
                                    <label htmlFor="album">Album</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="release" type="text" className="validate"
                                       value={this.state.release} onChange={this.changeReleaseHandler}/>
                                    <label htmlFor="release">Release Date</label>
                            </div>
                        </div>
                        <div className="row">
                            {
                                this.getAction()
                            }
                            <button className="btn waves-light waves-effect col s6" onClick={this.cancel.bind(this)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateSongComponent;