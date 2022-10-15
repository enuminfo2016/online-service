package com.enuminfo.cloud.data.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.enuminfo.cloud.data.model.Country;

@Repository
public interface ICountryRepository extends PagingAndSortingRepository<Country, Long> {

	List<Country> findByStatus(Boolean status);

	Optional<Country> findByName(String name);
}
