package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EmailDTO;

@RestController
public class AppController {

	@Autowired
	private JavaMailSender javaMailSender;

	@PostMapping("/sendemail")
	public ResponseEntity<?> sendEmail(@RequestBody EmailDTO emailDTO) {
		try {
			if (emailDTO.getTo() == null || emailDTO.getTo().isEmpty()) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Recipient email address is required");
			}
			if (emailDTO.getSubject() == null || emailDTO.getSubject().isEmpty()) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email subject is required");
			}
			if (emailDTO.getText() == null || emailDTO.getText().isEmpty()) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email text is required");
			}

			SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
			simpleMailMessage.setTo(emailDTO.getTo());
			simpleMailMessage.setSubject(emailDTO.getSubject());
			simpleMailMessage.setText(emailDTO.getText());
			javaMailSender.send(simpleMailMessage);

			return ResponseEntity.ok("Email sent successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred while sending the email.");
		}
	}
}
