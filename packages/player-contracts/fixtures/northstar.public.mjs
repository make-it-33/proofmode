import { definePublicMissionPayload } from '../src/index.mjs';

export const northstarPublicMission = definePublicMissionPayload({
  contractVersion: '1.0.0',
  mission: {
    id: 'mission_northstar_sales_drop_v1',
    slug: 'northstar-sales-drop',
    version: 1,
    category: 'investigate',
    mechanic: 'evidence-investigation',
    difficulty: 'intermediate',
    durationSeconds: 360,
    caseCode: 'NORTHSTAR / 03',
    skills: ['verification', 'judgment', 'communication'],
    brief: {
      objective: 'Determine the primary driver of the enterprise revenue decline and recommend the first action that best protects upcoming renewals.',
      submissionContract: ['one primary cause', 'one first action', 'at least two evidence citations'],
      nonGoals: ['produce a complete turnaround plan', 'explain every variance']
    }
  },
  artifacts: [
    {
      id: 'revenue-export',
      title: 'Recognized revenue by segment',
      kind: 'table',
      content: {
        caption: 'Finance close · Q2 to Q3 · USD rounded',
        columns: ['Segment', 'Q2', 'Q3', 'Change'],
        rows: [
          ['SMB', '$1.18m', '$1.21m', '+3%'],
          ['Mid-market', '$2.34m', '$2.30m', '-2%'],
          ['Enterprise', '$4.86m', '$3.94m', '-19%']
        ],
        note: 'Posted 8 Oct after finance close. Values are rounded.'
      }
    },
    {
      id: 'renewal-log',
      title: 'Enterprise renewal outcomes',
      kind: 'document',
      content: {
        caption: 'Customer success log · closed and upcoming renewals',
        columns: ['Account', 'Implementation', 'Renewal', 'ARR'],
        rows: [
          ['Aurora Systems', '5 weeks late', 'Lost · 15 Sep', '$410k'],
          ['CedarWorks', 'On time', 'Renewed · 28 Sep', '$260k'],
          ['Meridian Labs', '7 weeks late', 'Lost · 2 Oct', '$520k'],
          ['Atlas Group', 'Partial handoff', 'At risk · 7 Oct', '$340k'],
          ['Novus Energy', 'On time', 'Renewed · 11 Oct', '$300k']
        ],
        note: 'Status reflects the account record at close of business 11 Oct.'
      }
    },
    {
      id: 'pricing-memo',
      title: 'Q3 packaging change',
      kind: 'document',
      content: {
        eyebrow: 'Commercial operations · 12 Jul',
        heading: 'Packaging changes for new annual contracts',
        paragraphs: [
          'The Pro bundle now includes analytics. New annual list price moves from $92k to $96k, an effective 4.3% change.',
          'Enterprise renewals signed before 31 Dec remain on current commercial terms. Account teams may not reprice those renewals without approval.',
          'The 22% figure in the launch sheet is the adoption target for the analytics add-on, not a price increase.'
        ]
      }
    },
    {
      id: 'customer-calls',
      title: 'Three churn interviews',
      kind: 'transcript',
      content: {
        caption: 'Research excerpts · names removed',
        excerpts: [
          {
            marker: 'CALL 01 · 18 SEP',
            quote: 'We signed in April, but the data connection was still blocked in July. Our team never reached the first live workflow.'
          },
          {
            marker: 'CALL 02 · 4 OCT',
            quote: 'Price came up, but it was not the deciding issue. We could not get a clean handoff from sales to implementation.'
          },
          {
            marker: 'CALL 03 · 9 OCT',
            quote: 'The product fit was there. We lost confidence after the launch date moved twice and ownership kept changing.'
          }
        ]
      }
    },
    {
      id: 'dashboard',
      title: 'Executive sales overview',
      kind: 'dashboard',
      content: {
        caption: 'Derived dashboard · refreshed 10 Oct',
        metrics: [
          { label: 'Enterprise revenue', value: '-19%' },
          { label: 'Renewal loss', value: '$930k' },
          { label: 'Modeled pricing impact', value: '22%' }
        ],
        note: 'Pricing impact is a model estimate and has not been reconciled with contract terms.'
      }
    }
  ],
  choices: [
    { id: 'pricing-backlash', label: 'Pricing backlash' },
    { id: 'enterprise-renewal-failure', label: 'Enterprise renewal and implementation failure' },
    { id: 'reporting-only', label: 'Reporting artifact only' }
  ],
  ai: {
    availability: 'optional',
    mode: 'deterministic-mock',
    startsBlank: true,
    maxMessages: 6,
    privacyNotice: 'Do not enter personal, school, account, health, financial, or third-party secrets.'
  },
  privacy: {
    minimumAge: 13,
    accountRequired: false,
    personalDataCollected: false,
    sharing: 'private'
  },
  integrity: {
    source: 'deterministic-fixture',
    comparable: false
  }
});
