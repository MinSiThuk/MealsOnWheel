package com.example.MOW.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MOW.entity.Caregiver;
import com.example.MOW.repo.CaregiversRepository;

@Service
public class CaregiverService {
	@Autowired
	CaregiversRepository careRepo;
	public void saveCaregiver (Caregiver care) {
		careRepo.save(care);
	}
	 public List<Caregiver> selectCaregiver(){
	    	return careRepo.findAll();
	    }

	

};
