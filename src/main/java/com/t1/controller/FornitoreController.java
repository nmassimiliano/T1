package com.t1.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.t1.controller.base.FornitoreBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/T1.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class FornitoreController extends FornitoreBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}