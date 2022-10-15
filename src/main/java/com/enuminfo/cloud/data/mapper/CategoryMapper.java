package com.enuminfo.cloud.data.mapper;

import com.enuminfo.cloud.data.model.Category;
import com.enuminfo.cloud.rest.dto.CategoryDto;

public class CategoryMapper {

	private static CategoryMapper instance;
	
	private CategoryMapper() {

	}
	
	public static CategoryMapper getInstance() {
		if (instance == null)
			instance = new CategoryMapper();
		return instance;
	}
	
	public CategoryDto conertModelToDto(Category model) {
		CategoryDto dto = new CategoryDto();
		dto.setId(model.getId());
		dto.setFullName(model.getName());
		dto.setFullDescription(model.getDescription());
		dto.setStatus(model.getStatus());
		dto.setHtmlValue(model.getName());
		dto.setLastModifiedBy(model.getUpdatedBy());
		dto.setLastModifiedOn(model.getUpdatedOn().toString());
		return dto;
	}
}
