package com.enuminfo.cloud.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enuminfo.cloud.data.mapper.CategoryMapper;
import com.enuminfo.cloud.data.model.Category;
import com.enuminfo.cloud.data.repository.ICategoryRepository;
import com.enuminfo.cloud.rest.dto.CategoryDto;
import com.enuminfo.cloud.service.IAdminService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class AdminService implements IAdminService {

	@Autowired
	ICategoryRepository categoryRepository;

	@Override
	public List<CategoryDto> getAllCategories() {
		List<CategoryDto> dtos = new ArrayList<>();
		log.info("### AdminService.getAllCategories ... ");
		categoryRepository.findByStatus(Boolean.TRUE)
				.forEach(model -> dtos.add(CategoryMapper.getInstance().conertModelToDto(model)));
		return dtos;

	}

	@Override
	public CategoryDto getCategoryById(String value) {
		log.info("### AdminService.getCategoryById ... {}", value);
		Optional<Category> optionalModel = categoryRepository.findById(Long.parseLong(value));
		if (optionalModel.isPresent())
			return CategoryMapper.getInstance().conertModelToDto(optionalModel.get());
		return null;
	}
}
