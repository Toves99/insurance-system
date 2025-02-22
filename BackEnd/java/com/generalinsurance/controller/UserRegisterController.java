package com.generalinsurance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generalinsurance.model.User;
import com.generalinsurance.service.UserRegistrationService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserRegisterController {

	@Autowired
	private UserRegistrationService userService;
	
	@PostMapping("/adduser")
	public User RegisterUser(@RequestBody User user) throws Exception{
		
		String tempEmail = user.getEmail();
		if(tempEmail != null && !"".equals(tempEmail)) {
			User userObj = userService.fetchUserByEmailId(tempEmail);
			if(userObj !=null) {
				throw new Exception("User with "+ tempEmail + "is already exist");
			}
		}
		User userObj = null;
		userObj = userService.addUser(user);
		return userObj;
	}
	
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		
		User userObj = null;
		if(tempEmail!=null && tempPass != null) {
			userObj = userService.fetchUserByEmailAndPassword(tempEmail,tempPass);
		}
		if(userObj == null) {
			throw new Exception("User does not exist");
		}
		return userObj;
		
	}
	
	@GetMapping("/list")
	public List<User> allUser(){
		return userService.allUser();
	}
	
	@GetMapping("/UserById/{Id}")
	public User userById(@PathVariable Integer Id) {
		return userService.getUserById(Id);
	}
	
	@PutMapping("/update")
	public User UpdateUser(@RequestBody User user) {
		return userService.updateUserById(user);
	}
	
	
	
}