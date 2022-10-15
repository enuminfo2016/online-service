package com.enuminfo.cloud.data.mapper;

import java.text.DateFormat;

import com.enuminfo.cloud.data.model.Catalog;
import com.enuminfo.cloud.rest.dto.CatalogDto;

public class CatalogMapper {

	private static CatalogMapper instance;
	
	private CatalogMapper() {

	}
	
	public static CatalogMapper getInstance() {
		if (instance == null)
			instance = new CatalogMapper();
		return instance;
	}
	
	public CatalogDto conertModelToDto(Catalog model) {
		CatalogDto dto = new CatalogDto();
		dto.setId(model.getId());
		dto.setName(model.getName());
		dto.setStart(DateFormat.getDateInstance().format(model.getStart()));
		dto.setStatus(model.getStatus());
		dto.setEnd(DateFormat.getDateInstance().format(model.getEnd()));
		dto.setLastModifiedBy(model.getUpdatedBy());
		dto.setLastModifiedOn(model.getUpdatedOn().toString());
		return dto;
	}
}
