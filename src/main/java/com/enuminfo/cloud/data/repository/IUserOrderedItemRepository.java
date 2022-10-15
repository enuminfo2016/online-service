package com.enuminfo.cloud.data.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.enuminfo.cloud.data.model.UserOrderedItem;

@Repository
public interface IUserOrderedItemRepository extends PagingAndSortingRepository<UserOrderedItem, Long> {

}
