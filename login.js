/**
 *	<LumenFX: An FX system designed and built by thecitysecret>
 *  Copyright (C) 2015 thecitysecret
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 * 
 */


module.exports 	= function (){
"use strict";
var LoginService 	= require('./LoginService'),
	loginService 	= new LoginService(),
	seneca 			= this;
	
	/**
	 * Seneca role declaration / Seneca method signature
	 */
	this.add({role:'accountAPI', cmd:'registerTrader'},loginService.registerTrader)
	this.add({role:'accountAPI', cmd:'getCurrentTrader'},loginService.getCurrentTrader)
	this.add({role:'accountAPI', cmd:'setLocalPairs'},loginService.setLocalPairs)
	this.add({role:'accountAPI', cmd:'setTradingLimits'},loginService.setTradingLimits)
}
