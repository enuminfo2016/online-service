package com.enuminfo.cloud.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@SuppressWarnings("serial")
@EqualsAndHashCode(callSuper = false)
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Setter
@Getter
public class LocationDto extends BaseDto {

	private String value1;
	private String value2;
	private String value3;
	private String name;
	private String state;
	private String city;
	private String country;
	private long pin;
}
