 package com.Hospital.Management.System.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Hospital.Management.System.doclogin.entity.Medicine;
import com.Hospital.Management.System.doclogin.repository.MedicineRepository;

@RestController
@RequestMapping("/api/v3")
public class MedicineController {

    private final MedicineRepository medicineRepository;

    public MedicineController(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/medicines")
    public Medicine createMedicine(@RequestBody Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/medicines")
    public List<Medicine> getAllMedicine() {
        return medicineRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/medicines/{id}")
    public ResponseEntity<Medicine> getMedicineById(@PathVariable Long id) throws AttributeNotFoundException {
        Medicine medicine = medicineRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Medicine not found with id " + id));
        return ResponseEntity.ok(medicine);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/medicines/{id}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable Long id, @RequestBody Medicine medicineDetails) {
        Medicine existingMedicine = medicineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medicine not found with id " + id));

        existingMedicine.setDrugName(medicineDetails.getDrugName());
        existingMedicine.setStock(medicineDetails.getStock());
        // Add more fields if needed

        final Medicine updatedMedicine = medicineRepository.save(existingMedicine);
        return ResponseEntity.ok(updatedMedicine);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/medicines/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMedicine(@PathVariable Long id) throws AttributeNotFoundException {
        Medicine existingMedicine = medicineRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Medicine not found with id " + id));
        
        medicineRepository.delete(existingMedicine);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
