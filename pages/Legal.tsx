
import React from 'react';
import SEO from '../components/SEO.tsx';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const content = {
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we protect and respect your data.",
      date: "Last Updated: September 2024",
      description: "Melotto Group's commitment to your privacy. We guarantee that your proprietary data is never used to train AI models.",
      body: (
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">1. Introduction</h2>
            <p>
              Melotto Group LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our professional writing and research services. We operate with a "human-first" philosophy, which extends to our commitment to data ethics and transparency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-charcoal">2.1 Personal Identification Information</h3>
              <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, book a consultation, or fill out a form. Users may be asked for, as appropriate, name, email address, mailing address, and phone number.</p>
              
              <h3 className="text-lg font-bold text-charcoal">2.2 Professional and Project Data</h3>
              <p>In the course of providing services, we may collect highly sensitive professional data, including clinical trial notes, research data, brand strategies, and internal corporate communications. This data is handled with the highest degree of confidentiality.</p>
              
              <h3 className="text-lg font-bold text-charcoal">2.3 Technical Data</h3>
              <p>We may collect non-personal identification information about Users whenever they interact with our Site. This may include the browser name, the type of computer, and technical information about Users' means of connection to our Site.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">3. Our Anti-AI Data Guarantee</h2>
            <p>
              Unlike many content agencies, Melotto Group guarantees that your data is never fed into Large Language Models (LLMs) or generative AI training sets. We do not use "AI assistance" that involves uploading your proprietary information to third-party cloud-based intelligence services. Your data remains processed solely by human eyes and human-controlled local environments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">4. How We Use Collected Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To improve customer service:</strong> Information you provide helps us respond to your service requests and support needs more efficiently.</li>
              <li><strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li><strong>To process payments:</strong> We use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
              <li><strong>To send periodic emails:</strong> We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">5. Data Protection & Security</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">6. Sharing Your Personal Information</h2>
            <p>
              We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">7. Compliance with Children's Online Privacy Protection Act</h2>
            <p>
              Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our Site from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              Melotto Group LLC has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-serif font-bold text-charcoal mb-4">Contacting Us</h2>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              <br /><br />
              <strong>Melotto Group LLC</strong><br />
              1500 Chestnut St Suite 2<br />
              Philadelphia, PA 19102<br />
              legal@melottogroup.com
            </p>
          </section>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      subtitle: "The legal framework for our partnership.",
      date: "Last Updated: September 2024",
      description: "The official terms and conditions for engaging Melotto Group services. Understanding our human-led delivery model and legal framework.",
      body: (
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing the website at melottogroup.com and engaging our services, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">2. Description of Services</h2>
            <p>
              Melotto Group LLC provides professional writing, research, and content strategy services. We explicitly provide "human-first" content, meaning all deliverables are produced by human professionals without the use of generative AI or automated drafting systems. Our services include, but are not limited to, creative copywriting, scientific research, clinical documentation, and strategic messaging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">3. Engagement and Collaboration</h2>
            <p>
              Clients agree to collaborate directly with their assigned Melotto Group specialist. Success of the services depends on timely feedback, accurate information provision, and clear communication of goals from the Client. Melotto Group reserves the right to refuse service to any project that violates our ethical standards or promotes misinformation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">4. Investment and Payment</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-charcoal">4.1 Custom Pricing</h3>
              <p>Pricing for services is custom-quoted based on project scope, complexity, and specialized expertise required. Quotes are valid for 30 days from the date of issuance.</p>
              
              <h3 className="text-lg font-bold text-charcoal">4.2 Payment Terms</h3>
              <p>Standard terms require a 50% deposit for one-off projects, with the balance due upon delivery. Retainer agreements are billed monthly in advance. Late payments are subject to a 1.5% monthly finance charge.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">5. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-charcoal">5.1 Work for Hire</h3>
              <p>Upon receipt of full payment, all final deliverables provided by Melotto Group to the Client are considered "work for hire" under US Copyright law. Ownership and all intellectual property rights for the final work product transfer to the Client.</p>
              
              <h3 className="text-lg font-bold text-charcoal">5.2 Retained Rights</h3>
              <p>Melotto Group retains the right to display non-confidential snippets or high-level project summaries for portfolio and marketing purposes, unless otherwise restricted by a signed NDA.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">6. Confidentiality & Non-Disclosure</h2>
            <p>
              We acknowledge that in the course of engagement, we may have access to confidential and proprietary information. We agree to hold such information in strict confidence and not disclose it to any third party without prior written consent, except as required by law. Melotto Group standard NDAs are available for all enterprise engagements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">7. Disclaimer of Warranties</h2>
            <p>
              The materials on Melotto Group's website and the deliverables provided through our services are provided on an 'as is' basis. Melotto Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">8. Limitation of Liability</h2>
            <p>
              In no event shall Melotto Group LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website or the services provided, even if Melotto Group or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>

          <section className="bg-charcoal text-white p-8 rounded-2xl">
             <p className="text-sm font-medium italic">
               Melotto Group LLC is a registered business in the state of Pennsylvania. For formal legal notices, please utilize the registered agent address on file or contact our Philadelphia headquarters directly.
             </p>
          </section>
        </div>
      )
    }
  };

  const current = content[type];

  return (
    <div className="py-24 bg-white">
      <SEO 
        title={current.title} 
        description={current.description} 
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 border-b border-gray-100 pb-12">
          <h1 className="text-5xl font-serif font-bold text-charcoal mb-4">{current.title}</h1>
          <p className="text-xl text-gray-500 font-medium mb-4">{current.subtitle}</p>
          <div className="flex items-center space-x-3">
             <span className="text-xs font-bold text-brand uppercase tracking-widest">{current.date}</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Melotto Group LLC</span>
          </div>
        </header>

        <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed font-normal">
          {current.body}
        </div>
      </div>
    </div>
  );
};

export default Legal;
