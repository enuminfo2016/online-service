package com.enuminfo.cloud.service;

import com.enuminfo.cloud.rest.dto.UserDto;

public interface IUserService {

	UserDto getUserByCredential(String username, String password);

	void saveUser(UserDto dto);
}
