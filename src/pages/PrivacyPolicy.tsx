import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e5e5e5', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: '18px' }}>TAKAI LABS PRIVATE LIMITED</strong>
        <a href="/" style={{ fontSize: '14px', color: '#1a1a1a', textDecoration: 'underline' }}>← Back to Home</a>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '40px' }}>Last Updated: June 5, 2025</p>

        {/* 1 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>1. Introduction</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Welcome to TAKAI LABS PRIVATE LIMITED ("Takai Labs", "we", "our", or "us"), a private limited company
            incorporated under the Companies Act, 2013, providing custom software development, web applications, mobile
            applications, AI-powered solutions, and business automation services to clients across India and
            internationally.
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit
            our website (<strong>takailabs.in</strong>), contact us, or engage us for services.
          </p>
          <p style={{ lineHeight: '1.8' }}>
            By using our website or contacting us, you agree to the collection and use of information in accordance with
            this policy. If you do not agree, please discontinue use of our website.
          </p>
        </section>

        {/* 2 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>2. Information We Collect</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>2.1 Information You Provide Directly</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '8px' }}>We collect information you voluntarily provide, including:</p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '16px' }}>
            <li>Full name and contact details (email address, phone number)</li>
            <li>Company or business name and designation</li>
            <li>Project requirements, specifications, and business context shared during enquiries</li>
            <li>Messages, emails, and communications sent to us</li>
            <li>Any files, documents, or materials you share with us for project purposes</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>2.2 Automatically Collected Information</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '8px' }}>When you visit our website, we may automatically collect:</p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '16px' }}>
            <li>IP address and approximate geographic location</li>
            <li>Browser type and version, operating system</li>
            <li>Pages visited, time spent on each page, and referring URLs</li>
            <li>Device identifiers and screen resolution</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>2.3 Information from Third Parties</h3>
          <p style={{ lineHeight: '1.8' }}>
            We may receive information about you from third-party platforms (such as LinkedIn or WhatsApp) when you
            contact us through those channels. Such information is governed by the respective platform's privacy policy
            in addition to ours.
          </p>
        </section>

        {/* 3 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>3. How We Use Your Information</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '8px' }}>We use the information we collect for the following purposes:</p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2' }}>
            <li><strong>Service Delivery:</strong> To understand your requirements and deliver the software services you have engaged us for.</li>
            <li><strong>Communication:</strong> To respond to your enquiries, send project updates, and provide ongoing support.</li>
            <li><strong>Proposals & Contracts:</strong> To prepare project proposals, statements of work, and service agreements.</li>
            <li><strong>Invoicing & Payments:</strong> To issue invoices and manage payment records.</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and judicial or governmental orders.</li>
            <li><strong>Security:</strong> To detect and prevent fraud, abuse, or unauthorised access.</li>
            <li><strong>Website Improvement:</strong> To analyse usage patterns and improve our website's content and performance.</li>
          </ul>
        </section>

        {/* 4 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>4. Data Storage and Security</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>4.1 Storage</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Your data is stored on secure servers provided by reputable cloud infrastructure providers. We take reasonable
            technical and organisational measures to protect your information against unauthorised access, alteration,
            disclosure, or destruction.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>4.2 Security Measures</h3>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '12px' }}>
            <li>Encrypted data transmission using HTTPS/TLS</li>
            <li>Access controls limiting data access to authorised personnel only</li>
            <li>Regular review of data handling practices</li>
            <li>Secure deletion of data no longer required</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>4.3 Data Retention</h3>
          <p style={{ lineHeight: '1.8' }}>
            We retain your personal information for as long as necessary to fulfil the purposes described in this policy,
            to maintain records required by law, and to resolve disputes or enforce agreements. Enquiry data from
            non-clients is typically retained for 12 months. Client project data is retained for a minimum of 7 years
            for accounting and legal compliance.
          </p>
        </section>

        {/* 5 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>5. Information Sharing and Disclosure</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            We do not sell, rent, or trade your personal information to any third party. We may share your information
            only in the following circumstances:
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>5.1 Service Providers</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            We may engage trusted third-party service providers to assist in operating our business (e.g., cloud hosting,
            email delivery, analytics, accounting software). These providers are contractually obligated to use your data
            only for the purposes we specify and to maintain appropriate security standards.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>5.2 Legal Requirements</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            We may disclose your information if required by law, court order, or government or regulatory authority, or
            where we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>5.3 Business Transfers</h3>
          <p style={{ lineHeight: '1.8' }}>
            In the event of a merger, acquisition, restructuring, or sale of all or part of our business, your
            information may be transferred to the relevant successor entity. We will provide notice of any such change
            and the choices available to you.
          </p>
        </section>

        {/* 6 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>6. Your Privacy Rights</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Subject to applicable law, you have the following rights regarding your personal information:
          </p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '12px' }}>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information, subject to our legal obligations to retain certain records.</li>
            <li><strong>Objection:</strong> Object to the processing of your personal information in certain circumstances.</li>
            <li><strong>Portability:</strong> Request a machine-readable copy of data you have provided to us.</li>
            <li><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw that consent at any time without affecting the lawfulness of prior processing.</li>
          </ul>
          <p style={{ lineHeight: '1.8' }}>
            To exercise any of these rights, please contact us at <a href="mailto:info.takailabs@gmail.com" style={{ color: '#1a1a1a' }}>info.takailabs@gmail.com</a>.
            We will respond within 30 days.
          </p>
        </section>

        {/* 7 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>7. Children's Privacy</h2>
          <p style={{ lineHeight: '1.8' }}>
            Our website and services are not directed at individuals under the age of 18. We do not knowingly collect
            personal information from minors. If you believe a minor has provided us with personal information, please
            contact us immediately and we will take steps to delete it.
          </p>
        </section>

        {/* 8 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>8. Cookies and Tracking Technologies</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            Our website may use cookies and similar tracking technologies (e.g., web beacons, pixels) to enhance your
            browsing experience and gather analytics data. Cookies are small files stored on your device. We may use:
          </p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2', marginBottom: '12px' }}>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly.</li>
            <li><strong>Analytics Cookies:</strong> To understand how visitors use our website (e.g., Google Analytics).</li>
          </ul>
          <p style={{ lineHeight: '1.8' }}>
            You may disable cookies through your browser settings. Note that disabling cookies may affect certain
            website functionality. By continuing to use our website, you consent to the use of cookies as described.
          </p>
        </section>

        {/* 9 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>9. International Data Transfers</h2>
          <p style={{ lineHeight: '1.8' }}>
            Your information may be processed or stored in countries outside India by our cloud service providers.
            Where such transfers occur, we ensure appropriate safeguards are in place to protect your information in
            accordance with applicable data protection laws, including standard contractual clauses where required.
          </p>
        </section>

        {/* 10 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>10. Data Protection Compliance</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            We are committed to complying with applicable data protection and privacy laws, including:
          </p>
          <ul style={{ paddingLeft: '24px', lineHeight: '2' }}>
            <li>India's Information Technology Act, 2000 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
            <li>India's Digital Personal Data Protection Act, 2023 (DPDPA), to the extent applicable</li>
            <li>General Data Protection Regulation (GDPR) where applicable to EU residents</li>
            <li>Other applicable regional data protection laws</li>
          </ul>
        </section>

        {/* 11 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>11. Changes to This Privacy Policy</h2>
          <p style={{ lineHeight: '1.8' }}>
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the
            revised policy on this page and updating the "Last Updated" date. Your continued use of our website or
            services after such changes constitutes your acceptance of the updated policy. We encourage you to review
            this page periodically.
          </p>
        </section>

        {/* 12 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>12. Contact Us</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please
            contact us:
          </p>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '15px' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 16px 8px 0', fontWeight: 'bold', verticalAlign: 'top', whiteSpace: 'nowrap' }}>Business Name</td>
                <td style={{ padding: '8px 0' }}>TAKAI LABS PRIVATE LIMITED</td>
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
                <td style={{ padding: '8px 16px 8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>Address</td>
                <td style={{ padding: '8px 0' }}>240 NEW ATISH MARKET, NEAR MANSAROVAR, Mansarovar, Jaipur – 302020, Rajasthan, India</td>
              </tr>
            </tbody>
          </table>
          <p style={{ lineHeight: '1.8', marginTop: '16px' }}>
            We will respond to your enquiry within 30 business days.
          </p>
        </section>

        {/* 13 */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>13. Consent</h2>
          <p style={{ lineHeight: '1.8' }}>
            By using our website or engaging our services, you acknowledge that you have read, understood, and agree
            to be bound by this Privacy Policy. If you do not agree with any part of this policy, please discontinue
            use of our website and services immediately.
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

export default PrivacyPolicy
