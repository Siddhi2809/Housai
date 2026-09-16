'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export const dictionary: Record<string, { en: string; hi: string }> = {
  // Navigation
  'nav.home': { en: 'Home', hi: 'मुख्य पृष्ठ' },
  'nav.about': { en: 'About Us', hi: 'हमारे बारे में' },
  'nav.vruddhashram': { en: 'Vruddhashram', hi: 'वृद्धाश्रम' },
  'nav.work': { en: 'Our Work', hi: 'हमारे कार्य' },
  'nav.team': { en: 'Members & Board', hi: 'सदस्य व पदाधिकारी' },
  'nav.portfolio': { en: 'Portfolio', hi: 'पोर्टफोलियो' },
  'nav.gallery': { en: 'Gallery', hi: 'गैलरी' },
  'nav.legal': { en: 'Legal & 80G', hi: 'कानूनी दस्तावेज' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क करें' },
  'nav.donate': { en: 'DONATE NOW', hi: 'दान करें' },
  'nav.helpline': { en: 'Helpline / हेल्पलाइन:', hi: 'हेल्पलाइन / Helpline:' },
  'nav.language': { en: '', hi: 'भाषा / Language:' },
  // Hero Section
  'hero.badge': { en: 'KHASDAR RAMDASJI ATHAWALE YOUTH FOUNDATION', hi: 'खासदार रामदासजी आठवले यूथ फाउंडेशन' },
  'hero.title1': { en: 'Serving With Care,', hi: 'सेवा, देखभाल और' },
  'hero.title2': { en: 'Dignity & Humanity', hi: 'मानवता का प्रतीक' },
  'hero.description': { en: 'Khasdar Ramdasji Athawale Youth Foundation is committed to uplifting lives through exemplary elderly care at Housai Vruddhashram, healthcare initiatives, social service outreach, youth sports, and skill employment generation.', hi: 'खासदार रामदासजी आठवले यूथ फाउंडेशन के माध्यम से हौसाई वृद्धाश्रम, स्वास्थ्य देखभाल, सामाजिक सेवा, खेल प्रोत्साहन और रोजगार निर्माण के जरिए जरूरतमंद परिवारों को सहारा दिया जा रहा है।' },
  'hero.donateBtn': { en: 'Donate Now', hi: 'दान करें' },
  'hero.joinBtn': { en: 'Join With Us', hi: 'हमसे जुड़ें' },
  'hero.tagline': { en: 'Supporting Senior Care • Housai Vruddhashram', hi: 'वरिष्ठ नागरिक सेवा • हौसाई वृद्धाश्रम' },
  'hero.quote1': { en: 'Care Today.', hi: 'आज की देखभाल,' },
  'hero.quote2': { en: 'Hope for Tomorrow.', hi: 'कल की नई उम्मीद।' },
  'hero.careBadge': { en: 'HOUSAI CARE', hi: 'हौसाई केयर' },

  // Stats
  'stats.years': { en: 'Years of Dedicated Service', hi: 'वर्ष समर्पित सामाजिक सेवा' },
  'stats.projects': { en: 'Projects Across 25 States', hi: 'परियोजनाएं २५ राज्यों में' },
  'stats.houses': { en: 'Homeless Houses Built', hi: 'पक्के मकान बेघरों को दिए' },
  'stats.villages': { en: 'Villages & Slums Covered', hi: 'गांवों व बस्तियों तक पहुंच' },

  // About Page & Home About Section
  'about.bannerBadge': { en: 'MAHARASHTRA PUBLIC CHARITABLE TRUST', hi: 'महाराष्ट्र पब्लिक चैरिटेबल ट्रस्ट' },
  'about.bannerTitle': { en: 'About Our Foundation', hi: 'हमारे फाउंडेशन के बारे में' },
  'about.bannerSub': { en: 'Khasdar Ramdasji Athawale Youth Foundation (Est. 2007) — Serving over 400 projects across 25 states of India with a primary focus on Housai Vruddhashram elderly care.', hi: 'खासदार रामदासजी आठवले यूथ फाउंडेशन (स्थापना २००७) — भारत के २५ राज्यों में ४०० से अधिक सामाजिक परियोजनाओं के साथ कार्यरत।' },
  'about.badge': { en: 'ESTABLISHED 2007 • ALL INDIA CHARITABLE TRUST', hi: 'स्थापना २००७ • अखिल भारतीय सामाजिक संस्था' },
  'about.title': { en: 'Dedicated to Elderly Care, Health, Education & ST Community Welfare', hi: 'वृद्धाश्रम, स्वास्थ्य, शिक्षा और अनुसूचित जनजाति समुदाय के सर्वांगीण विकास के लिए समर्पित' },
  'about.desc': { en: 'Khasdar Ramdasji Athawale Youth Foundation (Reg No: MH/323/F-17200/15) is a development organization operating over 400 projects across 2,000 remote villages & urban slums in 25 states. Our primary flagship unit is Housai Vruddhashram in Sangli.', hi: 'खासदार रामदासजी आठवले यूथ फाउंडेशन (पंजीकरण क्र. MH/323/F-17200/15) के तहत २५ राज्यों के २,००० से अधिक गांवों में ४०० से ज्यादा सामाजिक परियोजनाएं संचालित की जा रही हैं।' },
  'about.p2': { en: 'Established in 2007 under the guidance of Union Minister Hon. Ramdas Athawale Saheb, our charitable trust addresses healthcare, poverty alleviation, child education, anti-addiction, and senior citizen dignity.', hi: 'केंद्रीय मंत्री आदरणीय रामदास आठवले साहब के मार्गदर्शन में २००७ में स्थापित यह ट्रस्ट स्वास्थ्य, गरीबी उन्मूलन, शिक्षा, व्यसनमुक्ति और वृद्ध सेवा में निरंतर कार्यरत है।' },
  'about.m1': { en: '1. Medical Assistance: Financial aid & resources for critical health challenges.', hi: '१. चिकित्सा सहायता: गंभीर बीमारियों के इलाज के लिए वित्तीय सहायता।' },
  'about.m2': { en: '2. Poverty Alleviation: Housing, food, & socioeconomic upliftment programs.', hi: '२. गरीबी उन्मूलन: बेघरों को मकान, राशन व सामाजिक सहायता।' },
  'about.m3': { en: '3. Child Education: Scholarships & hostel aid for ST & poor children.', hi: '३. बाल शिक्षा: अनुसूचित जनजाति व गरीब बच्चों के लिए छात्रवृत्ति व हॉस्टल सहायता।' },
  'about.cardTitle': { en: 'Transparent & Registered Public Trust', hi: 'पारदर्शी व पंजीकृत पब्लिक ट्रस्ट' },
  'about.regNo': { en: 'Trust Reg No:', hi: 'ट्रस्ट पंजीकरण संख्या:' },
  'about.taxExempt': { en: '80G Tax Exemption:', hi: '८०जी आयकर छूट:' },
  'about.taxDesc': { en: '50% Income Tax rebate on all monetary donations under Section 80G.', hi: 'धारा ८०जी के तहत सभी मौद्रिक दानों पर ५०% आयकर छूट।' },
  'about.headquarters': { en: 'Headquarters:', hi: 'मुख्यालय:' },
  'about.headquartersVal': { en: 'Tasgaon & Sangli, Maharashtra | Liaison Office: New Delhi', hi: 'तासगांव व सांगली, महाराष्ट्र | संपर्क कार्यालय: नई दिल्ली' },
  'about.supportBtn': { en: 'SUPPORT HOUSAI VRUDDHASHRAM', hi: 'हौसाई वृद्धाश्रम की सहायता करें' },
  'about.learnMore': { en: 'Learn More About Our Trust & Governance', hi: 'ट्रस्ट व शासन के बारे में अधिक जानें' },

  // Vruddhashram Page
  'vruddha.bannerBadge': { en: 'FLAGSHIP INITIATIVE (प्रमुख घटक: वृद्धाश्रम)', hi: 'मुख्य सामाजिक पहल: वृद्धाश्रम' },
  'vruddha.bannerTitle': { en: 'Housai Vruddhashram Facility, Sangli', hi: 'हौसाई वृद्धाश्रम, सांगली' },
  'vruddha.bannerSub': { en: 'Housai Vruddhashram is our primary unit dedicated to providing homeless, destitute, and helpless senior citizens with dignified shelter, nutritious meals, nursing, and medical care.', hi: 'हौसाई वृद्धाश्रम बेघर, बेसहारा और जरूरतमंद बुजुर्गों को सम्मानजनक आश्रय, पौष्टिक भोजन और २४ घंटे चिकित्सा सेवाएं प्रदान करता है।' },
  'vruddha.h2': { en: 'Every Senior Citizen Deserves Dignity, Health & Love', hi: 'प्रत्येक वरिष्ठ नागरिक सम्मान, स्वास्थ्य और प्रेम का हकदार है' },
  'vruddha.p1': { en: 'Housai Vruddhashram is our flagship residential old age care facility located behind Sugar Factory, Shalini Nagar, Sangli. Founded by Founder President Sandeshbhao Bhandare and Chief Mentor Seematai Athawale.', hi: 'हौसाई वृद्धाश्रम सांगली में स्थित हमारा प्रमुख आवासीय वृद्ध सेवा केंद्र है। संस्थापक अध्यक्ष संदेशभाऊ भंडारे व मार्गदर्शिका सीमाताई आठवले के मार्गदर्शन में संचालित।' },
  'vruddha.f1': { en: '100% Free Food & Shelter for destitute elderly citizens', hi: 'जरूरतमंद बुजुर्गों के लिए १००% मोफत भोजन व आवास' },
  'vruddha.f2': { en: '24/7 Ambulance Backup & on-call doctors', hi: '२४/७ एम्बुलेंस सेवा और डॉक्टर ऑन-कॉल' },
  'vruddha.f3': { en: 'Recreational & Cultural Center, daily morning yoga', hi: 'मनोरंजन केंद्र, दैनिक योग और सांस्कृतिक गतिविधियां' },
  'vruddha.f4': { en: '50% Income Tax Savings under Section 80G for donors', hi: 'दानदाताओं के लिए धारा ८०जी के तहत ५०% आयकर छूट' },
  'vruddha.sponsorBtn': { en: 'Sponsor a Senior (80G Tax Exemption)', hi: 'बुजुर्ग को गोद लें (८०जी आयकर छूट)' },
  'vruddha.inquireBtn': { en: 'Inquire Admission / Call Helpline', hi: 'प्रवेश जानकारी / हेल्पलाइन पर कॉल करें' },

  // Work Page
  'work.bannerBadge': { en: '5 CORE PILLARS OF WORK', hi: 'कार्य के ५ मुख्य स्तंभ' },
  'work.bannerTitle': { en: 'Our Core Work & Social Pillars', hi: 'हमारे मुख्य कार्य और सामाजिक क्षेत्र' },
  'work.bannerSub': { en: 'Housai Vruddhashram (primary focus), Yashanmukti (Anti-Addiction), Sports Promotion, Arogya (Healthcare & Ambulance), and Rojgar Nirmiti (Livelihoods & ST Upliftment).', hi: 'हौसाई वृद्धाश्रम, व्यसनमुक्ति अभियान, खेल प्रोत्साहन, स्वास्थ्य व एम्बुलेंस सेवा, और रोजगार निर्माण।' },
  'work.supportBtn': { en: 'Support This Initiative', hi: 'इस पहल का समर्थन करें' },

  // Team Page
  'team.bannerBadge': { en: 'GOVERNANCE & MEMBERS (मेम्बर्स)', hi: 'शासकीय बोर्ड व सदस्य' },
  'team.bannerTitle': { en: 'Our Officers & Governing Board', hi: 'हमारे पदाधिकारी एवं गवर्निंग बोर्ड' },
  'team.bannerSub': { en: 'Meet the founder, mentor, secretary, and board of directors driving Khasdar Ramdasji Athawale Youth Foundation forward.', hi: 'फाउंडेशन के संस्थापक, मार्गदर्शक, सचिव एवं संचालक मंडल से मिलें।' },
  'team.keyOfficers': { en: 'Key Leadership & Mentors', hi: 'प्रमुख नेतृत्व एवं मार्गदर्शक' },
  'team.boardMembers': { en: 'Governing Board Members (संचालक मंडल)', hi: 'संचालक मंडल के सदस्य' },

  // Donate Page
  'donate.bannerBadge': { en: '50% TAX SAVINGS UNDER SECTION 80G', hi: 'धारा ८०जी के तहत ५०% कर बचत' },
  'donate.bannerTitle': { en: 'Support Housai Vruddhashram & Social Work', hi: 'हौसाई वृद्धाश्रम और सामाजिक कार्य में सहयोग करें' },
  'donate.bannerSub': { en: 'Your contributions directly support Housai Vruddhashram (primary focus), 24/7 ambulance patient care, Yashanmukti de-addiction drives, and free ST child education.', hi: 'आपका योगदान सीधे वृद्धाश्रम, २४ घंटे एम्बुलेंस सेवा, व्यसनमुक्ति अभियानों और गरीब बच्चों की शिक्षा में उपयोग होता है।' },
  'donate.primaryBank': { en: 'Bank of India Account (Primary)', hi: 'बैंक ऑफ इंडिया खाता (मुख्य)' },
  'donate.sbiBank': { en: 'State Bank of India (SBI Account)', hi: 'स्टेट बैंक ऑफ इंडिया (SBI खाता)' },
  'donate.receiptNote': { en: 'After making a bank transfer, please WhatsApp your payment reference screenshot to +91 99229 43777 / 99756 01777 to receive your 80G tax receipt immediately.', hi: 'बैंक ट्रांसफर के बाद अपनी रसीद स्क्रीनशॉट +91 99229 43777 पर व्हाट्सएप करें, ८०जी रसीद तुरंत प्राप्त होगी।' },
  'donate.confirmBtn': { en: 'Confirm Payment / Pledge Support', hi: 'भुगतान की पुष्टि करें / सहयोग का संकल्प लें' },

  // Contact Page
  'contact.bannerBadge': { en: 'GET IN TOUCH • 24/7 HELPLINE', hi: 'संपर्क करें • २४/७ हेल्पलाइन' },
  'contact.bannerTitle': { en: 'Contact Us & All India Offices', hi: 'संपर्क करें और हमारे कार्यालय' },
  'contact.bannerSub': { en: 'Need emergency ambulance support, old age home admission, 80G tax receipt, or wish to join as a volunteer? Connect with our Tasgaon Headquarters, Sangli Office & Vruddhashram, or Delhi Liaison Office.', hi: 'वृद्धाश्रम प्रवेश, एम्बुलेंस सहायता, ८०जी रसीद या स्वयंसेवक पंजीकरण के लिए संपर्क करें।' },
  'contact.sendMsg': { en: 'Send Us a Message', hi: 'हमें संदेश भेजें' },
  'contact.fullName': { en: 'Full Name *', hi: 'पूरा नाम *' },
  'contact.phone': { en: 'Phone Number *', hi: 'फोन नंबर *' },
  'contact.email': { en: 'Email Address', hi: 'ईमेल पता' },
  'contact.subject': { en: 'Subject / Inquiry Type *', hi: 'विषय / पूछताछ का प्रकार *' },
  'contact.message': { en: 'Your Message *', hi: 'आपका संदेश *' },
  'contact.submitBtn': { en: 'Send Message to Foundation', hi: 'फाउंडेशन को संदेश भेजें' },
  'contact.helplineTitle': { en: '24/7 Sangli Emergency Helpline', hi: '२४/७ सांगली आपत्कालीन हेल्पलाइन' },

  // Legal Page
  'legal.bannerBadge': { en: 'LEGAL COMPLIANCE (कानूनी दस्तावेज)', hi: 'कानूनी अनुपालन एवं दस्तावेज' },
  'legal.bannerTitle': { en: 'Legal Documents & 80G Compliance', hi: 'कानूनी दस्तावेज एवं ८०जी अनुपालन' },
  'legal.bannerSub': { en: 'Khasdar Ramdasji Athawale Youth Foundation operates with 100% legal transparency under the Maharashtra Public Trust Act.', hi: 'खासदार रामदासजी आठवले यूथ फाउंडेशन महाराष्ट्र पब्लिक ट्रस्ट एक्ट के तहत १००% कानूनी पारदर्शिता के साथ संचालित होता है।' },
  'legal.h2': { en: 'Official Trust Registrations & Tax Status', hi: 'अधिकृत ट्रस्ट नोंदणी व कर सवलत प्रमाणपत्रे' },
  'legal.c1Title': { en: 'Public Charitable Trust Registration', hi: 'पब्लिक चॅरिटेबल ट्रस्ट नोंदणी' },
  'legal.c1Desc': { en: 'Registered under the Maharashtra Public Trust Act. Official Registration No: MH/323/F-17200/15 (Reg. Date 2007/2015).', hi: 'महाराष्ट्र पब्लिक ट्रस्ट ॲक्ट अंतर्गत नोंदणीकृत. अधिकृत संस्था नोंदणी क्रमांक: MH/323/F-17200/15.' },
  'legal.c2Title': { en: 'Section 80G Tax Exemption Certificate', hi: 'कलम ८०जी प्राप्तिकर सवलत प्रमाणपत्र' },
  'legal.c2Desc': { en: 'All monetary donations made to Khasdar Ramdasji Athawale Youth Foundation are eligible for 50% tax exemption under Section 80G of the Indian Income Tax Act. Instant tax receipts provided for all online bank transfers.', hi: 'संस्थेस दिलेल्या सर्व देणग्यांवर भारतीय प्राप्तिकर कायद्याच्या कलम ८०जी अंतर्गत ५०% कर सवलत अनुज्ञेय आहे.' },
  'legal.c3Title': { en: '12A Non-Profit Tax Exemption', hi: 'कलम १२ए नान-प्रॉफिट कर सवलत' },
  'legal.c3Desc': { en: 'Granted non-profit charitable trust status under Section 12A of the Income Tax Department of India.', hi: 'भारतीय प्राप्तिकर विभागाकडून १२ए अंतर्गत नोंदणीकृत ना-नफा सामाजिक संस्था.' },
  'legal.c4Title': { en: 'Need Official Trust Certificate Copy?', hi: 'संस्थेच्या प्रमाणपत्रांची अधिकृत प्रत हवी आहे का?' },
  'legal.c4Desc': { en: 'Request certified copies for CSR audit verification.', hi: 'CSR ऑडिट पडताळणीसाठी अधिकृत साक्षांकित प्रती उपलब्ध.' },
  'legal.c4Btn': { en: 'Contact Trust Secretary', hi: 'संस्था सेक्रेटरींशी संपर्क साधा' },

  // Initiatives Section
  'initiatives.tagline': { en: 'OUR SOCIAL IMPACT', hi: 'हमारा सामाजिक प्रभाव' },
  'initiatives.title': { en: 'Key Initiatives & Welfare Work', hi: 'मुख्य सामाजिक पहल और कार्य' },
  'initiatives.sub': { en: 'Explore how Ramdas Athawale Youth Foundation touches thousands of lives across Maharashtra through structured community projects.', hi: 'जानें कि रामदास आठवले यूथ फाउंडेशन किस तरह हजारों लोगों के जीवन में बदलाव ला रहा है।' },
  'initiatives.v1': { en: 'Housai Vruddhashram', hi: 'हौसाई वृद्धाश्रम' },
  'initiatives.v1Desc': { en: 'Our flagship senior care facility providing homeless and destitute elderly citizens with comfortable rooms, nutritious meals, 24/7 nursing, and emotional dignity.', hi: 'निराधार बुजुर्गों के लिए मुफ्त आवास, पौष्टिक भोजन, २४/७ नर्सिंग और सम्मानजनक जीवन।' },
  'initiatives.v2': { en: 'Yashanmukti Drives', hi: 'व्यसनमुक्ति अभियान' },
  'initiatives.v2Desc': { en: 'Community de-addiction awareness rallies, youth counseling sessions, and rehabilitation support to eradicate substance abuse in Sangli & Tasgaon.', hi: 'नशा मुक्ति जागरूकता रैलियां, युवा परामर्श सत्र और पुनर्वास सहायता।' },
  'initiatives.v3': { en: 'Arogya & Ambulance', hi: 'आरोग्य और एम्बुलेंस सेवा' },
  'initiatives.v3Desc': { en: 'Operating 24/7 patient care ambulance services, free health checkup camps, eye surgery drives, and medical financial aid for poor patients.', hi: '२४/७ मरीज एम्बुलेंस सेवा, मुफ्त स्वास्थ्य जांच शिविर और इलाज के लिए वित्तीय सहायता।' },
  'initiatives.v4': { en: 'Youth & Sports Promotion', hi: 'युवा और खेल प्रोत्साहन' },
  'initiatives.v4Desc': { en: 'Distributing sports equipment to rural athletes, sponsoring athletic tournaments, and fostering physical fitness and teamwork among youth.', hi: 'ग्रामीण एथलीटों को खेल उपकरण वितरण, खेल प्रतियोगिताओं का आयोजन।' },
  'initiatives.v5': { en: 'Rojgar Nirmiti & ST Welfare', hi: 'रोजगार निर्माण और एसटी कल्याण' },
  'initiatives.v5Desc': { en: 'Skill development workshops, tailoring training, and micro-initiative guidance for rural women self-help groups to foster financial independence.', hi: 'कौशल विकास कार्यशालाएं, सिलाई प्रशिक्षण और महिला स्वयं सहायता समूहों को मार्गदर्शन।' },
  'initiatives.v6': { en: 'Cultural & Relief', hi: 'सांस्कृतिक एवं आपदा राहत' },
  'initiatives.v6Desc': { en: 'Preserving Maharashtrian heritage and providing rapid relief kits (food packets, clean water, blankets) during floods and emergencies.', hi: 'बाढ़ और आपात स्थिति के दौरान तत्काल राहत किट (भोजन, स्वच्छ पानी, कंबल) वितरण।' },

  // Footer & CTA
  'cta.title': { en: 'Join Hands With Us to Make a Real Difference', hi: 'हमारे साथ हाथ मिलाएं और वास्तविक बदलाव लाएं' },
  'cta.sub': { en: 'Whether by adopting a senior citizen at Housai Vruddhashram, sponsoring medical kits, or volunteering your time, your support transforms lives.', hi: 'चाहे वृद्धाश्रम में बुजुर्ग को गोद लेकर हो या चिकित्सा सहायता देकर, आपका सहयोग जीवन बदलता है।' },
  'cta.donate': { en: 'DONATE & SAVE TAX (80G)', hi: 'दान करें और ८०जी टैक्स बचाएं' },
  'cta.contact': { en: 'CONTACT HEAD OFFICE', hi: 'मुख्य कार्यालय से संपर्क करें' },
  'foot.desc': { en: 'A registered public charitable foundation dedicated to senior citizen welfare at Housai Vruddhashram, free rural healthcare, de-addiction drives, and youth empowerment across Sangli, Maharashtra & New Delhi.', hi: 'हौसाई वृद्धाश्रम में वरिष्ठ नागरिक कल्याण, मुफ्त ग्रामीण स्वास्थ्य सेवा, व्यसनमुक्ति अभियान और सांगली व नई दिल्ली में युवा सशक्तिकरण के लिए पंजीकृत सामाजिक संस्था।' },
  'foot.quickLinks': { en: 'Quick Navigation', hi: 'त्वरित नेविगेशन' },
  'foot.supportTitle': { en: 'Support & Legal', hi: 'सहयोग एवं कानूनी दस्तावेज' },
  'foot.headOffice': { en: 'Head Office Contact', hi: 'मुख्य कार्यालय संपर्क' },

  // Portfolio Page
  'port.bannerBadge': { en: 'OVER 400+ PROJECTS ACROSS 25 STATES', hi: '२५ राज्यों में ४००+ से अधिक सामाजिक प्रकल्प' },
  'port.bannerTitle': { en: 'Social Impact & Project Portfolio', hi: 'सामाजिक प्रभाव एवं प्रकल्प पोर्टफोलियो' },
  'port.bannerSub': { en: 'Highlighting key completed initiatives including 458 permanent houses for homeless families, 24/7 ambulance patient care, and Housai Vruddhashram elderly sanctuary.', hi: '४५८ बेघर कुटुंबांना पक्की घरे, २४/७ रुग्णवाहिका सेवा आणि हौसाई वृद्धाश्रम प्रकल्पांची माहिती.' },
  'port.h2': { en: 'Major Accomplishments & Projects', hi: 'प्रमुख कामगिरी आणि सामाजिक प्रकल्प' },
  'port.hCardBadge': { en: 'KEY ACCOMPLISHMENT', hi: 'प्रमुख यश व सामाजिक कामगिरी' },
  'port.hCardTitle': { en: '458 Permanent Houses for Homeless Citizens', hi: '४५८ बेघर कुटुंबांना पक्की घरे वाटप' },
  'port.hCardDesc': { en: 'Under our special housing drive in the Sangli district operation area, Khasdar Ramdasji Athawale Youth Foundation provided 458 homeless and destitute families with permanent fixed houses, giving them security, warmth, and long-term dignity.', hi: 'सांगली जिल्ह्यातील बेघर व गरजू ४५८ कुटुंबांना पक्की घरे उपलब्ध करून देऊन सामाजिक सुरक्षितता व आधार प्रदान केला.' },
  'port.hCardNote': { en: 'Homeless Families Provided Permanent Homes', hi: 'बेघर कुटुंबांना पक्की घरे उपलब्ध करून दिली' },

  // Gallery Page
  'gall.bannerBadge': { en: 'VISUAL MEMORIES & FIELD ACTIVITIES', hi: 'चित्रदालन व प्रत्यक्ष सामाजिक उपक्रम' },
  'gall.bannerTitle': { en: 'Photo & Media Gallery', hi: 'फोटो व छायाचित्र दालन' },
  'gall.bannerSub': { en: 'Capturing moments of compassionate care at Housai Vruddhashram, emergency medical drives, youth athletic tournaments, and homeless housing handovers.', hi: 'हौसाई वृद्धाश्रम, वैद्यकीय शिबिरे, क्रीडा स्पर्धा व घरकूल उपक्रमांची छायाचित्रे.' },

  // Donate Packages
  'donate.pkgTitle': { en: 'Sponsorship Packages', hi: 'प्रायोजक व सहकार्य पर्याय' },
  'donate.p1Title': { en: 'Sponsor One Day Meal (Vruddhashram)', hi: 'एक दिवसाचे भोजन प्रायोजित करा (वृद्धाश्रम)' },
  'donate.p1Desc': { en: 'Breakfast, lunch & dinner for all resident seniors.', hi: 'वृद्धाश्रमातील सर्व ज्येष्ठांसाठी नाश्ता, दुपारचे व रात्रीचे जेवण.' },
  'donate.p2Title': { en: 'Monthly Senior Citizen Adoption', hi: 'एका ज्येष्ठ नागरिकाला महिनाभरासाठी दत्तक घ्या' },
  'donate.p2Desc': { en: 'Complete shelter, medical care, and food for 1 senior citizen.', hi: 'एका वृद्धासाठी मोफत निवारा, औषधोपचार व भोजन खर्च.' },
  'donate.p3Title': { en: 'Medical & Ambulance Support', hi: 'वैद्यकीय व रुग्णवाहिका मदत' },
  'donate.p3Desc': { en: 'Sponsors free medical kits & emergency patient transport.', hi: 'मोफत औषध किट व आपत्कालीन रुग्ण वाहतूक खर्च.' },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('app_lang') as Language;
    if (savedLang) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  const t = (key: string): string => {
    if (dictionary[key]) {
      return dictionary[key][lang] || dictionary[key]['en'];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
