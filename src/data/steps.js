export const steps = [
  {
    num: 1,
    title: 'Before Your Booth Arrives',
    subCards: [
      {
        subNum: 'A',
        title: 'Enter your shipping details',
        desc: 'Review our Shipping Guide for delivery options, then submit your shipping details so we can get your booth on the way.',
        tooltip:
          'Delivery is to the loading dock or receiving area.',
        resources: [
          {
            icon: '📦',
            label: 'Shipping Guide',
            href: 'https://docs.google.com/presentation/d/1BEnF3En9XWInyIN37SSR57pl-Wa-jPAI/edit',
            external: true,
          },
          {
            icon: '📋',
            label: 'Shipping Checklist',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeK_uvpGA-tGyjfmFRNDOPSiu1NnyHQQnt7xACevUeTvt5Dnw/viewform?usp=sharing&ouid=117691127212973742030',
            external: true,
          },
        ],
      },
      {
        subNum: 'B',
        title: 'Prepare for delivery',
        desc: 'Review, print, and share the Delivery Day Checklist with your team before delivery day.\n<div class="inline-warning">⚠️&nbsp; <strong>Before signing the BOL</strong> and accepting the delivery, ensure the package is in good condition.<br/><br/>If there is damage:<ul><li>Take photos (Required: Outer packaging before unpacking, signed BOL)</li><li>Note all damage on the BOL before signing</li><li>Contact us immediately for next steps</li></ul></div>',
        resources: [
          {
            icon: '📦',
            label: 'Shipping Guide (Delivery Day Checklist)',
            href: 'https://docs.google.com/presentation/d/1BEnF3En9XWInyIN37SSR57pl-Wa-jPAI/edit?slide=id.g3e499cdd501_0_5#slide=id.g3e499cdd501_0_5',
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
    title: 'Set Up Your Internet, VPN Access,\n& Booth Branding',
    subCards: [
      {
        subNum: 'A',
        title: 'IT Network Setup',
        desc: 'Share these documents with your IT team to configure internet and network access. <strong>This is required for booth branding, adjusting camera settings, and troubleshooting.</strong>',
        resources: [
          {
            icon: '📖',
            label: 'Instruction Manual — Network Setup',
            href: 'https://docs.google.com/presentation/d/1tP6dfkR2k0Ido5oTaHWWeDS_TLZ2Qwb-/edit?slide=id.p9#slide=id.p9',
            external: true,
          },
          {
            icon: '🌐',
            label: 'Network Configuration',
            desc: '🔒 Password-protected',
            href: 'https://drive.google.com/file/d/1dRsZSBvzSBnzyXwknqYtRVPHyz2ifMJ5/view?usp=sharing',
            external: true,
          },
        ],
      },
      {
        subNum: 'B',
        title: 'Confirm your admin account email',
        desc: 'Submit your group email address to create your admin account. You\'ll receive access to the admin dashboard to manage your booth and view photos.',
        resources: [
          {
            icon: '📋',
            label: 'Admin Account Request Form',
            href: 'https://workable-front-aa1.notion.site/839bea94038b82de8d4a0146144fdf5d?pvs=105',
            external: true,
          },
        ],
      },
      {
        subNum: 'C',
        title: 'Customize your booth branding',
        desc: "Update your booth branding in your admin account. Go to <strong>My Devices > Customize</strong>, and manage your Studio (photos follow-up email) under <strong>My Studios > Customize</strong>.",
      },
    ],
  },
  {
    num: 4,
    title: 'Go Live',
    subCards: [
      {
        subNum: 'A',
        title: 'Capture your first headshot',
        desc: 'Take your first studio-quality headshot! Our team will review your photos and complete a photo quality check.',
      },
      {
        subNum: 'B',
        title: 'Launch your booth!',
        desc: 'Use our Marketing Toolkit to produce launch content to spread the word. Share the playlist to train your team on the admin portal.',
        resources: [
          {
            icon: '📣',
            label: 'Marketing Toolkit',
            desc: 'Logos, images & messaging',
            href: 'https://drive.google.com/drive/folders/1UTfs289UbQZbNB7GoS3y_Vf32Cg8mFbL?usp=drive_link',
            external: true,
          },
          {
            icon: '🎓',
            label: 'Iris Booth Academy Playlist',
            desc: 'Video walkthroughs and tutorials',
            href: 'https://www.youtube.com/playlist?list=PLPf7o80UoCP2Z-DENMbrZKlTE0u_tApfz',
            external: true,
          },
        ],
      },
    ],
  },
];
