package com.generalinsurance.service;

import java.util.List;

import com.generalinsurance.model.Payment;

public interface PaymentService {

	public Payment addPayment(Payment payment);
	public List<Payment>allPayments();
	
}
