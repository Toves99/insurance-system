package com.generalinsurance.service;

import java.util.List;


import com.generalinsurance.model.InsurancePlan;

public interface InsurancePlanService {


	public List<InsurancePlan> allInsurancePlan();
	InsurancePlan addPlan(InsurancePlan insurancePlan);
	public InsurancePlan findPlanById(int id);
}
