'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const video = document.getElementById('clientVideo') as HTMLVideoElement;
    const body = document.body;

    if (video) {
      const handlePlay = () => body.classList.add('video-playing');
      const handlePause = () => body.classList.remove('video-playing');
      const handleEnded = () => body.classList.remove('video-playing');

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);
      video.addEventListener('playing', handlePlay);

      const handleClickOutside = (e: MouseEvent) => {
        if (body.classList.contains('video-playing') && !video.contains(e.target as Node)) {
          video.pause();
          body.classList.remove('video-playing');
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && body.classList.contains('video-playing')) {
          video.pause();
          body.classList.remove('video-playing');
        }
      };

      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('playing', handlePlay);
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, []);

  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="container">
          <div className="logos">
            <div className="logo-entain">
              <Image src="/image.png" alt="Entain" width={200} height={60} priority />
            </div>
            <div className="partnership-icon">×</div>
            <div className="logo-wellness">The Wellness</div>
          </div>
          <h1>Become the employer people stay healthy for</h1>
          <p className="subtitle">You achieved Tier 1 mental health leadership. Now extend that excellence into physical prevention. Our clinical team—trained at Imperial College London, Mayo Clinic, and Johns Hopkins—uses hospital-grade diagnostics to catch disease 18 months early, when employees have choices, not just diagnoses.</p>
        </div>
      </div>

      {/* Impact */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Health insights that empower your people</h2>
            <p className="section-subtitle">Developed by physicians from Imperial College London and Mayo Clinic, validated through peer-reviewed research, and trusted by FTSE 100 companies. Early detection gives employees knowledge and control—reducing illness, increasing engagement, and positioning you as an industry-leading employer.</p>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">18mo</div>
              <div className="impact-label">Earlier Detection</div>
              <div className="impact-description">AI identifies health risks 18 months before symptoms appear</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">90%+</div>
              <div className="impact-label">Participation Rate</div>
              <div className="impact-description">Our target engagement versus 45-55% industry standard</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">32%</div>
              <div className="impact-label">Fewer Sick Days</div>
              <div className="impact-description">Annual reduction through proactive health management</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">500K+</div>
              <div className="impact-label">Health Assessments</div>
              <div className="impact-description">AI algorithms validated through peer-reviewed research and clinical trials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your workforce deserves this advantage</h2>
            <p className="section-subtitle">Research shows shift-based, blue-collar workforces benefit most from early health screening. Your 2,400 retail shops represent exactly where prevention delivers greatest impact.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-item">
              <h3>Built for 24/7 Operations</h3>
              <p>Your shops operate 8am-10pm, 363 days a year. Shift work increases cardiovascular risk by 40%. We identify these risks early through 40 clinics nationwide with weekend and evening appointments. Employees book near their shops with zero productivity disruption.</p>
            </div>

            <div className="feature-item">
              <h3>Empower Through Knowledge</h3>
              <p>Comprehensive health data gives employees control and confidence. Hospital-grade diagnostics reviewed by the best doctors, with expertise spanning preventive cardiology, endocrinology, and sports medicine. 20-minute video consultations delivering evidence-based guidance on optimising health and preventing disease.</p>
            </div>

            <div className="feature-item">
              <h3>Support Your Transformation</h3>
              <p>UK market recovery requires healthy, engaged teams. Ongoing regulatory changes demand resilience. We track stress biomarkers and provide ongoing physician support—helping your people navigate change while protecting their health.</p>
            </div>

            <div className="feature-item">
              <h3>Data-Driven Wellness Strategy</h3>
              <p>Population-level health insights help you design more effective programmes. Our machine learning algorithms—developed in collaboration with Oxford University Professors and validated through peer-reviewed research—analyse 500,000+ health assessments to identify workforce-specific risk patterns and enable tailored interventions. Dashboards for your wellness team with ROI tracking, ESG reporting, and benchmarking against industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section section-white">
        <div className="container-narrow">
          <div className="calculator-box">
            <h3>Impact across your workforce</h3>

            <div className="calculator-output">
              <div className="calculator-number">2,500</div>
              <div className="calculator-label">employees in recommended pilot</div>
            </div>

            <div className="calculator-metrics">
              <div className="calculator-metric">
                <div className="calculator-metric-number">2,500</div>
                <div className="calculator-metric-label">employees gain health insights and personalised action plans</div>
              </div>

              <div className="calculator-metric">
                <div className="calculator-metric-number">806</div>
                <div className="calculator-metric-label">likely discover previously unknown health risks they can address early</div>
              </div>

              <div className="calculator-metric">
                <div className="calculator-metric-number">£1.3M</div>
                <div className="calculator-metric-label">projected annual value through reduced absenteeism and healthcare costs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video-section">
        <div className="container-narrow">
          <div className="section-header">
            <h2 className="section-title">Hear from enterprise leaders</h2>
            <p className="section-subtitle">See how The Wellness transformed employee health and engagement across their organisations.</p>
          </div>

          <div className="video-wrapper">
            <video id="clientVideo" controls preload="metadata">
              <source src="/macy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-caption">
            <strong>Macy Hong</strong>, Head of Loyalty at ASOS
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recognised leaders in preventive health</h2>
            <p className="section-subtitle">Trusted by Fortune 500 companies, backed by world-renowned researchers, and validated through peer-reviewed science.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-item">
              <h3>Medical Advisory Board</h3>
              <p>Professors from Imperial College London, King&apos;s College London, Stanford University, and Mayo Clinic. Leading researchers in cardiovascular prevention, metabolic health, AI diagnostics, and occupational medicine. Published in The Lancet, Nature Medicine, JAMA, and European Heart Journal.</p>
            </div>

            <div className="feature-item">
              <h3>Strategic Partnerships</h3>
              <p>Clinical collaboration with Oxford Wearables on AI-powered risk prediction. Laboratory partnerships with Randox and The Doctors Laboratory allow processing of over 60 million tests annually for NHS and private clients.</p>
            </div>

            <div className="feature-item">
              <h3>Enterprise Trust</h3>
              <p>Working across FTSE 100 and Fortune 500 organizations in technology, finance, retail, and professional services. Consulting companies managing complex shift work, global operations, and high-performance cultures.</p>
            </div>

            <div className="feature-item">
              <h3>Regulatory Excellence</h3>
              <p>ISO 27001 (information security), ISO 13485 (medical devices), MHRA registered, CQC registered with &apos;Excellent&apos; rating. GDPR, HIPAA, and SOC 2 Type II compliant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Clinical excellence backed by research and innovation</h2>
            <p className="section-subtitle">Hospital-grade diagnostics combining advanced biomarkers (apoB, Lp(a), hs-CRP) with AI algorithms trained on 500,000+ assessments. The same testing used by Olympic teams, Premier League athletes, and Fortune 100 executives. Published research shows our multi-marker approach identifies risk 18 months earlier than standard screening.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-item">
              <h3>Early Detection That Works</h3>
              <p>Our approach is validated by research published in the European Heart Journal, The Lancet Public Health, and Circulation. Multi-marker AI algorithms identify cardiovascular risk 12-18 months before symptoms appear—a capability that&apos;s transformed outcomes for Fortune 100 companies. For shift-based workforces like yours, early detection programmes deliver 32% reduction in sick days and measurable improvements in employee engagement, retention, and productivity.</p>
            </div>

            <div className="feature-item">
              <h3>Physician Expertise, Not Just Algorithms</h3>
              <p>Every result reviewed by our clinical team: GMC-registered physicians with subspecialty training in preventive cardiology, metabolic medicine, and performance optimization. Our doctors work with Olympic teams, Premier League athletes, and Fortune 100 executives. 30-minute video consultations delivering personalized medical guidance grounded in current clinical guidelines from the European Society of Cardiology and American Heart Association.</p>
            </div>
          </div>

          <div className="biomarker-grid">
            <div className="biomarker-category">
              <h4>Cardiovascular Health</h4>
              <ul>
                <li>apoB (superior predictor to standard LDL)</li>
                <li>LDL-C, HDL-C, Triglycerides</li>
                <li>Lipoprotein(a) genetic risk factor</li>
                <li>hs-CRP inflammation marker</li>
                <li>Blood pressure monitoring</li>
              </ul>
            </div>

            <div className="biomarker-category">
              <h4>Metabolic Health</h4>
              <ul>
                <li>HbA1c three-month glucose average</li>
                <li>Fasting glucose and insulin</li>
                <li>Liver function panel</li>
                <li>Kidney function tests</li>
                <li>Uric acid levels</li>
              </ul>
            </div>

            <div className="biomarker-category">
              <h4>Energy & Performance</h4>
              <ul>
                <li>Complete thyroid panel</li>
                <li>Vitamin B12 and folate</li>
                <li>Vitamin D status</li>
                <li>Iron studies</li>
                <li>Essential minerals</li>
              </ul>
            </div>

            <div className="biomarker-category">
              <h4>Stress & Recovery</h4>
              <ul>
                <li>Cortisol stress hormone</li>
                <li>Inflammation markers</li>
                <li>Testosterone</li>
                <li>DHEA-S resilience marker</li>
                <li>Complete blood count</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section">
        <div className="container-narrow">
          <div className="quote-section">
            <p className="quote-text">&quot;The Wellness identified 1,200 employees with previously undiagnosed cardiovascular risk. Their clinical team&apos;s expertise and the quality of their AI-powered insights exceeded our expectations. This is prevention that actually works at enterprise scale.&quot;</p>
          </div>
        </div>
      </section>

      {/* Pilot Programme */}
      <section className="pilot-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recommended pilot</h2>
            <p className="section-subtitle">Your Ladbrokes and Coral shops represent the workforce profile where early detection delivers greatest impact—validated by research published in Occupational and Environmental Medicine and American Journal of Preventive Medicine. Blue-collar, shift-based workforces show 40% greater health improvements compared to office workers.</p>
          </div>

          <div className="pilot-metrics">
            <div className="pilot-metric">
              <div className="pilot-metric-label">Shops</div>
              <div className="pilot-metric-value">400-600</div>
              <div className="pilot-metric-sub">London & Southeast</div>
            </div>

            <div className="pilot-metric">
              <div className="pilot-metric-label">Employees</div>
              <div className="pilot-metric-value">2,500</div>
              <div className="pilot-metric-sub">Frontline retail workforce</div>
            </div>

            <div className="pilot-metric">
              <div className="pilot-metric-label">Duration</div>
              <div className="pilot-metric-value">6 months</div>
              <div className="pilot-metric-sub">Prove outcomes before expansion</div>
            </div>

            <div className="pilot-metric">
              <div className="pilot-metric-label">Investment</div>
              <div className="pilot-metric-value">£239</div>
              <div className="pilot-metric-sub">Per employee annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Three pathways to better health</h2>
            <p className="section-subtitle">Scale at your pace. From UK retail pilot to full deployment across 28,957 employees and executives.</p>
          </div>

          <div className="packages-grid">
            <div className="package-card">
              <div className="package-name">Foundation</div>
              <div className="package-price">£239</div>
              <div className="package-period">per employee/year</div>
              <div className="package-description">Ideal for UK retail pilot with 2,500 Ladbrokes and Coral shop employees. Comprehensive prevention where impact is clearest.</div>
              <ul className="package-features">
                <li>Annual comprehensive screening</li>
                <li>30+ biomarker panel</li>
                <li>Blood pressure and body composition</li>
                <li>Physician review of results</li>
                <li>Same-day results with action plans</li>
                <li>24/7 complimentary access to AI Doctor</li>
                <li>Weekend and evening appointments</li>
              </ul>
            </div>

            <div className="package-card">
              <div className="package-name">Performance</div>
              <div className="package-price">£554</div>
              <div className="package-period">per employee/year</div>
              <div className="package-description">Perfect for UK corporate HQ and global tech hubs. Comprehensive prevention reducing burnout and supporting high performance.</div>
              <ul className="package-features">
                <li>Bi-annual comprehensive screenings</li>
                <li>Expanded biomarkers including cortisol</li>
                <li>Stress and burnout monitoring</li>
                <li>Quarterly physician consultations</li>
                <li>Priority booking nationwide</li>
                <li>Manager health insights</li>
                <li>24/7 complimentary access to AI Doctor</li>
              </ul>
            </div>

            <div className="package-card">
              <div className="package-name">Executive</div>
              <div className="package-price">£629</div>
              <div className="package-period">per executive/month</div>
              <div className="package-description">Comprehensive care for senior leadership. Help your executives reach peak performance.</div>
              <ul className="package-features">
                <li>Superhuman+ Executive Health screening (MRI + biomarkers and deep labs + VO2 + ECG + CGM)</li>
                <li>Concierge scheduling</li>
                <li>Continuous health tracking</li>
                <li>Expert Wellness talks quarterly</li>
                <li>Body composition and optimisation</li>
                <li>Performance optimisation</li>
                <li>Oura ring included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-cta">
            <h3>We look forward to our call</h3>
            <p>Let's discuss how The Wellness can transform health outcomes for your 28,957 employees</p>
            <a href="https://calendly.com/events/83ec06e1-4b7c-4f7c-b4c8-bd7d4f74ff21/google_meet" target="_blank" rel="noopener noreferrer" className="footer-cta-button">
              Join Call →
            </a>
          </div>
          <div className="footer-info">
            <p>© 2025 The London Wellness Clinic Ltd. All rights reserved.</p>
            <p>enterprise@thewellnesslondon.com · 020 7946 0958</p>
            <p style={{ marginTop: '30px', opacity: 0.7 }}>ISO 27001 & ISO 13485 Certified | CQC Registered | MHRA Approved | GDPR & HIPAA Compliant</p>
            <p style={{ marginTop: '10px', opacity: 0.7 }}>This proposal is confidential and prepared exclusively for Entain Group.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
