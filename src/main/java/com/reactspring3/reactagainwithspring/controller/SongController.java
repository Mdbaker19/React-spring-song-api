package com.reactspring3.reactagainwithspring.controller;

import com.reactspring3.reactagainwithspring.exception.ResourceNotFoundException;
import com.reactspring3.reactagainwithspring.model.Song;
import com.reactspring3.reactagainwithspring.repository.SongRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*")
public class SongController {

    private SongRepository songDao;

    public SongController(SongRepository songDao){
        this.songDao = songDao;
    }

    @GetMapping("/songs")
    public List<Song> getAllSongs(){
        return songDao.findAll();
    }

    @PostMapping("/songs")
    public Song createSong(@RequestBody Song song){
        return songDao.save(song);
    }

    @GetMapping("/songs/{id}")
    public ResponseEntity<Song> getById(@PathVariable(name = "id") long id){
        Song searchedSong = songDao.findById(id).orElseThrow( () -> new ResourceNotFoundException("No Song found with id " + id));
        return ResponseEntity.ok(searchedSong);
    }

    @PutMapping("/songs/{id}")
    public ResponseEntity<Song> updateById(@PathVariable(name = "id") long id, @RequestBody Song song) {
        Song searchedSong = songDao.findById(id).orElseThrow( () -> new ResourceNotFoundException("No Song found with id " + id));
        searchedSong.setAlbum(song.getAlbum());
        searchedSong.setArtist(song.getArtist());
        searchedSong.setTitle(song.getTitle());
        searchedSong.setReleaseDate(song.getReleaseDate());
        songDao.save(searchedSong);
        return ResponseEntity.ok(searchedSong);
    }

    @DeleteMapping("/songs/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSong(@PathVariable(name = "id") long id){
        Song searchedSong = songDao.findById(id).orElseThrow( () -> new ResourceNotFoundException("No Song found with id " + id));

        songDao.delete(searchedSong);
        Map<String, Boolean> res = new HashMap<>();
        res.put("Deleted song with id " + id, Boolean.TRUE);
        return ResponseEntity.ok(res);
    }

}