package com.example.MOW.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.MOW.entity.Partner;



@Repository
public interface PartnerRepository extends JpaRepository<Partner, Long>{

}
