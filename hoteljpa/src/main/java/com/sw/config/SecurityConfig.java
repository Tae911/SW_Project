package com.sw.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.sw.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled=true)
public class SecurityConfig {
	
	  private final CustomUserDetailsService userDetailsService;

	    public SecurityConfig(CustomUserDetailsService uds) {
	        this.userDetailsService = uds;
	    }

	    @Bean
	    public DaoAuthenticationProvider authenticationProvider() {
	        DaoAuthenticationProvider p = new DaoAuthenticationProvider();
	        p.setUserDetailsService(userDetailsService);
	        p.setPasswordEncoder(passwordEncoder());
	        return p;
	    }

	@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 개발 중에는 CSRF를 꺼두고, 나중에 켜세요.
            .csrf(csrf -> csrf.disable())

            // 1) 인증 없이 접근 허용할 URL
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                  "/",              // root
                  "/firstpage",     // firstPageController
                  "/signupPage",	// 회원가입 폼
                  "/signup",		// 회원가입 
                  "/login",         // 로그인 폼
                  "/css/**",        // 정적 리소스
                  "/js/**",
                  "/images/**",
                  "/image/**",
                  "reservationPage"
                ).permitAll()
                .anyRequest().authenticated()  // 그 외는 로그인 필요
            )

            // 2) 폼 로그인
            .formLogin(form -> form
                .loginPage("/login")           // GET /login → 로그인 폼
                .loginProcessingUrl("/login")  // POST /login → 스프링 시큐리티가 처리
                .defaultSuccessUrl("/firstpage", true)
                .failureUrl("/login?error")
                .usernameParameter("loginID")
                .passwordParameter("loginPassword")
                .permitAll()
            )

            // 3) 로그아웃
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/firstpage")
                .invalidateHttpSession(true)
                .permitAll()
            );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}