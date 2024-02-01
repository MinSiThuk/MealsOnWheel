package com.example.MOW.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.MOW.entity.Volunteer;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{

}
