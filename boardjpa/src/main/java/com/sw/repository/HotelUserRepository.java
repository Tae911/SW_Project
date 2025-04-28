package com.yunsu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.yunsu.entity.HotelUser;

public interface HotelUserRepository extends JpaRepository<HotelUser, Integer> {
	 Optional<HotelUser> findByLoginID(String loginID);
}


