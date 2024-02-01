package com.example.MOW.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.MOW.entity.Member;
import com.example.MOW.service.MemberService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(value="/members")
public class MemberController {
    @Autowired
    private MemberService memberService;

    @PostMapping(value="/signup")
    public ResponseEntity<String> signUp(@RequestBody Member member) {
        // Add validation and error handling
        memberService.signUp(member);
        return ResponseEntity.status(HttpStatus.CREATED).body("Member created successfully");
        
    }
    @GetMapping(value = "/member")
	public List<Member> viewMember(){
		return memberService.selectMember();
	}
	
    
}