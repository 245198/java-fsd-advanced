package com.bootsecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class EmpSecurityConfig extends WebSecurityConfigurerAdapter{

	//allowing which users can access
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception
	{
		auth.inMemoryAuthentication().withUser("bond").password("james").roles("USER").and().withUser("poo").password("bear").roles("ADMIN");
	}
	//inmemory authetication: credentials are stored in some local cache
	//which resources authenticated user can access
	
	@Bean
	@SuppressWarnings("deprecation")
	public PasswordEncoder getPasswordEncorder()
	{
		return NoOpPasswordEncoder.getInstance();
	}
	//who can access which endpoints : authorisation
	@Override
	protected void configure(HttpSecurity http) throws Exception
	{
		http.authorizeRequests().antMatchers("/admin").hasRole("ADMIN").antMatchers("/user").
		hasRole("USER").antMatchers("/").permitAll().and().formLogin();
		// '/' root anyone can access this endpoint (default)
	}
}
