package com.enuminfo.cloud.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enuminfo.cloud.data.model.User;
import com.enuminfo.cloud.data.model.UserDetail;
import com.enuminfo.cloud.data.repository.IUserDetailRepository;
import com.enuminfo.cloud.data.repository.IUserRepository;
import com.enuminfo.cloud.rest.dto.UserDto;
import com.enuminfo.cloud.service.IUserService;

@Service
public class UserService implements IUserService {

	@Autowired
	IUserRepository userRepository;

	@Autowired
	IUserDetailRepository userDetailRepository;

	@Override
	public UserDto getUserByCredential(String username, String password) {
		UserDto dto = new UserDto();
		Optional<User> optionalUser = Optional.ofNullable(userRepository.findByUsernameAndPassword(username, password));
		if (optionalUser.isPresent()) {
			Optional<UserDetail> optionalDetail = Optional
					.ofNullable(userDetailRepository.findByEmail(optionalUser.get().getUsername()));
			if (optionalDetail.isPresent()) {
				dto.setId(optionalDetail.get().getId());
				dto.setFirstName(optionalDetail.get().getFirstName());
				dto.setMiddleName(optionalDetail.get().getMiddleName());
				dto.setLastName(optionalDetail.get().getLastName());
				dto.setEmail(optionalDetail.get().getEmail());
				dto.setPhone(optionalDetail.get().getPhone());
				dto.setAccess(optionalUser.get().getAccess());
				dto.setLoggedIn(Boolean.TRUE);
			}
		}
		return dto;
	}

	@Override
	public void saveUser(UserDto dto) {
		UserDetail detailModel = new UserDetail();
		detailModel.setFirstName(dto.getFirstName());
		detailModel.setMiddleName(dto.getMiddleName());
		detailModel.setLastName(dto.getLastName());
		detailModel.setEmail(dto.getEmail());
		detailModel.setPhone(dto.getPhone());
		userDetailRepository.save(detailModel);
		
		User userModel = new User();
		userModel.setUsername(dto.getEmail());
		userModel.setPassword(dto.getPassword());
		userModel.setAccess(dto.getAccess());
		userRepository.save(userModel);
	}
}
