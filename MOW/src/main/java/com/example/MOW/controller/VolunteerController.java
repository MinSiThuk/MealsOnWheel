package com.example.MOW.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.MOW.entity.Volunteer;
import com.example.MOW.service.VolunteerService;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value="/volunteers")
public class VolunteerController {
	@Autowired
	private VolunteerService volSer;
	@PostMapping (value="/signup")
	public void newVolunteer(@RequestBody Volunteer v) {
		volSer.saveVolunteer(v);
	}
	@GetMapping(value = "/volunteer")
	public List<Volunteer> viewVolunteer(){
		return volSer.selectVolunteer();
	}
	
	

}
