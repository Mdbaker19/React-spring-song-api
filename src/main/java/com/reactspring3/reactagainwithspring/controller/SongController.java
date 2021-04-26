package com.reactspring3.reactagainwithspring.controller;

import com.reactspring3.reactagainwithspring.model.Song;
import com.reactspring3.reactagainwithspring.repository.SongRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class SongController {

    private SongRepository songDao;

    public SongController(SongRepository songDao){
        this.songDao = songDao;
    }

    @GetMapping("/songs")
    public List<Song> getAllSongs(){
        return songDao.findAll();
    }

}