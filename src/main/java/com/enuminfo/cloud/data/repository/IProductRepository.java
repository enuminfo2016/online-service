package com.enuminfo.cloud.data.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.enuminfo.cloud.data.model.Product;

@Repository
public interface IProductRepository extends PagingAndSortingRepository<Product, Long> {

}
