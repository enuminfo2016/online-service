package com.enuminfo.cloud.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enuminfo.cloud.rest.RequestPath;
import com.enuminfo.cloud.rest.dto.CatalogProductDto;
import com.enuminfo.cloud.rest.dto.LocationDto;
import com.enuminfo.cloud.service.IOnlineService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping(value = RequestPath.REST_ENDPOINT)
public class OnlineController {

	@Autowired
	IOnlineService onlineService;

	@GetMapping(value = RequestPath.CATALOG_PRODUCTS_BY_CATEGORY)
	public List<CatalogProductDto> handleInternalRequestForCatalogProductsByCategory(@PathVariable String value) {
		log.info("### OnlineController.handleInternalRequestForCatalogProductsByCategory ... ");
		return onlineService.getProductsByCategory(value);
	}

	@GetMapping(value = RequestPath.COUNTRIES)
	public List<String> handleInteralRequestForAllCountries() {
		log.info("### OnlineController.handleInteralRequestForAllCountries ... ");
		return onlineService.getAllCountries();
	}

	@GetMapping(value = RequestPath.STATES_BY_COUNTRY)
	public List<String> handleInternalRequestForAllStates(@PathVariable String value) {
		log.info("### OnlineController.handleInternalRequestForAllStates ... ");
		return onlineService.getAllStates(value);
	}

	@GetMapping(value = RequestPath.CITIES_BY_STATE)
	public List<String> handleInternalRequestForAllCities(@PathVariable String value) {
		log.info("### OnlineController.handleInternalRequestForAllCities ... ");
		return onlineService.getAllCities(value);
	}

	@GetMapping(value = RequestPath.LOCATIONS_BY_CITY)
	public List<LocationDto> handleInternalRequestForAllLocations(@PathVariable String value) {
		log.info("### OnlineController.handleInternalRequestForAllLocations ... ");
		return onlineService.getAllLocations(value);
	}

	@GetMapping(value = RequestPath.CATALOG_PRODUCT_DETAIL_BY_PRODUCT)
	public CatalogProductDto handleInternalRequestForCatalogProductDetailByProduct(@PathVariable String value) {
		log.info("### OnlineController.handleInternalRequestForCatalogProductDetailByProduct ... ");
		return onlineService.getProductDetailByProduct(value);
	}
}
