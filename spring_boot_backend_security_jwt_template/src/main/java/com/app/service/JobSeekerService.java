package com.app.service;

import com.app.dto.JobSeekerDTO;
import java.util.List;

public interface JobSeekerService {
	JobSeekerDTO createJobSeeker(JobSeekerDTO jobSeekerDTO);

	JobSeekerDTO getJobSeekerById(Long jobSeekerId);

	List<JobSeekerDTO> getAllJobSeekers();

	JobSeekerDTO updateJobSeeker(Long jobSeekerId, JobSeekerDTO jobSeekerDTO);

	void deleteJobSeeker(Long jobSeekerId);
}
