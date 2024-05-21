package com.generalinsurance.model;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
@Entity
public class Claim {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="claimId")
	private int claimId;
	private LocalDateTime date=LocalDateTime.now();
	private String approval="Approval Pending";	
	@Column(nullable = true)
	//private double amount;
	private long mobileNumber;
	private int policyNumber;
	private String reason;
//	{
//		"date":"1999-12-01",
//		"approval" : "done",
//		"amount": 23879.98,
//		"policyNumber":1235,
//		"reason":"jktyfygiuwg hvhr"
//	}
	
	// Mapping the column of this table 
    @ManyToOne(cascade= CascadeType.ALL)
    //Adding the name
    @JoinColumn(name = "userId",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

	public int getClaimId() {
		return claimId;
	}

	public void setClaimId(int claimId) {
		this.claimId = claimId;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public String getApproval() {
		return approval;
	}

	public void setApproval(String approval) {
		this.approval = approval;
	}

	//public double getAmount() {
	//	return amount;
	//}

	//public void setAmount(double amount) {
	//	this.amount = amount;
	//}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public int getPolicyNumber() {
		return policyNumber;
	}

	public void setPolicyNumber(int policyNumber) {
		this.policyNumber = policyNumber;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Claim [claimId=" + claimId + ", date=" + date + ", approval=" + approval + ","
				+ " mobileNumber=" + mobileNumber + ", policyNumber=" + policyNumber + ", reason=" + reason + ", user="
				+ user + "]";
	}

	public Claim(LocalDateTime date, String approval, double amount, long mobileNumber, int policyNumber, String reason,
			User user) {
		super();
		this.date = date;
		this.approval = approval;
		//this.amount = amount;
		this.mobileNumber = mobileNumber;
		this.policyNumber = policyNumber;
		this.reason = reason;
		this.user = user;
	}

	public Claim() {
		super();
	
	}


}