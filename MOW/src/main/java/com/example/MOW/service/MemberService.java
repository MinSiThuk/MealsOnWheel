package com.example.MOW.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MOW.entity.Member;
import com.example.MOW.repo.MemberRepository;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public void signUp(Member member) {
        memberRepository.save(member);
    }
    public List<Member> selectMember(){
    	return memberRepository.findAll();
    }
   
    
}