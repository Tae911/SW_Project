package com.sw.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.sw.dto.UserDto;
import com.sw.entity.HotelUser;
import com.sw.repository.HotelUserRepository;

@Service
public class HotelUserService {

    private final HotelUserRepository hoteluserRepository;

    public HotelUserService(HotelUserRepository hoteluserRepository) {
        this.hoteluserRepository = hoteluserRepository;
    }

    public HotelUser register(UserDto dto) {
    	HotelUser hoteluser = new HotelUser();
    	hoteluser.setName(dto.getName());
    	hoteluser.setEmail(dto.getEmail());
    	hoteluser.setPunNumber(dto.getPunNumber());
    	hoteluser.setLoginID(dto.getLoginID());
    	hoteluser.setLoginPassword(dto.getLoginPassword());
    	hoteluser.setSignUpDate(LocalDateTime.now());
        return hoteluserRepository.save(hoteluser);
    }
}