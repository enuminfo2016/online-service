package com.enuminfo.cloud.data.mapper;

import java.text.DateFormat;

import com.enuminfo.cloud.data.model.Location;
import com.enuminfo.cloud.rest.dto.LocationDto;

public class LocationMapper {

	private static LocationMapper instance;
	
	private LocationMapper() {

	}
	
	public static LocationMapper getInstance() {
		if (instance == null)
			instance = new LocationMapper();
		return instance;
	}
	
	public LocationDto conertModelToDto(Location model) {
		LocationDto dto = new LocationDto();
		dto.setId(model.getId());
		dto.setName(model.getName());
		dto.setPin(model.getPin());
		dto.setCity(model.getCity());
		dto.setState(model.getState());
		dto.setStatus(model.getStatus());
		dto.setLastModifiedBy(model.getUpdatedBy());
		dto.setLastModifiedOn(DateFormat.getDateTimeInstance().format(model.getUpdatedOn()));
		return dto;
	}
}
