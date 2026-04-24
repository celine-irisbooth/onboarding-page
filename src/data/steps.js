export const steps = [
  {
    num: 1,
    title: 'Before Your Booth Arrives',
    subCards: [
      {
        subNum: 'A',
        title: 'Choose your shipment method',
        desc: 'Review your shipping options to determine what works best for your space.',
        resources: [
          {
            icon: '📦',
            label: 'Shipping Guide',
            href: 'https://docs.google.com/presentation/d/1BEnF3En9XWInyIN37SSR57pl-Wa-jPAI/edit',
            external: true,
          },
        ],
      },
      {
        subNum: 'B',
        title: 'Enter your shipping details',
        desc: "Before your booth ships, send us your shipping details.",
        tooltip:
          'Delivery is to the loading dock or receiving area.',
        resources: [
          {
            icon: '📋',
            label: 'Shipping Form',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeK_uvpGA-tGyjfmFRNDOPSiu1NnyHQQnt7xACevUeTvt5Dnw/viewform?usp=sharing&ouid=117691127212973742030',
            external: true,
          },
        ],
      },
      {
        subNum: 'C',
        title: 'Submit your branding details',
        desc: 'Submit your logo and messaging for the digital branding on the booth.',
        tooltip:
          'For your admin account, choose a group email address (e.g., photos@yourcompany.com) to share credentials.',
        resources: [
          {
            icon: '🎨',
            label: 'Branding Request Form',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSddO3BAmEn_UA7xW4Y_lea5o92PASjgeWSqh0TfcGwlj6A-5A/viewform?usp=sharing&ouid=117691127212973742030',
            external: true,
          },
        ],
      },
    ],
  },
  {
    num: 2,
    title: 'Your Booth Arrives!',
    subCards: [
      {
        subNum: 'A',
        title: 'Prepare for delivery',
        desc: 'Review the Shipping Guide for full delivery-day instructions to accept your shipment.',
        tooltip: 'Confirm a loading dock, freight elevator, and/or receiving area is available.',
        resources: [
          {
            icon: '📦',
            label: 'Shipping Guide',
            href: 'https://docs.google.com/presentation/d/1BEnF3En9XWInyIN37SSR57pl-Wa-jPAI/edit',
            external: true,
          },
        ],
      },
      {
        subNum: 'B',
        title: 'Assemble your booth',
        desc: 'Everything you need to assemble and get your booth ready.',
        resources: [
          {
            icon: '⚡',
            label: 'Quick Setup Guide',
            desc: 'A short guide to get your booth up and running fast.',
            href: 'https://docs.google.com/presentation/d/1zYLH5B9gY4Q7oWSLdFc10qfgHPLSWQmB/edit?usp=sharing&ouid=117691127212973742030&rtpof=true&sd=true',
            external: true,
          },
          {
            icon: '📖',
            label: 'Instruction Manual',
            desc: 'The full reference — daily operation, branding, and more.',
            href: 'https://docs.google.com/presentation/d/1tP6dfkR2k0Ido5oTaHWWeDS_TLZ2Qwb-/edit?usp=sharing&ouid=117691127212973742030&rtpof=true&sd=true',
            external: true,
          },
        ],
      },
    ],
  },
  {
    num: 3,
    title: 'Set Up Your Internet\nand VPN Access',
    subCards: [
      {
        warning: true,
        title: 'Legacy Upgrade — Extra Step',
        desc: '<span class="warning-qualifier"><strong>This only applies if you were notified about the upgrade.</strong> Skip this step if you are on the new platform.</span>\n\nWe\'re shipping new features to your booth! Our team will be upgrading your booth from the Legacy software to the new platform.\n\nForward the documents below to your IT team to set up the Legacy internet and network.',
        resources: [
          {
            icon: '📖',
            label: 'Legacy Internet Connection Guide',
            href: 'https://docs.google.com/presentation/d/1T4fuOjzdeFKReElF7NDdoze2AxQanrEu/edit',
            external: true,
          },
          {
            icon: '🌐',
            label: 'Legacy Network Configuration',
            desc: '🔒 Password-protected',
            href: 'https://drive.google.com/file/d/1UY9uo7BebLpWIRJlUxbdf2mV521dPH7t/view?usp=drive_link',
            external: true,
          },
        ],
      },
      {
        title: 'New Platform — IT Network Setup',
        desc: 'Share these documents with your IT team to configure internet and network access.',
        resources: [
          {
            icon: '📖',
            label: 'Instruction Manual — Network Setup',
            href: 'https://docs.google.com/presentation/d/1tP6dfkR2k0Ido5oTaHWWeDS_TLZ2Qwb-/edit?slide=id.p9#slide=id.p9',
            external: true,
          },
          {
            icon: '🌐',
            label: 'Network & Port Configuration',
            desc: '🔒 Password-protected',
            href: 'https://drive.google.com/file/d/14b9et-qlWCVEPFZofDTyoJiHlaqTaMIk/view?usp=sharing',
            external: true,
          },
        ],
      },
    ],
  },
  {
    num: 4,
    title: 'Go Live &\nYour Success Plan',
    subCards: [
      {
        subNum: 'A',
        title: 'Capture your first headshot',
        desc: 'Take your first studio-quality headshot and review best practices!',
        resources: [
          {
            icon: '⭐',
            label: 'Best Practices',
            href: 'https://drive.google.com/file/d/1HRXviOGBvAejXhBjJRFVnLMfzYJPNLQQ/view?usp=sharing',
            external: true,
          },
        ],
      },
      {
        subNum: 'B',
        title: 'Kick off your Success Plan',
        desc: "After your first set of photos, we'll schedule a call for a photo quality check and walk through your Success Plan, your strategic roadmap for reaching your goals.\n\nAfter the quality check, we'll apply your booth branding and you'll get an email to activate your admin account.",
        resources: [
          {
            icon: '🗺️',
            label: 'Learn more about your Success Plan ↓',
            href: '#psp',
          },
        ],
      },
    ],
  },
];
