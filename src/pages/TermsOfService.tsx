import { Helmet } from "react-helmet-async";
import { FileText } from "lucide-react";

const sections = [
  ["1. Introduction", [
    'These Terms of Service ("Terms") govern your access to and use of crescoglobal.co.in (the "Website"), operated by Cresco Global, a proprietorship concern having its registered office at 79/1, Lalpur, Near Kalpataru, Ujjain, Madhya Pradesh – 456010, India.',
    'Cresco Global trades and supplies chemicals, titanium dioxide, masterbatch, additives and related industrial raw materials. The Website provides business information, receives enquiries and facilitates communication about orders and transactions.',
    'By accessing, browsing or using the Website, you agree to these Terms. If you do not agree, you must not use the Website.',
  ]],
  ["2. Business Information and Contact Details", [
    'Legal/trade name: Cresco Global. Constitution: Proprietorship concern. GSTIN: 23BLNPY7649J1Z6.',
    'Registered office / postal address for notices: 79/1, Lalpur, Near Kalpataru, Ujjain, Madhya Pradesh – 456010, India.',
    'For queries, legal and compliance notices: office@crescoglobal.co.in. Official contact numbers: +91 9175775765 / +91 9175775763.',
  ]],
  ["3. Eligibility and User Categories", [
    'The Website is intended for use in India by business customers, including buyers, prospective buyers, suppliers, vendors, logistics partners and other persons dealing with Cresco Global in a business capacity.',
    'The Services are B2B in nature. Anyone using the Website for a business must be at least 18 years old, have legal capacity to contract and be authorised to bind the entity they represent.',
  ]],
  ["4. Acceptance of Terms", [
    'By browsing the Website or submitting an enquiry, you acknowledge that you have read, understood and agreed to these Terms and our Privacy Policy.',
    'We may require explicit acceptance, such as a signed purchase order, quotation confirmation or written acknowledgement, before a transaction is binding.',
  ]],
  ["5. Changes to These Terms", [
    'We may amend, modify or update these Terms at any time by posting revised Terms with an updated effective date. Continued use after posting constitutes acceptance of the revised Terms.',
  ]],
  ["6. Nature of Business and Transactional Framework", [
    'Cresco Global trades in Products as a principal, buying and selling in its own name. It is not an intermediary, marketplace or facilitator unless expressly agreed in writing for a specific transaction.',
    'Prices, specifications and availability displayed or communicated through the Website, email, phone or WhatsApp are indicative only and may change without notice. An enquiry or quotation is not binding unless Cresco Global confirms it in writing.',
    'A transaction becomes binding only upon Cresco Global’s written confirmation, including a proforma invoice, order acknowledgement, sales contract or other written communication. Transaction-specific commercial terms prevail where inconsistent with these Terms.',
  ]],
  ["7. Cancellations, Returns and Refunds", [
    'Orders confirmed in writing are not cancellable without Cresco Global’s written consent. We may cancel a confirmed order before dispatch due to stock unavailability, pricing errors, regulatory constraints or genuine operational reasons; any advance received will be refunded or adjusted as mutually agreed.',
    'Returns, refunds, replacements or credit notes are accepted only where Cresco Global determines that a defect, shortage or deficiency is attributable to Cresco Global and the complaint is raised in writing within the applicable invoice or sales-contract timeline.',
  ]],
  ["8. Logistics, Delivery and Risk", [
    'Third-party transporters arranged by Cresco Global are independent contractors. Cresco Global is not liable for delays, loss or damage caused by such parties, force majeure, government action, strikes, accidents or causes beyond reasonable control.',
    'Risk and title pass according to the agreed commercial terms. Buyers must inspect goods promptly and notify Cresco Global in writing of visible damage, shortage or discrepancy within the stipulated period. Delivery dates are indicative unless agreed otherwise in writing.',
  ]],
  ["9. Invoicing, Taxes and Payments", [
    'Tax invoices are issued under GSTIN 23BLNPY7649J1Z6. You are responsible for applicable taxes, including GST, TDS and statutory levies. Payment must follow the terms agreed for the transaction through bank transfer or other mutually agreed channels.',
  ]],
  ["10. Credit, Default and Recovery", [
    'Credit terms are offered at Cresco Global’s discretion and may be revised, suspended or withdrawn. For delayed or non-payment, Cresco Global may levy charges or interest as specified, withhold deliveries or credit, set off amounts due, and engage collection agencies or legal counsel.',
  ]],
  ["11. User Obligations and Prohibited Conduct", [
    'You must not misrepresent identity, business credentials, GSTIN or authority; misuse credit terms; violate applicable laws; transmit harmful content; interfere with the Website; use unauthorised bots or scrapers; or impersonate Cresco Global, its representatives or another person or entity.',
  ]],
  ["12. Intellectual Property", [
    'The Cresco Global name, logo, Website content, design and underlying materials are owned by Cresco Global or its licensors. You receive a limited, revocable, non-exclusive and non-transferable licence to use the Website for your business dealings with us.',
    'You must not reproduce, distribute, modify or create derivative works from Website content, or use Cresco Global brand features in marketing, domains or public communications, without prior written consent.',
  ]],
  ["13. Data and Communications", [
    'Information you provide, including business details, GSTIN, contact information and order history, is processed according to our Privacy Policy. Enquiry, order and support communications may occur through email, WhatsApp or phone and may be retained for operational and record-keeping purposes.',
  ]],
  ["14. Disclaimers and Exclusion of Warranties", [
    'The Website and its information are provided on an “as is” and “as available” basis without warranties, including accuracy, completeness, merchantability or fitness for a particular purpose. Prices, specifications and availability may change without notice.',
    'Cresco Global is not liable for indirect, incidental, special or consequential losses arising from use of, or inability to use, the Website, except as expressly agreed in a written transaction contract.',
  ]],
  ["15. Third-Party Websites and Links", [
    'Links to third-party websites or platforms are provided for convenience. Cresco Global does not control or accept responsibility for their content, security or practices. Use of those platforms is at your own risk and subject to their terms.',
  ]],
  ["16. Limitation of Liability", [
    'To the maximum extent permitted by law, Cresco Global’s aggregate liability relating to these Terms, the Website or a transaction shall not exceed the value of the goods or invoice amount relating to the specific claim, except where such limitation is not permitted by law.',
  ]],
  ["17. Indemnity", [
    'You agree to indemnify and hold Cresco Global and its representatives harmless against losses, liabilities, claims, damages and costs arising from your breach of these Terms or law, misrepresentation, misuse of credit facilities, or third-party claims arising from your use of the Website or Products.',
  ]],
  ["18. Term, Suspension and Termination", [
    'These Terms remain effective while you access or use the Website. We may suspend or restrict access where we reasonably believe you have breached these Terms or applicable law, or where required by law. Accrued obligations, including payment and indemnity obligations, survive termination.',
  ]],
  ["19. Governing Law and Dispute Resolution", [
    'These Terms are governed by the laws of India. The parties will first attempt to resolve disputes through good-faith discussions. Failing resolution, disputes will be resolved by arbitration under the Arbitration and Conciliation Act, 1996, by a mutually appointed sole arbitrator. The seat and venue are Ujjain, Madhya Pradesh, and the language is English.',
    'Subject to the above, courts at Ujjain, Madhya Pradesh have exclusive jurisdiction.',
  ]],
  ["20. Miscellaneous", [
    'These Terms and our Privacy Policy form the entire agreement regarding Website use. If any provision is invalid or unenforceable, the remaining provisions remain effective. Failure to enforce a provision is not a waiver. Neither party is liable for delay or failure, other than payment obligations, caused by events beyond reasonable control.',
    'For queries, feedback or notices, contact office@crescoglobal.co.in or +91 9175775765 / +91 9175775763.',
  ]],
] as const;

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Cresco Global</title>
      </Helmet>

      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><FileText size={24} /></span>
            <p className="mt-5 text-sm font-semibold text-primary">Legal</p>
            <h1 className="mt-1 font-headline text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="mt-3 text-muted-foreground">Effective Date: 2 August 2026</p>
          </header>

          <div className="space-y-5">
            {sections.map(([title, paragraphs]) => (
              <article key={title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h2 className="font-headline text-xl font-bold text-foreground">{title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
