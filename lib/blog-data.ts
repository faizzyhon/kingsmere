export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  image: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "choosing-right-garage-door",
    title: "How to Choose the Right Garage Door for Your Home",
    excerpt:
      "Not sure which garage door style suits your property? Our comprehensive guide covers everything from sectional to roller doors, helping you make the perfect choice.",
    content: `Choosing the right garage door is a significant decision that affects your home's appearance, security, and property value. In this guide, we'll walk you through the key considerations.

## Understanding Your Options

There are four main types of garage doors available in the UK market today: roller, sectional, side-hinged, and up & over. Each has its own advantages depending on your needs.

## Roller Garage Doors

Perfect for driveways with limited space. These doors roll vertically into a compact box above the opening, leaving your garage ceiling completely clear. They're excellent for security and come with electric operation as standard.

## Sectional Garage Doors

If insulation is your priority, sectional doors are unbeatable. Their double-skinned panels provide superior thermal efficiency, making them ideal if you use your garage as a workshop or home gym.

## Consider Your Budget

Prices vary considerably. Up & over doors start from around £900, while premium sectional doors can exceed £2,500. Remember to factor in installation costs and any structural modifications needed.

## Final Thoughts

The best garage door for you depends on your specific requirements, budget, and property style. Our team at Kingsmere is always happy to visit your property for a free consultation and provide expert advice tailored to your situation.`,
    author: "James Kingsmere",
    publishedAt: "2026-01-05",
    category: "Garage Doors",
    image: "/blog-choosing-garage-door-guide.jpg",
    tags: ["garage doors", "home improvement", "buying guide"],
  },
  {
    id: "2",
    slug: "benefits-electric-awnings",
    title: "5 Benefits of Installing Electric Awnings",
    excerpt:
      "Discover how electric retractable awnings can transform your outdoor space, reduce energy bills, and add value to your property.",
    content: `Electric awnings are becoming increasingly popular with UK homeowners, and for good reason. Here are five compelling benefits that might convince you to invest in one.

## 1. Extend Your Living Space

A quality awning effectively creates an additional outdoor room. Rain or shine, you can enjoy your patio area comfortably, perfect for entertaining or relaxing with family.

## 2. Energy Savings

By blocking direct sunlight from hitting windows and glass doors, awnings can significantly reduce indoor temperatures during summer. This means less reliance on air conditioning and lower energy bills.

## 3. Protect Your Furniture

UV rays cause fabrics, carpets, and furniture to fade over time. An awning shields your interior furnishings from harmful sun exposure, extending their lifespan considerably.

## 4. One-Touch Convenience

Modern electric awnings operate at the press of a button. No manual cranking or physical effort required. Many models include wind sensors that automatically retract the awning during strong winds.

## 5. Increase Property Value

Quality outdoor improvements are proven to boost property values. An attractive, well-installed awning system demonstrates that a property has been well-maintained and thoughtfully enhanced.

Ready to enjoy these benefits? Contact Kingsmere for a free survey and quotation. We'll help you choose the perfect awning for your home.`,
    author: "Sarah Mitchell",
    publishedAt: "2025-12-28",
    category: "Awnings",
    image: "/blog-electric-awnings-benefits.jpg",
    tags: ["awnings", "outdoor living", "energy efficiency"],
  },
  {
    id: "3",
    slug: "garage-door-maintenance-tips",
    title: "Essential Garage Door Maintenance: Keep Your Door Running Smoothly",
    excerpt:
      "Simple maintenance can add years to your garage door's lifespan. Learn the essential checks and care tips that every homeowner should know.",
    content: `Regular maintenance is key to ensuring your garage door operates smoothly for years to come. Here's our professional guide to keeping your door in top condition.

## Monthly Visual Inspections

Take a few minutes each month to visually inspect your garage door. Look for:
- Loose or damaged hardware
- Worn or frayed cables
- Signs of rust or corrosion
- Misaligned tracks

## Lubrication is Key

Apply lubricant to all moving parts every three months. Use a lithium-based lubricant spray on hinges, rollers, and tracks. This simple step prevents wear and keeps operation smooth and quiet.

## Test Safety Features

Modern electric garage doors include safety sensors. Test them monthly by placing an object in the door's path. The door should automatically reverse when it detects the obstruction.

## Clean and Clear

Keep tracks clean from debris and dirt. A simple wipe-down with a damp cloth prevents buildup that can affect smooth operation. Also ensure the area around sensors is clear.

## Professional Service

While DIY maintenance is important, we recommend professional servicing annually. Our technicians can spot potential issues before they become expensive problems.

## When to Call a Professional

If you notice any unusual noises, difficulty opening or closing, or visible damage to cables or springs, contact a professional immediately. These issues can pose safety risks and should never be ignored.

At Kingsmere, we offer comprehensive maintenance packages for all garage door types. Contact us today to schedule your annual service.`,
    author: "James Kingsmere",
    publishedAt: "2025-12-15",
    category: "Maintenance",
    image: "/blog-garage-door-maintenance.jpg",
    tags: ["maintenance", "garage doors", "tips"],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
