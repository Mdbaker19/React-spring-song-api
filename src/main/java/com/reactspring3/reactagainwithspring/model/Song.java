package com.reactspring3.reactagainwithspring.model;

import javax.persistence.*;

@Entity
@Table(name = "song")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "int(11) unsigned")
    private long id;
    @Column(name = "title")
    private String title;
    @Column(name = "album")
    private String album;
    @Column(name = "release_date")
    private long releaseDate;
    @Column(name = "artist")
    private String artist;


    public Song() {
    }

    public Song(long id, String title, String album, long releaseDate, String artist) {
        this.id = id;
        this.title = title;
        this.album = album;
        this.releaseDate = releaseDate;
        this.artist = artist;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public long getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(long releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }
}