const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'I Want it That Way', duration: '4:23'},
        {title: 'All Star', duration: '3:15'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}
