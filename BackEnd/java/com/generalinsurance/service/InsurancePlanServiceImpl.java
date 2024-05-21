package com.generalinsurance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generalinsurance.model.InsurancePlan;
import com.generalinsurance.repository.InsurancePlanRepository;

@Service
public class InsurancePlanServiceImpl implements InsurancePlanService{

	@Autowired
	InsurancePlanRepository insurancePlanRepository;
	
	@Override
	public List<InsurancePlan> allInsurancePlan() {
		
		return insurancePlanRepository.findAll();
	}

	

	@Override
	public InsurancePlan addPlan(InsurancePlan insurancePlan) {
		return insurancePlanRepository.save(insurancePlan);
	}



	@Override
	public InsurancePlan findPlanById(int id) {
		
		return insurancePlanRepository.findById(id).get();
	}

}
