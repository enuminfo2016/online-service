package com.enuminfo.cloud.rest.dto;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@SuppressWarnings("serial")
@EqualsAndHashCode(callSuper = false)
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Setter
@Getter
public class CatalogProductDto implements Serializable {

	private long id;
	private String fullName;
	private String fullDescription;
	private double newPrice;
	private double oldPrice;
	private String sale;
	private String outOfStock;
	private double quantity;
	private String categoryName;
	private List<String> images;
	private String mainImgName;
	private String detailsLink;
	private long categoryId;
}
