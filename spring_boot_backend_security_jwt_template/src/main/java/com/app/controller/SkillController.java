package com.app.controller;

import com.app.dto.SkillDTO;
import com.app.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin("*")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @PostMapping("/createskill")
    public ResponseEntity<SkillDTO> createSkill(@RequestBody SkillDTO skillDTO) {
        SkillDTO createdSkill = skillService.createSkill(skillDTO);
        return ResponseEntity.ok(createdSkill);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<SkillDTO> getSkillById(@PathVariable Long id) {
        SkillDTO skillDTO = skillService.getSkillById(id);
        return ResponseEntity.ok(skillDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<SkillDTO>> getAllSkills() {
        List<SkillDTO> skills = skillService.getAllSkills();
        return ResponseEntity.ok(skills);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<SkillDTO> updateSkill(@PathVariable Long id, @RequestBody SkillDTO skillDTO) {
        SkillDTO updatedSkill = skillService.updateSkill(id, skillDTO);
        return ResponseEntity.ok(updatedSkill);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteSkill(@PathVariable Long id) {
        skillService.deleteSkill(id);
        return ResponseEntity.noContent().build();
    }
}
