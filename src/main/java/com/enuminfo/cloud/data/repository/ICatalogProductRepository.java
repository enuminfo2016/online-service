package com.enuminfo.cloud.data.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.enuminfo.cloud.data.model.CatalogProduct;

@Repository
public interface ICatalogProductRepository extends PagingAndSortingRepository<CatalogProduct, Long> {

	List<CatalogProduct> findByCatalog(Long catalog);

	Optional<CatalogProduct> findByProduct(Long product);
}
