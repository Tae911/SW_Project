package com.yunsu.entity;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Component
@Entity
@Getter
@Setter
@Table(name = "userTable", schema = "hoteldb")
public class HotelUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;

    @Column(nullable = false, length = 45)
    private String name;

    @Column(unique=true, nullable = false, length = 50)
    private String email;

    @Column(nullable = false, length = 45)
    private String punNumber;

    @Column
    private LocalDateTime signUpDate;

    @Column(unique=true, nullable = false, length = 45)
    private String loginID;

    @Column(nullable = false, length = 45)
    private String loginPassword;

 
}
