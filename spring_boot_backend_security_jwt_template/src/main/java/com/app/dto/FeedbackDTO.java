package com.app.dto;

public class FeedbackDTO {

    private Long feedbackId;
    private String feedbackTitle;
    private Long jobSeekerId;

    // Constructors
    public FeedbackDTO() {}

    public FeedbackDTO(Long feedbackId, String feedbackTitle, Long jobSeekerId) {
        this.feedbackId = feedbackId;
        this.feedbackTitle = feedbackTitle;
        this.jobSeekerId = jobSeekerId;
    }

    // Getters and Setters
    public Long getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(Long feedbackId) {
        this.feedbackId = feedbackId;
    }

    public String getFeedbackTitle() {
        return feedbackTitle;
    }

    public void setFeedbackTitle(String feedbackTitle) {
        this.feedbackTitle = feedbackTitle;
    }

    public Long getJobSeekerId() {
        return jobSeekerId;
    }

    public void setJobSeekerId(Long jobSeekerId) {
        this.jobSeekerId = jobSeekerId;
    }
}
