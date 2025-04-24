package com.Hospital.Management.System.doclogin.entity;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
@Entity
@Table(name= "medicines")
public class Medicine {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)

private long id;
	@Column(name="drug_name")
	private String drugName;
	@Column(name="stock")
	private String stock;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDrugName() {
		return drugName;
	}
	public void setDrugName(String drugName) {
		this.drugName = drugName;
	}
	public String getStock() {
		return stock;
	}
	public void setStock(String stock) {
		this.stock = stock;
	}
	public Medicine() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Medicine(long id, String drugName, String stock) {
		super();
		this.id = id;
		this.drugName = drugName;
		this.stock = stock;
	}
}