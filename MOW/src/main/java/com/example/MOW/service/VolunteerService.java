package com.example.MOW.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.MOW.entity.Volunteer;
import com.example.MOW.repo.VolunteerRepository;

@Service
public class VolunteerService {
	@Autowired
	VolunteerRepository volRepo;
	public void saveVolunteer (Volunteer v) {
		volRepo.save(v);
		
	}
	public List<Volunteer> selectVolunteer(){
    	return volRepo.findAll();
    }
   
	

}
