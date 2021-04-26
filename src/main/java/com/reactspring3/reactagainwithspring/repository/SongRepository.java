package com.reactspring3.reactagainwithspring.repository;

import com.reactspring3.reactagainwithspring.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {

}
