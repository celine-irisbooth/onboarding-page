export const steps = [
  {
    num: 1,
    title: 'Prep for Booth Shipment',
    sections: [
      {
        label: 'Your Shipping Details',
        desc: "Before your booth ships, you'll need to complete the shipping form.",
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
        label: 'Your Branding Details',
        desc: 'Send us your logo and messaging for the digital branding on the booth.',
        tooltip:
          'For your admin account, choose a group email address (e.g., photos@yourcompany.com) so you can share credentials across your team.',
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
    sections: [
      {
        label: 'Steps to Turn Your Booth On',
        desc: 'Instructions to unpack and set up your booth.',
        resources: [
          { icon: '🔧', label: 'Instruction Manual', href: '#' },
          {
            icon: '📦',
            label: 'Assembly Video (Full Booth only)',
            href: 'https://drive.google.com/file/d/12v3ngU5jm6yNf_-3utBBNNsuZOdQXuNk/view',
            external: true,
          },
        ],
      },
      {
        label: 'Key Details for Your IT Team',
        desc: 'Send these documents to your IT team, to enable booth VPN access for remote support.',
        resources: [
          {
            icon: '🌐',
            label: 'Network Diagram',
            href: 'https://drive.google.com/file/d/1aX7bbxwWUlGL9TtzpvEoyH785B_jK20h/view',
            external: true,
          },
          {
            icon: '⚙️',
            label: 'Port Configuration',
            href: 'https://drive.google.com/file/d/1rHIMpdNHRpG5p57mH9yC3csgBDc4jkK9/view',
            external: true,
          },
        ],
      },
    ],
  },
  {
    num: 3,
    title: 'Go Live',
    sections: [
      {
        label: 'Your booth is set up and connected!',
        desc: 'Take your first studio-quality headshot and review best practices!',
        resources: [{ icon: '⭐', label: 'Best Practices', href: '#' }],
      },
    ],
  },
  {
    num: 4,
    title: 'Partner Success Plan Call',
    sections: [
      {
        label: 'Success Roadmap & Photo Quality Check',
        desc: "After you take your first set of photos, we'll schedule a call for a photo quality check and walk through your Partner Success Plan, your strategic roadmap for reaching your goals.",
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
