import { Code, Share2, Palette, Settings } from 'lucide-react';

export const servicesData = [
  {
    id: 'website-development',
    title: 'Website Development',
    icon: 'Code',
    description: 'Custom, high-performance websites built with the latest technologies to scale your business.',
    subItems: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Responsive Design',
      'Performance Optimization',
      'SEO Friendly Architecture',
      'Custom API Development'
    ],
    portfolio: [
      { 
        title: 'TechStart SaaS', 
        description: 'Built a full-scale dashboard for a fintech startup.', 
        link: 'https://example.com',
        image: '/projects/p_web_1.png'
      },
      { 
        title: 'VibeShop E-com', 
        description: 'High-converting online store with seamless checkout.', 
        link: 'https://example.com',
        image: '/projects/p_web_2.png'
      },
      { 
        title: 'Global Insights Dashboard', 
        description: 'Next-gen analytics platform for a global logistics firm.', 
        link: 'https://example.com',
        image: '/projects/p_web_3.png'
      },
      { 
        title: 'Crypto Terminal Pro', 
        description: 'High-performance trading interface with real-time data streaming.', 
        link: 'https://example.com',
        image: '/projects/p_web_1.png'
      },
      { 
        title: 'ZenStyle Lifestyle', 
        description: 'Premium minimal e-commerce journey for a wellness brand.', 
        link: 'https://example.com',
        image: '/projects/p_web_2.png'
      }
    ],
    plans: [
      { name: 'Basic Site', price: '$1,500', features: ['5 Pages', 'Responsive Design', 'Basic SEO'] },
      { name: 'Enterprise', price: '$4,500+', features: ['Custom Logic', 'Full Backend', 'Scalable Arch'] }
    ]
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    icon: 'Share2',
    description: 'Strategic content creation and community management to build a powerful brand presence.',
    subItems: [
      'Content Strategy',
      'Daily Posting',
      'Engagement Growth',
      'Influencer Coordination',
      'Ad Campaign Management'
    ],
    portfolio: [
      { 
        id: 'sm1',
        title: 'Neon Pulse Campaign', 
        description: 'High-energy reels for a tech brand.', 
        type: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-dancing-and-singing-31891-large.mp4',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm1'
      },
      { 
        id: 'sm2',
        title: 'Urban Style Reel', 
        description: 'Streetwear fashion showcase.', 
        type: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-in-a-futuristic-urban-setting-31844-large.mp4',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm2'
      },
      { 
        id: 'sm3',
        title: 'Aura Glow Branding', 
        description: 'Minimalist brand aesthetic reveal.', 
        type: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-light-clothes-and-blue-neon-lights-31845-large.mp4',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm3'
      },
      { 
        id: 'sm4',
        title: 'Lifestyle Aesthetics', 
        description: 'Curated lifestyle feed management.', 
        type: 'image',
        content: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm4'
      },
      { 
        id: 'sm5',
        title: 'Motion Design Reel', 
        description: 'Abstract motion for a creative agency.', 
        type: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-dancing-to-the-music-in-neon-light-31862-large.mp4',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm5'
      },
      { 
        id: 'sm6',
        title: 'Fashion Trend Set', 
        description: 'Seasonal trend coordination.', 
        type: 'image',
        content: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm6'
      },
      { 
        id: 'sm7',
        title: 'Tech Influence', 
        description: 'B2B influencer strategy.', 
        type: 'image',
        content: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm7'
      },
      { 
        id: 'sm8',
        title: 'Brand Story Reel', 
        description: 'Narrative-driven content for impact.', 
        type: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-woman-with-bright-makeup-looking-at-camera-31846-large.mp4',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm8'
      },
      { 
        id: 'sm9',
        title: 'Minimalist Content', 
        description: 'Clean visuals for high-end clients.', 
        type: 'image',
        content: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
        thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sm9'
      }
    ],
    plans: [
      { name: 'Starter', price: '$500/mo', features: ['3 Posts/Week', 'Engagement', 'Monthly Report'] },
      { name: 'Pro', price: '$1,200/mo', features: ['Daily Content', 'Ad Management', 'Weekly Insights'] }
    ]
  },
  {
    id: 'visual-identity-design',
    title: 'Visual Identity Design',
    icon: 'Palette',
    description: 'Defining your brand voice through stunning visual elements and comprehensive design systems.',
    subItems: [
      'Logo & Visual System',
      'Brand Guidelines',
      'Marketing Assets',
      'Typography & Color Palette',
      'Iconography Systems'
    ],
    portfolio: [
      { 
        title: 'EcoPulse Branding', 
        description: 'Complete identity for a green energy startup.', 
        link: 'https://example.com',
        image: '/projects/p_brand_1.png'
      },
      { 
        title: 'UrbanWear Style', 
        description: 'Edgy visual system for a premium streetwear brand.', 
        link: 'https://example.com',
        image: '/projects/p_brand_2.png'
      },
      { 
        title: 'Luxe Jewelry Identity', 
        description: 'Minimalist and elegant visual system for a premium jewelry firm.', 
        link: 'https://example.com',
        image: '/projects/p_brand_3.png'
      }
    ],
    plans: [
      { name: 'Identity Kit', price: '$1,200', features: ['Logo Design', 'Basic Guidelines'] },
      { name: 'Full System', price: '$3,000', features: ['Full Guidelines', 'Marketing Templates', 'Asset Library'] }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    icon: 'Settings',
    description: 'Continuous support and updates to ensure your digital assets are always secure and up-to-date.',
    subItems: [
      'Security Monitoring',
      'Regular Backups',
      'Software Updates',
      'Bug Fixing',
      'Priority Support'
    ],
    portfolio: [
      { 
        title: 'Reliability Plus', 
        description: 'Maintained 99.9% uptime for 10+ high-traffic portals.', 
        link: 'https://example.com',
        image: '/projects/p_maint_1.png'
      },
      { 
        title: 'Core Guard', 
        description: 'Secured and optimized legacy systems for a legal firm.', 
        link: 'https://example.com',
        image: '/projects/p_maint_2.png'
      },
      { 
        title: 'Server Sentinel', 
        description: 'Real-time performance and security auditing for high-speed apps.', 
        link: 'https://example.com',
        image: '/projects/p_maint_3.png'
      }
    ],
    plans: [
      { name: 'Monthly Support', price: '$200/mo', features: ['Updates', 'Backups', '2h Support'] },
      { name: 'Premium Care', price: '$500/mo', features: ['24/7 Monitoring', 'Priority Fixes', 'Unlimited Small Tweaks'] }
    ]
  }
];
