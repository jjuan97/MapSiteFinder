package com.jjuan97.MapSiteFinder.service;

import com.jjuan97.MapSiteFinder.model.Site;

import java.util.List;

public interface ISiteService {

    public Site getSiteById(Long id);
    public List<Site> getAllSites();
}
