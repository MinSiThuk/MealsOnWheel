package com.example.MOW.repo;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MOW.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
  
}
