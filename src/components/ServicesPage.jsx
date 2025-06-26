import React, { useState } from "react";
import "../styles/TabServicesPage.css"; // New dedicated stylesheet

const servicesData = {
    "Key Services": [
    {
      "title": "Permanent Staffing",
      "description": "We specialize in identifying and placing long-term talent that aligns closely with your company’s values, mission, and culture. Our team takes a consultative approach to understand your organization’s structure and workforce strategy. This ensures we deliver candidates who are not only skilled but also committed to your growth vision. We handle end-to-end hiring processes, from sourcing and screening to onboarding. Our goal is to provide sustainable talent solutions that drive long-term organizational success."
    },
    {
      "title": "Leadership Hiring",
      "description": "Our leadership hiring services are designed to find seasoned executives with proven track records who can shape your company's future. We leverage deep industry insights and an extensive network to identify transformational leaders. From functional heads to C-suite roles, we ensure every candidate matches both strategic and cultural expectations. We manage discreet and complex hiring processes with integrity and precision. Our approach reduces time-to-hire while securing top-tier leadership talent."
    },
    {
      "title": "Temporary & Contract Staffing",
      "description": "Whether it's for seasonal demands, project-based needs, or workforce flexibility, our temporary and contract staffing services offer agile talent solutions. We maintain a ready pool of vetted professionals who can be deployed quickly across functions. Every candidate undergoes rigorous screening to ensure they can adapt fast and contribute effectively. We handle all compliance and onboarding processes, so you can focus on execution. This approach gives you the flexibility to scale without long-term commitment."
    },
    {
      "title": "Executive Hiring",
      "description": "We offer executive search solutions focused on sourcing top-tier leaders for high-impact roles. Our team conducts comprehensive talent mapping, market research, and confidential outreach to attract senior professionals. These leaders bring visionary thinking, deep expertise, and a strong ability to execute business goals. We work closely with stakeholders to define role expectations and assess leadership competencies. Our rigorous evaluation ensures you get executives who are both qualified and culturally aligned."
    },
    {
      "title": "Outsourcing Services",
      "description": "Our outsourcing services help you shift non-core business functions to trusted experts so you can focus on what matters most. From HR and payroll to recruitment and compliance, we handle it all with transparency and accountability. We design scalable models that reduce overhead and increase efficiency. Our teams act as a seamless extension of your organization, providing consistent support. This enables you to operate leaner, faster, and more strategically in a competitive market."
    }
  ],
  "Shared Services": [
    {
      "title": "HR Audit",
      "description": "Our HR audit service conducts a comprehensive review of your current HR systems, policies, and procedures. We assess compliance with legal standards, identify process inefficiencies, and highlight potential risks. Each audit delivers actionable insights to strengthen your HR framework. We also benchmark against industry best practices to ensure your HR strategy is future-ready. This gives you a robust foundation for making people-related decisions with confidence."
    },
    {
      "title": "HR Operations",
      "description": "We help organizations streamline daily HR operations, from managing employee records to implementing standard processes. Our services cover recruitment logistics, benefits administration, attendance tracking, and grievance handling. With automation and expertise, we reduce administrative burdens and enhance compliance. Our team ensures each HR touchpoint contributes to a better employee experience. This drives both engagement and operational efficiency across your workforce."
    },
    {
      "title": "Employee Life Cycle",
      "description": "Managing the employee life cycle effectively is key to organizational health. We help design and optimize every phase, from recruitment and onboarding to retention and offboarding. Our frameworks ensure seamless transitions and consistent engagement throughout an employee’s journey. We track milestones, gather feedback, and offer insights to boost performance and satisfaction. This comprehensive approach helps foster a resilient and motivated workforce."
    },
    {
      "title": "Onboarding",
      "description": "Our onboarding services create a welcoming and structured path for new hires to integrate into your organization. We design personalized orientation programs, setup schedules, and assign mentorship to ease the transition. This accelerates productivity, builds early engagement, and reduces attrition. We also ensure all legal and documentation requirements are met. The result is a smooth and memorable start for your employees, contributing to long-term loyalty."
    },
    {
      "title": "HR Interviews/Discussions",
      "description": "We facilitate structured HR interviews and feedback discussions that help organizations understand employee expectations and concerns. Our experienced HR professionals lead sessions that are constructive, confidential, and insightful. We capture valuable qualitative data that can influence talent strategies and engagement plans. From performance reviews to exit interviews, we ensure a consistent and human-centric approach. This fosters transparency and builds a positive workplace culture."
    }
  ],
  "Upcoming Services": [
    {
      "title": "Payroll",
      "description": "We offer reliable payroll services that ensure timely, accurate salary disbursement and statutory compliance. Our systems are secure and scalable, supporting everything from payslip generation to tax calculations and PF/ESI contributions. We reduce manual errors, prevent delays, and minimize risks with audit-ready processes. Employees gain access to clear, digital records and real-time support. This allows HR teams to focus on strategic initiatives instead of paperwork."
    },
    {
      "title": "IT Infrastructure Services",
      "description": "Our IT infrastructure services provide end-to-end solutions for designing, building, and maintaining your digital ecosystem. We support everything from servers, cloud migration, and networks to disaster recovery planning. Our team ensures high availability, security, and scalability across your IT operations. Whether you're setting up a new office or expanding globally, we provide tailored solutions. This foundation helps drive innovation and digital growth at scale."
    },
    {
      "title": "Cybersecurity",
      "description": "We deliver robust cybersecurity services that protect your organization from threats, breaches, and vulnerabilities. From endpoint protection to firewall management and risk assessments, we cover all angles. Our team monitors threats 24/7 and responds to incidents with rapid precision. We also help you build awareness among employees with security training and policy enforcement. This proactive approach keeps your data, operations, and reputation safe."
    },
    {
      "title": "Digital Application Services",
      "description": "Our digital application services help you develop, manage, and optimize web and mobile platforms with agility. From e-commerce sites to internal business apps, we build performance-driven digital tools. We follow agile methodologies and user-centered design principles. Post-launch, we offer maintenance, performance tuning, and analytics support. This ensures your digital assets stay modern, scalable, and customer-focused."
    },
    {
      "title": "Statutory & Compliance Services",
      "description": "We help you stay ahead of legal and regulatory requirements with our expert compliance services. From labor law filings to tax documentation and audits, we manage it all. Our team tracks changing regulations and updates your systems accordingly. We provide detailed documentation and risk mitigation strategies. This ensures your organization operates with full transparency and avoids costly penalties."
    }
  ]
};

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("Key Services");
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="tab-services-page">
      <h1 className="tab-services-main-title">Our Services</h1>
      <div className="tab-services-tabs">
        {Object.keys(servicesData).map(tab => (
          <button
            key={tab}
            className={`tab-services-tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setHoveredService(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-services-grid">
        {servicesData[activeTab]?.map(service => (
          <div
            key={service.title}
            className="tab-services-card"
            onMouseEnter={() => setHoveredService(service)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {service.title}
          </div>
        ))}
      </div>

      {hoveredService && (
        <div className="tab-services-description">
          <h3>{hoveredService.title}</h3>
          <p>{hoveredService.description}</p>
        </div>
      )}
      
    </div>
  );
};

export default ServicesPage;
