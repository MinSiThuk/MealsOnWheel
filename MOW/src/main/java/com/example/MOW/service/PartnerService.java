package com.example.MOW.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.MOW.entity.Partner;
import com.example.MOW.repo.PartnerRepository;

@Service
public class PartnerService {
	@Autowired
	PartnerRepository parRepo;
	public void savePartner (Partner p) {
		parRepo.save(p);
		
	}
	 public List<Partner> selectPartner(){
	    	return parRepo.findAll();
	    }
	   

}
