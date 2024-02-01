package com.example.MOW.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.MOW.entity.Caregiver;



@Repository
public interface CaregiversRepository extends JpaRepository<Caregiver, Long>{

}
