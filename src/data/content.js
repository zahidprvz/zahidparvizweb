// All portfolio content lives here. No database, no Firebase, nothing to break.
// To add a case study: add an object to caseStudies. To add a repo: add to codeSamples.

export const profile = {
  name: 'Zahid Parviz',
  title: 'Dynamics 365 CE & Power Platform Engineer',
  tagline:
    'I build and integrate enterprise Microsoft business applications for US and UK clients, and I am moving toward AI-driven solution architecture.',
  email: 'pervaizzahid55@gmail.com',
  phone: '+92 346 676 2841',
  location: 'Lahore, Pakistan',
  linkedin: 'https://linkedin.com/in/zahidprvz',
  github: 'https://github.com/zahidprvz',
};

export const metrics = [
  { value: '94%', label: 'pipeline performance gain on a multi-year data migration' },
  { value: '200+', label: 'Power Automate flows built and maintained' },
  { value: '110+', label: 'production tickets at 99%+ first-pass acceptance' },
  { value: '12+ yrs', label: 'of audit data migrated with zero data loss' },
];

// Tasteful gradient covers so nothing depends on an image host.
const gradients = {
  azure: 'from-sky-600 via-blue-700 to-slate-900',
  migrate: 'from-amber-500 via-orange-600 to-slate-900',
  integrate: 'from-emerald-600 via-teal-700 to-slate-900',
};

export const caseStudies = [
  {
    slug: 'salesforce-to-dynamics-365-audit-migration',
    title: 'Salesforce to Dynamics 365 Audit Migration',
    sector: 'UK Financial Services',
    headline: '32 seconds to 2 seconds per batch, a 94% reduction',
    gradient: gradients.migrate,
    tags: ['Azure Data Factory', 'Dynamics 365 CE', 'Dual Write', 'Python'],
    summary:
      'Re-engineered the Azure Data Factory pipelines that migrated 12+ years of audit records from Salesforce to Dynamics 365, cutting per-batch processing from 32 seconds to 2 seconds.',
    sections: {
      context:
        'A UK financial services client was consolidating onto the Microsoft platform and needed more than twelve years of audit records moved from Salesforce into Dynamics 365 CE, with the CRM and ERP sides kept in sync.',
      problem:
        'The existing pipeline processed records at around 32 seconds per batch. At that rate, migrating over a decade of audit data did not fit the delivery window, and the boundary between CRM and ERP created data-consistency risk that would only surface under load.',
      approach:
        'I re-engineered the Azure Data Factory pipelines and added Python-based transformations to reshape and clean records before load, tuned batch handling to remove the per-batch overhead, and implemented Dual Write between Dynamics 365 CE and Finance and Operations for real-time bidirectional synchronisation.',
      result:
        'Per-batch processing dropped from 32 seconds to 2 seconds, a 94% reduction, and the full migration completed with zero data loss across migrated records.',
      stack: ['Azure Data Factory', 'Python', 'Dynamics 365 CE', 'Dual Write', 'Finance and Operations'],
    },
  },
  {
    slug: 'on-premises-to-azure-crm-migration',
    title: 'On-Premises to Azure CRM Migration',
    sector: 'US Public Sector',
    headline: 'Legacy CRM to Azure with zero data-integrity issues',
    gradient: gradients.azure,
    tags: ['Azure', 'Dynamics 365 CE', 'ASP.NET', 'C#', 'SQL Server'],
    summary:
      'Led a legacy on-premises Dynamics CRM migration to Azure for a public-sector client, rebuilding portal integrations for cloud runtime and engineering a real-time data export tool.',
    sections: {
      context:
        'A US public-sector client was running a legacy on-premises Dynamics CRM and needed to move to Azure while keeping a public-facing SQL store continuously up to date.',
      problem:
        'The existing ASP.NET portal integrations were not compatible with the cloud runtime, and the client required real-time data availability with no tolerance for data-integrity errors during the cutover.',
      approach:
        'I rebuilt the ASP.NET portal integrations for the cloud runtime, designed the migration path, and engineered a C# tool that exported Dynamics data to SQL Server in real time so the public-facing store stayed current.',
      result:
        'The environment went live in April 2026 with zero data-integrity issues across the full UAT cycle.',
      stack: ['Azure', 'Dynamics 365 CE', 'ASP.NET', 'C#', 'SQL Server'],
    },
  },
  {
    slug: 'custom-page-third-party-integration',
    title: 'Native Third-Party Data Inside Dynamics 365 CE',
    sector: 'US Healthcare',
    headline: 'Custom Page and Webhooks, with CI/CD that ended deployment incidents',
    gradient: gradients.integrate,
    tags: ['Custom Pages', 'Power Automate', 'Webhooks', 'GitHub Actions'],
    summary:
      'Built a Custom Page solution that fetches and renders third-party data natively inside Dynamics 365 CE, and established CI/CD that removed recurring deployment incidents.',
    sections: {
      context:
        'A US healthcare client needed external third-party data fetched and displayed natively inside Dynamics 365 CE, where the standard platform model did not support the required rendering.',
      problem:
        'The out-of-the-box model could not present the external data the business needed, and recurring deployment incidents across managed environments were costing the team time.',
      approach:
        'I built a Custom Page that invokes Power Automate flows and external Webhooks to fetch and render dynamic third-party data inside the app, and established GitHub Actions CI/CD across the managed environments.',
      result:
        'Third-party data now renders natively inside Dynamics 365 CE, and the CI/CD pipeline removed the recurring deployment incidents.',
      stack: ['Custom Pages', 'Power Automate', 'Webhooks', 'GitHub Actions', 'Dynamics 365 CE'],
    },
  },
];

export const codeSamples = [
  {
    title: 'Dynamics 365 CE Plugin Library',
    desc: 'C# plugins extending Dynamics 365 CE behavior across Sales and Customer Service, built for testability and clean separation of concerns.',
    tags: ['C#', 'Plugins', 'Dataverse'],
    github: 'https://github.com/zahidprvz/CRMPluginsProject',
  },
  {
    title: 'Power Platform ALM Solution',
    desc: 'Solution lifecycle and managed-environment deployment patterns with CI/CD for Dynamics 365 and Power Platform.',
    tags: ['Power Platform', 'ALM', 'CI/CD'],
    github: 'https://github.com/zahidprvz/PowerPlatformALM-Solution',
  },
  {
    title: 'PCF Controls',
    desc: 'PowerApps Component Framework controls that extend model-driven app UI beyond the standard component set.',
    tags: ['PCF', 'TypeScript', 'Power Apps'],
    github: 'https://github.com/zahidprvz/PCF-Projects',
  },
  {
    title: 'Dataverse Audit Export',
    desc: 'Azure Functions that fetch and export Dynamics 365 audit data on demand for compliance reporting.',
    tags: ['Azure Functions', 'Dataverse', 'C#'],
    github: 'https://github.com/zahidprvz/OnDemand_Audit_Export_FetchAndExportAuditData',
  },
];

export const techStack = [
  'Dynamics 365 CE', 'Power Apps', 'Power Automate', 'Power Pages', 'Dataverse',
  'C# / .NET', 'Azure Data Factory', 'Azure Functions', 'Logic Apps',
  'Dual Write', 'PCF', 'SQL', 'JavaScript', 'GitHub Actions',
];
