import React from 'react';
import { ShieldCheck, Calendar, ArrowLeft, Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigateHome }) {
  return (
    <div className="pt-24 md:pt-28 bg-[#FCFCFC] text-gray-900 animate-fade-in text-left">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#FF7A00] transition-colors mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#FF7A00] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Policy Document</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
              Privacy Policy
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 pt-1">
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span>Effective Date: <strong>26 September 2026</strong></span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <span>Last Updated: <strong>26 September 2026</strong></span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-100 text-sm leading-relaxed text-gray-700 mt-4">
              <div className="font-serif font-bold text-gray-900 text-base mb-1">
                BHS Foundation <span className="font-sans font-normal text-xs text-gray-600 ml-1">Build • Hope • Support</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 italic">
                “Creating opportunities. Supporting potential. Building a better future.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700 text-sm sm:text-base leading-relaxed">
          
          {/* Preamble */}
          <div className="space-y-4 text-gray-800 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <p>
              <strong>BHS Foundation</strong> (“BHS Foundation”, “we”, “us”, or “our”) is a social-impact organisation associated with <strong>Celebso Group</strong>. BHS Foundation works towards creating opportunities, supporting potential, and contributing to education, talent development, community initiatives, and social impact.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you visit our website, contact us, participate in our programs, register for an event, volunteer, apply for an opportunity, make a donation, or otherwise interact with BHS Foundation.
            </p>
            <p className="font-medium text-gray-900">
              By using our website or voluntarily providing personal information to us, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>

          {/* 1. Scope of This Privacy Policy */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              1. Scope of This Privacy Policy
            </h2>
            <p>This Privacy Policy applies to personal information collected through:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
              <li>The BHS Foundation website</li>
              <li>Online registration and application forms</li>
              <li>Volunteer applications</li>
              <li>Scholarship or opportunity applications</li>
              <li>Event registrations</li>
              <li>Donation or contribution processes</li>
              <li>Contact and enquiry forms</li>
              <li>Email and other communications with BHS Foundation</li>
              <li>BHS Foundation’s official digital platforms and social-media channels, where applicable</li>
            </ul>
            <p className="text-gray-600 text-xs sm:text-sm pt-2 border-t border-gray-100">
              This Policy does not automatically apply to third-party websites, platforms, payment gateways, social-media services, or other services that may be linked from our website.
            </p>
          </div>

          {/* 2. Relationship with Celebso Group */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              2. Relationship with Celebso Group
            </h2>
            <p>
              BHS Foundation is associated with Celebso Group as part of its broader social-impact ecosystem.
            </p>
            <p>
              Depending on the particular initiative, event, program, technology service, or operational requirement, certain administrative, technology, communication, event-management, or support functions may be facilitated through Celebso Group or authorised service providers.
            </p>
            <p>
              Where personal information is shared between BHS Foundation and Celebso Group, such information will be handled for legitimate, authorised, and relevant purposes and in accordance with applicable privacy and data-protection requirements.
            </p>
            <div className="p-3.5 bg-green-50/70 border border-green-200/80 rounded-xl text-green-900 font-medium text-xs sm:text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-700 flex-shrink-0" />
              <span>BHS Foundation does not sell personal information to Celebso Group or any third party.</span>
            </div>
          </div>

          {/* 3. Information We Collect */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                3. Information We Collect
              </h2>
              <p className="mt-2 text-gray-600">
                We collect information that is reasonably necessary for operating our programs and communicating with participants, volunteers, donors, applicants, partners, and visitors.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 text-base">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Full name</li>
                <li>Email address</li>
                <li>Mobile or telephone number</li>
                <li>City, state, country, or general location</li>
                <li>Age or date of birth where required for a particular program</li>
                <li>Educational information</li>
                <li>Professional information</li>
                <li>Organisation or institution details</li>
                <li>Skills, interests, achievements, or areas of support</li>
                <li>Information submitted in applications</li>
                <li>Volunteer information</li>
                <li>Event-registration information</li>
                <li>Donation-related information</li>
                <li>Documents submitted for a program or opportunity</li>
                <li>Feedback, enquiries, messages, and communications</li>
                <li>Photographs, videos, or other media voluntarily submitted or captured at authorised events, where applicable</li>
              </ul>
            </div>

            <div className="space-y-3 pt-3 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 text-base">Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Website pages visited</li>
                <li>Date and time of access</li>
                <li>Referring website</li>
                <li>Approximate location derived from technical information</li>
                <li>Website usage and interaction information</li>
                <li>Error and diagnostic information</li>
              </ul>
            </div>
          </div>

          {/* 4. How We Use Personal Information */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              4. How We Use Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 text-sm">Programs and Opportunities</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600">
                  <li>Processing applications</li>
                  <li>Managing participation</li>
                  <li>Evaluating eligibility where applicable</li>
                  <li>Communicating program information</li>
                  <li>Connecting participants with relevant opportunities</li>
                  <li>Managing scholarships, education initiatives, talent initiatives, or social-impact programs</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 text-sm">Events and Activities</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600">
                  <li>Registering participants</li>
                  <li>Managing invitations</li>
                  <li>Communicating event information</li>
                  <li>Managing attendance</li>
                  <li>Coordinating event-related activities</li>
                  <li>Maintaining event records</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 text-sm">Volunteers</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600">
                  <li>Processing volunteer applications</li>
                  <li>Communicating with volunteers</li>
                  <li>Coordinating volunteer activities</li>
                  <li>Maintaining volunteer records</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 text-sm">Donations and Contributions</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600">
                  <li>Processing donations or contributions</li>
                  <li>Issuing acknowledgements or receipts where applicable</li>
                  <li>Maintaining financial and administrative records</li>
                  <li>Complying with applicable legal requirements</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Website, Communications, Legal and Compliance</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600">
                <li>Responding to enquiries</li>
                <li>Providing requested information</li>
                <li>Improving our website</li>
                <li>Maintaining website security</li>
                <li>Preventing misuse, fraud, or unauthorised activity</li>
                <li>Maintaining records where legally required</li>
                <li>Responding to lawful requests from authorities</li>
                <li>Protecting our rights, users, volunteers, beneficiaries, and organisation</li>
              </ul>
            </div>
          </div>

          {/* 5. Legal Basis and Consent */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              5. Legal Basis and Consent
            </h2>
            <p>
              Where applicable law requires consent for processing personal information, BHS Foundation will seek consent in an appropriate manner. Where processing is based on consent, you may withdraw your consent subject to applicable law and any legitimate consequences of such withdrawal. Withdrawal of consent does not necessarily affect processing that was lawfully carried out before the withdrawal.
            </p>
            <p>
              Where information is necessary to provide a requested service, process an application, fulfil a legal obligation, or perform another lawful function, certain information may need to be retained or processed even if a particular consent is withdrawn.
            </p>
          </div>

          {/* 6. Cookies and Similar Technologies */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              6. Cookies and Similar Technologies
            </h2>
            <p>
              Our website may use cookies and similar technologies to operate essential website functions, improve website performance, understand website usage, remember preferences, maintain security, and analyse traffic and engagement.
            </p>
            <p>
              Third-party services used on our website may also use cookies or similar technologies according to their own policies. You may control or disable cookies through your browser settings. Certain website functions may not work properly if essential cookies are disabled.
            </p>
          </div>

          {/* 7. Donations and Payment Information */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              7. Donations and Payment Information
            </h2>
            <p>
              If BHS Foundation provides online donation or payment facilities, transactions may be processed through third-party payment providers. Depending on the payment method, payment providers may collect and process information such as name, contact information, transaction information, payment details, and billing information.
            </p>
            <p>
              Unless expressly stated otherwise, BHS Foundation does not intend to store complete payment-card information such as full card numbers, CVV numbers, or banking passwords on its own systems. Payment providers operate under their own terms, security practices, and privacy policies.
            </p>
          </div>

          {/* 8. Sharing of Personal Information */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              8. Sharing of Personal Information
            </h2>
            <p>
              BHS Foundation does not sell or rent personal information. We may disclose or share information where reasonably necessary with authorised BHS Foundation team members; Celebso Group where required for legitimate operational purposes; website and technology service providers; hosting and cloud-service providers; payment processors; event-management partners; program partners; professional advisers; auditors or accounting service providers; communication and email service providers; government authorities where legally required; law-enforcement authorities where required by law; and other parties where you have provided appropriate consent.
            </p>
            <p>
              We aim to limit information shared with third parties to what is reasonably necessary for the relevant purpose.
            </p>
          </div>

          {/* 9. Information Shared with Celebso Group */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              9. Information Shared with Celebso Group
            </h2>
            <p>
              Because BHS Foundation is associated with Celebso Group, certain operational functions may be supported by Celebso Group. For example, information may be shared where reasonably necessary for website or technology operations, event coordination, program administration, communications, administrative support, infrastructure and security, social-impact initiatives, and record management.
            </p>
            <p>
              Such sharing does not transfer ownership of your personal information to Celebso Group. Information remains subject to applicable privacy and data-protection requirements.
            </p>
          </div>

          {/* 10. Event Photography and Video */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              10. Event Photography and Video
            </h2>
            <p>
              BHS Foundation may organise public, private, educational, social-impact, community, or networking events. Photography, video recording, or other media may be captured at certain events for event documentation, annual reports, website content, social-media communication, awareness campaigns, impact reporting, or promotional or informational materials.
            </p>
            <p>
              Where appropriate and required, BHS Foundation may provide notice or obtain consent before using identifiable photographs, videos, testimonials, or similar content. If you have concerns about the use of identifiable event media, you may contact us using the details below.
            </p>
          </div>

          {/* 11. Testimonials and Stories */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              11. Testimonials and Stories
            </h2>
            <p>
              If you voluntarily provide a testimonial, success story, photograph, interview, or other personal story to BHS Foundation, we may use it for legitimate communication, awareness, fundraising, impact-reporting, or organisational purposes, subject to applicable consent requirements. We will not knowingly misrepresent a person’s statement or story.
            </p>
          </div>

          {/* 12. Children’s and Young People’s Privacy */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              12. Children’s and Young People’s Privacy
            </h2>
            <p>
              Some BHS Foundation initiatives may involve children or young people. Where a program involves children or individuals requiring special protections under applicable law, we will apply appropriate safeguards and consent requirements. We do not knowingly collect children’s personal information for unrelated purposes.
            </p>
            <p>
              If you believe that a child has provided personal information to us inappropriately, please contact us so that we can review the matter and take appropriate action.
            </p>
          </div>

          {/* 13. Data Security */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              13. Data Security
            </h2>
            <p>
              We take reasonable technical and organisational measures to protect personal information against unauthorised access, unauthorised disclosure, loss, misuse, alteration, destruction, and security incidents. Security measures may include access controls, authentication, secure hosting, restricted access, monitoring, and other safeguards appropriate to the nature of the information.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              However, no online service or electronic storage system can be guaranteed to be completely secure.
            </p>
          </div>

          {/* 14. Data Retention */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              14. Data Retention
            </h2>
            <p>
              We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, program administration, financial and accounting requirements, legal and regulatory requirements, record-keeping, dispute resolution, security and fraud prevention, and legitimate organisational purposes.
            </p>
            <p>
              When information is no longer required, we may delete, anonymise, or securely dispose of it, subject to applicable legal and operational requirements.
            </p>
          </div>

          {/* 15. Your Privacy Rights */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              15. Your Privacy Rights
            </h2>
            <p>
              Subject to applicable law, you may have rights relating to your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
              <li>Requesting information about the processing of your personal data</li>
              <li>Requesting correction of inaccurate information</li>
              <li>Requesting deletion of personal information where legally applicable</li>
              <li>Withdrawing consent where consent is the basis for processing</li>
              <li>Raising a privacy-related grievance</li>
              <li>Exercising other rights available under applicable law</li>
            </ul>
            <p className="text-gray-600 text-xs sm:text-sm">
              Requests may be subject to reasonable verification requirements to protect against unauthorised access to personal information.
            </p>
          </div>

          {/* 16. How to Make a Privacy Request */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              16. How to Make a Privacy Request
            </h2>
            <p>
              To make a privacy-related request, contact BHS Foundation using the contact information provided below. Please include your full name, contact details, nature of your request, relevant information that helps us identify the record or interaction, and any supporting information reasonably required to process your request.
            </p>
            <p>
              We may request additional information to verify your identity before processing certain requests.
            </p>
          </div>

          {/* 17. Third-Party Websites and Services */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              17. Third-Party Websites and Services
            </h2>
            <p>
              Our website may contain links to third-party websites, applications, payment gateways, social-media platforms, or other external services. BHS Foundation does not control the privacy practices of those third parties. You should review the privacy policy and terms of each third-party service before submitting personal information.
            </p>
          </div>

          {/* 18. Social Media */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              18. Social Media
            </h2>
            <p>
              BHS Foundation may maintain official accounts or pages on social-media platforms. When you interact with us through such platforms, your information may also be processed by the relevant platform according to its own privacy policy and terms. Information that you publicly post on social-media platforms may be visible to other users.
            </p>
          </div>

          {/* 19. Communications */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              19. Communications
            </h2>
            <p>
              If you provide your contact information, we may contact you regarding your application, event registration, volunteer activities, donations, program participation, important organisational updates, responses to your enquiries, and other communications relevant to your interaction with BHS Foundation. Where required by applicable law, we will provide appropriate consent or opt-out mechanisms for promotional communications.
            </p>
          </div>

          {/* 20. Data Transfers */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              20. Data Transfers
            </h2>
            <p>
              Depending on the technology and service providers used by BHS Foundation, personal information may be processed or stored on systems located in India or other jurisdictions. Where applicable, such processing will be subject to relevant contractual, technical, organisational, and legal safeguards.
            </p>
          </div>

          {/* 21. Fraud, Security and Misuse Prevention */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              21. Fraud, Security and Misuse Prevention
            </h2>
            <p>
              We may process certain information to detect suspicious activity, prevent fraud, protect our website and systems, prevent abuse of programs, investigate security incidents, protect participants and beneficiaries, and enforce applicable terms and policies. Information may be shared with competent authorities where legally required.
            </p>
          </div>

          {/* 22. No Sale of Personal Information */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              22. No Sale of Personal Information
            </h2>
            <p>
              BHS Foundation does not sell personal information for monetary consideration. We may use authorised technology, communication, payment, analytics, and service providers to operate our organisation and website. Such providers may process information only for authorised purposes and according to applicable arrangements and requirements.
            </p>
          </div>

          {/* 23. Changes to This Privacy Policy */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              23. Changes to This Privacy Policy
            </h2>
            <p>
              BHS Foundation may update this Privacy Policy from time to time because of changes in our programs, technology, website, legal or regulatory requirements, or privacy practices. The updated Privacy Policy will be published on this page with a revised Last Updated date.
            </p>
            <p>
              Your continued use of the website after an updated policy is published may be subject to the updated policy to the extent permitted by applicable law.
            </p>
          </div>

          {/* 24. Governing Law */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              24. Governing Law
            </h2>
            <p>
              This Privacy Policy shall be governed by the applicable laws of India. Any disputes relating to this Privacy Policy shall be handled in accordance with applicable Indian law and the jurisdiction applicable to BHS Foundation.
            </p>
          </div>

          {/* 25. Contact Us */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              25. Contact Us
            </h2>
            <div className="space-y-2">
              <div className="font-serif text-lg font-bold text-gray-900">BHS Foundation</div>
              <div className="text-xs uppercase tracking-wider text-[#FF7A00] font-semibold">
                Build • Hope • Support
              </div>
              <div className="text-xs text-gray-600">Associated with Celebso Group</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-600 uppercase font-semibold">Email</div>
                  <a
                    href="mailto:bhs.foundation@gmail.com"
                    className="font-semibold text-gray-900 hover:text-[#FF7A00] transition-colors break-all"
                  >
                    bhs.foundation@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#1F8E3D] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-600 uppercase font-semibold">Website</div>
                  <span className="font-semibold text-gray-900">BHS Foundation Portal</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-100">
              For privacy-related requests, please use the subject line: <strong className="text-gray-900 font-mono">“Privacy Request – BHS Foundation”</strong>
            </p>
          </div>

          {/* Our Commitment & Sign-off */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-white text-center space-y-4 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-white/10 px-4 py-1.5 rounded-full inline-block">
              Our Commitment
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white max-w-xl mx-auto leading-snug">
              Creating opportunities. Supporting potential. Building a better future.
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto">
              BHS Foundation is committed to treating personal information responsibly and using it to support our mission: <span className="font-semibold text-white">Build • Hope • Support</span>.
            </p>
            <div className="pt-4 text-xs text-gray-300 border-t border-neutral-800">
              © 2026 BHS Foundation. All rights reserved.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
