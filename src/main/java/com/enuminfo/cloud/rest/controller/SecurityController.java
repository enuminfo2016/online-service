package com.enuminfo.cloud.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enuminfo.cloud.rest.RequestPath;
import com.enuminfo.cloud.rest.dto.UserDto;
import com.enuminfo.cloud.service.IUserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping(value = RequestPath.REST_ENDPOINT)
public class SecurityController {
	
	@Autowired
	IUserService userService;

	@PostMapping(value = RequestPath.USER_AUTHENTICATION)
	public UserDto handleInternalRequestForAuthentication(@RequestBody UserDto dto) {
		log.info("### SecurityController.handleInternalRequestForAuthentication ... {}", dto);
		return userService.getUserByCredential(dto.getUsername(), dto.getPassword());
	}

	@PostMapping(value = RequestPath.USER_REGISTRATION)
	public void handleInternalRequestForRegistration(@RequestBody UserDto dto) {
		log.info("### SecurityController.handleInternalRequestForRegistration ... {}", dto);
		userService.saveUser(dto);
	}
}
