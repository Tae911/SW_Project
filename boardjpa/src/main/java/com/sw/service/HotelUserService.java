package com.yunsu.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.yunsu.dto.UserDto;
import com.yunsu.entity.HotelUser;
import com.yunsu.repository.HotelUserRepository;

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