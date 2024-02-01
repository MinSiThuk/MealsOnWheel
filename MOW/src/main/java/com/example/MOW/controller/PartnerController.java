package com.example.MOW.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.MOW.entity.Partner;
import com.example.MOW.service.PartnerService;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value="/partners")
public class PartnerController {
	@Autowired
	private PartnerService parSer;
	@PostMapping (value="/signup")
	public void newPartner(@RequestBody Partner p) {
		parSer.savePartner(p);
	}
	@GetMapping(value = "/partner")
	public List<Partner> viewPartner(){
		return parSer.selectPartner();
	}
	


}
