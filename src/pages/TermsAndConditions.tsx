import React from 'react'

const TermsAndConditions: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e5e5e5', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: '18px' }}>TAKAI LABS PRIVATE LIMITED</strong>
        <a href="/" style={{ fontSize: '14px', color: '#1a1a1a', textDecoration: 'underline' }}>← Back to Home</a>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>Terms and Conditions</h1>
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '40px' }}>Last Updated: June 5, 2025</p>

        {/* 1 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>1. Agreement to Terms</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client", "you",
            or "your") and TAKAI LABS PRIVATE LIMITED ("Takai Labs", "we", "us", or "our"), a private limited company
            incorporated under the Companies Act, 2013 in India, governing your access to and use of our website
            (<strong>takailabs.in</strong>) and any services you engage us to provide.
          </p>
          <p style={{ lineHeight: '1.8' }}>
            By accessing our website, submitting an enquiry, or entering into a service agreement with us, you
            acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree,
            you must not access our website or engage our services.
          </p>
        </section>

        {/* 2 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>2. Description of Services</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Takai Labs provides technology services to businesses, including but not limited to:
          </p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '12px' }}>
            <li>Custom software development</li>
            <li>Web application development</li>
            <li>Mobile application development (iOS and Android)</li>
            <li>AI-powered software solutions</li>
            <li>Business automation tools and integrations</li>
            <li>Technology consulting and advisory services</li>
          </ul>
          <p style={{ lineHeight: '1.8' }}>
            The specific scope of services, deliverables, timelines, and pricing for each engagement are defined in a
            separate Project Proposal, Statement of Work, or Service Agreement signed by both parties ("Project
            Agreement"). These Terms apply alongside and supplement any such Project Agreement.
          </p>
        </section>

        {/* 3 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>3. Service Engagement and Onboarding</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>3.1 Eligibility</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>To engage our services, you must:</p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '16px' }}>
            <li>Be at least 18 years of age</li>
            <li>Have the legal capacity to enter into binding contracts</li>
            <li>Be duly authorised to represent the business or organisation on whose behalf you are engaging us</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>3.2 Client Obligations</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '8px' }}>By engaging our services, you agree to:</p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '16px' }}>
            <li>Provide accurate, complete, and timely information required for the project</li>
            <li>Nominate a point of contact with authority to provide instructions and approvals</li>
            <li>Review and provide feedback on deliverables within agreed timeframes</li>
            <li>Ensure all content, assets, and third-party credentials you provide are lawfully owned or licensed by you</li>
            <li>Cooperate in good faith throughout the project lifecycle</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>3.3 Changes to Scope</h3>
          <p style={{ lineHeight: '1.8' }}>
            Any changes to the agreed project scope must be requested in writing. We will assess the impact on timeline
            and cost and provide a revised estimate before proceeding. Work on scope changes will not commence until
            both parties have agreed in writing.
          </p>
        </section>

        {/* 4 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>4. Acceptable Use</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '8px' }}>You agree NOT to use our website or services to:</p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2' }}>
            <li>Engage in any illegal, fraudulent, or unauthorised activity</li>
            <li>Infringe upon or violate the intellectual property rights of any third party</li>
            <li>Transmit malicious code, viruses, or any harmful data</li>
            <li>Harass, abuse, or harm any person</li>
            <li>Violate any applicable law or regulation</li>
            <li>Build competing products or services using insights gained from our proprietary methods</li>
            <li>Misrepresent your identity or your authority to act on behalf of a business</li>
          </ul>
        </section>

        {/* 5 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>5. Payment and Fees</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>5.1 Pricing</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            All fees, payment milestones, and schedules are set out in the Project Agreement specific to your
            engagement. Pricing is quoted in Indian Rupees (INR) unless otherwise agreed. All prices are exclusive
            of Goods and Services Tax (GST), which will be charged at the applicable rate.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>5.2 Payment Terms</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Invoices are due within the period specified in the Project Agreement (typically 7–14 days from the
            invoice date). Late payments may attract interest at 2% per month on the outstanding amount, and we
            reserve the right to suspend work until outstanding balances are cleared.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>5.3 Advance Payments</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            A deposit or advance payment as agreed in the Project Agreement is typically required before work
            commences. Advance payments are non-refundable unless we are unable to commence the agreed services
            for reasons solely attributable to us.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>5.4 Taxes</h3>
          <p style={{ lineHeight: '1.8' }}>
            You are responsible for all applicable taxes, duties, and levies associated with the services you receive
            from us, except for taxes on our own income.
          </p>
        </section>

        {/* 6 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>6. Intellectual Property Rights</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>6.1 Client-Owned Deliverables</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Upon receipt of full payment for a project, Takai Labs assigns to you all intellectual property rights in
            the bespoke deliverables created specifically for your project, to the extent permitted by law and as
            agreed in the Project Agreement.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>6.2 Takai Labs Proprietary Materials</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            We retain all intellectual property rights in our pre-existing tools, frameworks, libraries, methodologies,
            know-how, and any generic components developed independently of your project. Where such materials are
            incorporated into your deliverables, we grant you a non-exclusive, perpetual licence to use them solely
            as part of those deliverables.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>6.3 Client Content</h3>
          <p style={{ lineHeight: '1.8' }}>
            You retain all rights to content, data, trade marks, and materials you provide to us. You grant us a
            limited, non-exclusive licence to use such materials solely for the purpose of delivering the agreed
            services.
          </p>
        </section>

        {/* 7 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>7. Confidentiality</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Both parties agree to keep confidential any non-public information disclosed by the other party in
            connection with the services ("Confidential Information"). Confidential Information includes, but is
            not limited to, business plans, technical specifications, financial data, client lists, and proprietary
            processes.
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Confidential Information must not be disclosed to any third party without the prior written consent of the
            disclosing party, except as required by law or to employees or contractors who need to know such information
            for the purpose of delivering the services and who are bound by equivalent confidentiality obligations.
          </p>
          <p style={{ lineHeight: '1.8' }}>
            This obligation of confidentiality survives the termination of any project engagement and these Terms.
          </p>
        </section>

        {/* 8 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>8. Disclaimer of Warranties</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            OUR WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
            NON-INFRINGEMENT.
          </p>
          <p style={{ lineHeight: '1.8' }}>
            While we strive to deliver high-quality software solutions, we do not warrant that deliverables will be
            entirely error-free or will meet every specific requirement not expressly agreed in the Project Agreement.
            Any warranties regarding specific deliverables are limited to those set out in the applicable Project Agreement.
          </p>
        </section>

        {/* 9 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>9. Limitation of Liability</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TAKAI LABS SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
            LOSS OF DATA, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p style={{ lineHeight: '1.8' }}>
            OUR TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATING TO ANY PROJECT OR THESE TERMS SHALL NOT EXCEED
            THE TOTAL FEES PAID BY YOU TO US UNDER THE APPLICABLE PROJECT AGREEMENT IN THE 12 MONTHS PRECEDING THE
            CLAIM.
          </p>
        </section>

        {/* 10 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>10. Indemnification</h2>
          <p style={{ lineHeight: '1.8' }}>
            You agree to indemnify, defend, and hold harmless Takai Labs and its directors, employees, contractors,
            and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable
            legal fees) arising out of or in connection with: (a) your use of our website or services; (b) your
            violation of these Terms; (c) your violation of any third-party rights; (d) content or materials you
            provide to us; or (e) your violation of applicable law.
          </p>
        </section>

        {/* 11 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>11. Data Protection and Privacy</h2>
          <p style={{ lineHeight: '1.8' }}>
            Our collection, use, and protection of personal information is governed by our
            {' '}<a href="/privacy-policy" style={{ color: '#1a1a1a' }}>Privacy Policy</a>, which is incorporated
            into these Terms by reference. By engaging our services, you consent to our data practices as described
            therein. Each party shall comply with its respective obligations under applicable data protection laws.
          </p>
        </section>

        {/* 12 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>12. Third-Party Services</h2>
          <p style={{ lineHeight: '1.8' }}>
            Our services may integrate with or rely upon third-party services, APIs, or platforms (e.g., cloud
            providers, payment gateways, messaging platforms). We are not responsible for the availability, accuracy,
            security, or terms of such third-party services. Your use of third-party services is subject to their
            respective terms and policies.
          </p>
        </section>

        {/* 13 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>13. Termination</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>13.1 Termination by Client</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            You may terminate a project engagement by providing written notice as specified in the Project Agreement.
            Upon termination, you shall pay for all work completed up to the date of termination, including any
            non-recoverable costs incurred by us. Advance payments already made are non-refundable unless otherwise
            agreed.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>13.2 Termination by Takai Labs</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            We may suspend or terminate your engagement immediately, without prior notice, if:
          </p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '12px' }}>
            <li>You breach these Terms or the Project Agreement and fail to remedy the breach within 7 days of notice</li>
            <li>You fail to make payment when due</li>
            <li>Your use poses a legal, reputational, or security risk to us</li>
            <li>You become insolvent or enter into insolvency proceedings</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>13.3 Effect of Termination</h3>
          <p style={{ lineHeight: '1.8' }}>
            Upon termination, all outstanding payments become immediately due. Provisions which by their nature
            should survive termination (including confidentiality, intellectual property, liability, and dispute
            resolution) shall continue in full force.
          </p>
        </section>

        {/* 14 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>14. Dispute Resolution</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>14.1 Informal Resolution</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Before initiating formal proceedings, the parties agree to attempt to resolve any dispute informally
            by contacting us at <a href="mailto:info.takailabs@gmail.com" style={{ color: '#1a1a1a' }}>info.takailabs@gmail.com</a>.
            We will attempt to resolve the dispute within 30 days of receiving written notice.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>14.2 Governing Law</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            These Terms and any disputes arising out of or in connection with them shall be governed by and construed
            in accordance with the laws of India, without regard to its conflict of law principles.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>14.3 Jurisdiction</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Subject to the arbitration clause below, the courts at Jaipur, Rajasthan, India shall have exclusive
            jurisdiction over any disputes arising from or relating to these Terms or any project engagement.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>14.4 Arbitration</h3>
          <p style={{ lineHeight: '1.8' }}>
            If informal resolution fails, any dispute shall be referred to and finally resolved by binding arbitration
            under the Arbitration and Conciliation Act, 1996 of India. The arbitration shall be conducted by a sole
            arbitrator mutually agreed upon by the parties, in English, at Jaipur, Rajasthan. The arbitrator's award
            shall be final and binding on both parties.
          </p>
        </section>

        {/* 15 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>15. General Provisions</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>15.1 Entire Agreement</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            These Terms, together with our Privacy Policy and any applicable Project Agreement, constitute the entire
            agreement between you and Takai Labs regarding the subject matter herein and supersede all prior agreements
            and understandings.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>15.2 Amendments</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            We reserve the right to modify these Terms at any time by posting the updated Terms on our website and
            updating the "Last Updated" date. Your continued use of our website or services after such changes
            constitutes acceptance of the updated Terms. For ongoing project engagements, amendments to the Project
            Agreement require written consent from both parties.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>15.3 Severability</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of
            competent jurisdiction, the remaining provisions shall continue in full force and effect.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>15.4 Waiver</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right
            or provision unless acknowledged in writing by us.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>15.5 Assignment</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            You may not assign or transfer these Terms or any rights under them without our prior written consent.
            We may assign these Terms or our rights hereunder at any time, including in connection with a
            restructuring, merger, or acquisition.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>15.6 Force Majeure</h3>
          <p style={{ lineHeight: '1.8' }}>
            Neither party shall be liable for any failure or delay in performance resulting from causes beyond their
            reasonable control, including acts of God, natural disasters, pandemics, war, civil unrest, governmental
            actions, power outages, or internet infrastructure failures. The affected party shall promptly notify the
            other and both parties shall use reasonable efforts to mitigate the impact.
          </p>
        </section>

        {/* 16 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>16. Contact Information</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            For any questions, concerns, or communications regarding these Terms, please contact us:
          </p>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '15px' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 16px 8px 0', fontWeight: 'bold', verticalAlign: 'top', whiteSpace: 'nowrap' }}>Business Name</td>
                <td style={{ padding: '8px 0' }}>TAKAI LABS PRIVATE LIMITED</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px 8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>Entity Type</td>
                <td style={{ padding: '8px 0' }}>Private Limited Company (incorporated under the Companies Act, 2013)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px 8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>Email</td>
                <td style={{ padding: '8px 0' }}><a href="mailto:info.takailabs@gmail.com" style={{ color: '#1a1a1a' }}>info.takailabs@gmail.com</a></td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px 8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>Phone</td>
                <td style={{ padding: '8px 0' }}>+91-95879-99947</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px 8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>Registered Address</td>
                <td style={{ padding: '8px 0' }}>240 NEW ATISH MARKET, NEAR MANSAROVAR, Mansarovar, Jaipur – 302020, Rajasthan, India</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 17 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>17. Acknowledgment</h2>
          <p style={{ lineHeight: '1.8' }}>
            BY ACCESSING OUR WEBSITE OR ENGAGING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND
            CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST
            NOT ACCESS OUR WEBSITE OR USE OUR SERVICES.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e5e5e5', padding: '24px', textAlign: 'center', fontSize: '13px', color: '#777' }}>
        <p style={{ marginBottom: '8px' }}>
          <a href="/" style={{ color: '#1a1a1a', marginRight: '16px' }}>Home</a>
          <a href="/privacy-policy" style={{ color: '#1a1a1a', marginRight: '16px' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#1a1a1a' }}>Terms &amp; Conditions</a>
        </p>
        <p>© 2025 TAKAI LABS PRIVATE LIMITED. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default TermsAndConditions
