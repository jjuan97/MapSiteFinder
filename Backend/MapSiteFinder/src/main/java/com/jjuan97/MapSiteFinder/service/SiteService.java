package com.jjuan97.MapSiteFinder.service;

import com.jjuan97.MapSiteFinder.exception.SiteNotFoundException;
import com.jjuan97.MapSiteFinder.model.ISiteDao;
import com.jjuan97.MapSiteFinder.model.Site;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SiteService implements ISiteService{

    @Autowired
    private ISiteDao siteDao;

    public Site getSiteById(Long id) {
        return siteDao.findById(id)
                .orElseThrow(() -> new SiteNotFoundException("Site id: " + id + " Not Found"));
    }

    public List<Site> getAllSites() {
        return (List<Site>) siteDao.findAll();
    }
}
