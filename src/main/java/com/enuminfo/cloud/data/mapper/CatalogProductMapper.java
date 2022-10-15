package com.enuminfo.cloud.data.mapper;

import java.util.ArrayList;
import java.util.List;

import com.enuminfo.cloud.data.model.CatalogProduct;
import com.enuminfo.cloud.data.model.Category;
import com.enuminfo.cloud.data.model.Product;
import com.enuminfo.cloud.data.model.ProductImage;
import com.enuminfo.cloud.rest.dto.CatalogProductDto;
import com.enuminfo.cloud.util.Constants;

public class CatalogProductMapper {

	private static CatalogProductMapper instance;
	
	private CatalogProductMapper() {

	}
	
	public static CatalogProductMapper getInstance() {
		if (instance == null)
			instance = new CatalogProductMapper();
		return instance;
	}
	
	public CatalogProductDto conertModelToDto(CatalogProduct model, Product product, Category category) {
		CatalogProductDto dto = new CatalogProductDto();
		dto.setId(model.getId());
		dto.setFullName(product.getName());				
		dto.setCategoryName(category.getName());
		dto.setQuantity(model.getQuantity());
		dto.setNewPrice(model.getPrice());
		dto.setOldPrice(model.getPrice());
		if (dto.getQuantity() != 0) dto.setSale(Constants.SALE);
		else dto.setOutOfStock(Constants.OUT_OF_STOCK);
		List<ProductImage> mainProductImages = new ArrayList<>();
		if (!mainProductImages.isEmpty()) dto.setMainImgName(Constants.IMAGE_PATH + mainProductImages.get(0).getImgName());
		else dto.setMainImgName(Constants.IMAGE_PATH + Constants.DEFAULT_IMAGE_NAME + Constants.DEFAULT_IMAGE_PREFIX);
		dto.setDetailsLink(String.valueOf(dto.getId()));
		return dto;
	}
}
