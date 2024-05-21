package com.generalinsurance.service;

import java.util.List;


import com.generalinsurance.model.Claim;


public interface ClaimService {
	public Claim add(Claim claim) ;
	public List<Claim> listAll();
	public Claim getById(int claimId);
	public void deleteById(int claimId);
	public Claim update(Claim claim);
}