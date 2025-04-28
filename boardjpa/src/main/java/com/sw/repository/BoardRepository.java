package com.sw.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sw.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Integer> {
	
}
