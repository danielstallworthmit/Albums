import React from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
    state = {
        albums : []
    }
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(resp => this.setState({ albums: resp.data }))
    }
    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }
    render() {
        return (
            <ScrollView style={styles.scrollStyle}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};

const styles = {
    scrollStyle: {
        marginBottom: 70
    }
}

export default AlbumList;