package com.jjuan97.MapSiteFinder;

import com.jjuan97.MapSiteFinder.model.Site;
import com.jjuan97.MapSiteFinder.service.SiteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sites")
public class SiteController {

    private final SiteService siteService;

    public SiteController(SiteService siteService) {
        this.siteService = siteService;
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Site> getSiteById(@PathVariable("id") Long id) {
        Site site = siteService.getSiteById(id);
        return new ResponseEntity<>(site, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Site>> getAllSites() {
        List<Site> sites = siteService.getAllSites();
        return new ResponseEntity<>(sites, HttpStatus.OK);
    }
}
