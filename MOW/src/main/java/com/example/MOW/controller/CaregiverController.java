package com.example.MOW.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MOW.entity.Caregiver;
import com.example.MOW.service.CaregiverService;

@RestController
@RequestMapping(value="/caregivers")
@CrossOrigin("http://localhost:3000")
public class CaregiverController {
	@Autowired
	private CaregiverService careSer;
	@PostMapping (value="/signup")
	public void newCaregiver(@RequestBody Caregiver c) {
		careSer.saveCaregiver(c);
	}
	 @GetMapping(value = "/caregiver")
		public List<Caregiver> viewCaregiver(){
			return careSer.selectCaregiver();
		}

}
