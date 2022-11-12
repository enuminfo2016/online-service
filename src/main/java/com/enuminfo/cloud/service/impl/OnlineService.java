package com.enuminfo.cloud.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enuminfo.cloud.data.mapper.CatalogProductMapper;
import com.enuminfo.cloud.data.mapper.LocationMapper;
import com.enuminfo.cloud.data.model.CatalogProduct;
import com.enuminfo.cloud.data.model.Category;
import com.enuminfo.cloud.data.model.Country;
import com.enuminfo.cloud.data.model.Location;
import com.enuminfo.cloud.data.model.Product;
import com.enuminfo.cloud.data.repository.ICatalogProductRepository;
import com.enuminfo.cloud.data.repository.ICatalogRepository;
import com.enuminfo.cloud.data.repository.ICategoryRepository;
import com.enuminfo.cloud.data.repository.ICountryRepository;
import com.enuminfo.cloud.data.repository.ILocationRepository;
import com.enuminfo.cloud.data.repository.IProductImageRepository;
import com.enuminfo.cloud.data.repository.IProductRepository;
import com.enuminfo.cloud.data.repository.IUserOrderedItemRepository;
import com.enuminfo.cloud.rest.dto.CatalogProductDto;
import com.enuminfo.cloud.rest.dto.LocationDto;
import com.enuminfo.cloud.service.IOnlineService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class OnlineService implements IOnlineService {

	@Autowired
	ICountryRepository countryRepository;

	@Autowired
	ILocationRepository locationRepository;

	@Autowired
	ICategoryRepository categoryRepository;

	@Autowired
	IProductRepository productRepository;

	@Autowired
	ICatalogProductRepository catalogProductRepository;

	@Autowired
	ICatalogRepository catalogRepository;

	@Autowired
	IUserOrderedItemRepository userOrderedItemRepository;

	@Autowired
	IProductImageRepository productImageRepository;

	@Override
	public List<String> getAllCountries() {
		return countryRepository.findByStatus(Boolean.TRUE).stream().map(Country::getName).toList();
	}

	@Override
	public List<String> getAllStates(String country) {
		Optional<Country> countryOptional = countryRepository.findByName(country);
		if (countryOptional.isPresent())
			return locationRepository.findByCountry(countryOptional.get().getId()).stream().map(Location::getState).toList();
		return new ArrayList<>();
	}

	@Override
	public List<String> getAllCities(String state) {
		return locationRepository.findByState(state).stream().map(Location::getCity).toList();
	}

	@Override
	public List<LocationDto> getAllLocations(String city) {
		return locationRepository.findByCity(city).stream().map(model -> LocationMapper.getInstance().conertModelToDto(model)).toList();
	}

	@Override
	public List<CatalogProductDto> getProductsByCategory(String value) {
		log.info("### OnlineService.getProductsByCategory ...  {}", value);
		List<CatalogProductDto> dtos = new ArrayList<>();
		catalogRepository.findByStatus(Boolean.TRUE).forEach(catalogModel -> {
			Date currentDate = new Date();
			if (currentDate.after(catalogModel.getStart()) && currentDate.before(catalogModel.getEnd())) {
				catalogProductRepository.findByCatalog(catalogModel.getId()).forEach(model -> {
					Product product = null;
					Category category = null;
					Optional<Product> optionalProduct = productRepository.findById(model.getProduct());
					if (optionalProduct.isPresent()) {
						product = optionalProduct.get();
						Optional<Category> optionalCategory = categoryRepository.findById(product.getCategory());
						if (optionalCategory.isPresent())
							category = optionalCategory.get();
					}
					if (category.getId() == Long.parseLong(value))
						dtos.add(CatalogProductMapper.getInstance().conertModelToDto(model, product, category));
				});
			}
		});
		return dtos;
	}

	@Override
	public CatalogProductDto getProductDetailByProduct(String value) {
		log.info("### OnlineService.getProductDetailByProduct ...  {}", value);
		CatalogProductDto dto = new CatalogProductDto();
		Optional<CatalogProduct> optionalCatalogProduct = catalogProductRepository.findByProduct(Long.parseLong(value));
		if (optionalCatalogProduct.isPresent()) {
			CatalogProduct model = optionalCatalogProduct.get();
			Product product = null;
			Category category = null;
			Optional<Product> optionalProduct = productRepository.findById(model.getProduct());
			if (optionalProduct.isPresent()) {
				product = optionalProduct.get();
				Optional<Category> optionalCategory = categoryRepository.findById(product.getCategory());
				if (optionalCategory.isPresent())
					category = optionalCategory.get();
			}
			if (product.getId() == Long.parseLong(value))
				dto = CatalogProductMapper.getInstance().conertModelToDto(model, product, category);
		}
		return dto;
	}
}
