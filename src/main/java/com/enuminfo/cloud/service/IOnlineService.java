package com.enuminfo.cloud.service;

import java.util.List;

import com.enuminfo.cloud.rest.dto.CatalogProductDto;
import com.enuminfo.cloud.rest.dto.LocationDto;

public interface IOnlineService {

	List<String> getAllCountries();

	List<String> getAllStates(String country);

	List<String> getAllCities(String state);

	List<LocationDto> getAllLocations(String city);

	List<CatalogProductDto> getProductsByCategory(String value);

	CatalogProductDto getProductDetailByProduct(String value);
}
