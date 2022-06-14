package com.jjuan97.MapSiteFinder.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="sites")
public class Site implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String city;
    private String admin_name;
    private String country;
    private Double lat;
    private Double lng;
    private String iso2;
    private String capital;
    private Double population;
    private Double population_proper;

    public Site (){

    }

    public Site(Long id, String city, String admin_name, String country, Double lat, Double lng, String iso2, String capital, Double population, Double population_proper) {
        this.id = id;
        this.city = city;
        this.admin_name = admin_name;
        this.country = country;
        this.lat = lat;
        this.lng = lng;
        this.iso2 = iso2;
        this.capital = capital;
        this.population = population;
        this.population_proper = population_proper;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getCity() {
        return city;
    }

    public String getAdmin_name() {
        return admin_name;
    }

    public String getCountry() {
        return country;
    }

    public Double getLat() {
        return lat;
    }

    public Double getLng() {
        return lng;
    }

    public String getIso2() {
        return iso2;
    }

    public String getCapital() {
        return capital;
    }

    public Double getPopulation() {
        return population;
    }

    public Double getPopulation_proper() {
        return population_proper;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setAdmin_name(String admin_name) {
        this.admin_name = admin_name;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public void setIso2(String iso2) {
        this.iso2 = iso2;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    public void setPopulation(Double population) {
        this.population = population;
    }

    public void setPopulation_proper(Double population_proper) {
        this.population_proper = population_proper;
    }
}
