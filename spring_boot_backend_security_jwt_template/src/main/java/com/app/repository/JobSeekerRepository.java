package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.JobSeeker;

public interface JobSeekerRepository extends JpaRepository<JobSeeker,Long> {

}
