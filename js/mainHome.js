// IMPORT
// header
import {Header} from './components/header/Header.js';
import { headerData } from './data/headerData.js';


// hero
//about
//interests
// achievements
import{Achievements} from './components/achievements/Achievements.js';
import{achievementsData} from './data/achievementsData.js';
// services
import { servicesData} from './data/servicesData.js';
import {services} from './components/services/services.js';
//featured projects
//work expertise
//portfolio
//feedback
//blog
//freelance
//contact
// footer

// FUNKCIJU PANAUDOJIMAS
// header
new Header ('#main_header', headerData);
// hero
//about
//interests
// achievements
const achievement = new Achievements('#achievement_block', achievementsData);
// services
services('#serviceItem', servicesData)
//featured projects
//work expertise
//portfolio
//feedback
//blog
//freelance
//contact
// footer