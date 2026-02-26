export interface Product {
  id: string
  name: string
  slug: string
  category: "garage-doors" | "awnings"
  shortDescription: string
  description: string
  features: string[]
  image: string
  priceFrom: string
}

export const garageDoors: Product[] = [
  {
    id: "roller-1",
    name: "Roller Garage Doors",
    slug: "roller",
    category: "garage-doors",
    shortDescription: "Space-saving design with smooth vertical operation",
    description:
      "Our premium roller garage doors are the perfect solution for maximizing your driveway space. The compact design rolls up vertically into a neat box, leaving your garage ceiling clear and usable. Featuring whisper-quiet motors and robust aluminium construction, these doors provide excellent security and insulation.",
    features: [
      "Space-saving vertical operation",
      "Whisper-quiet electric motor",
      "Insulated aluminium slats",
      "Remote control & smart home ready",
      "Available in 20+ colours",
      "5-year warranty included",
    ],
    image: "/roller-garage-door-closeup-modern-home.jpg",
    priceFrom: "£1,499",
  },


]

export const awnings: Product[] = [
  {
    id: "retractable-1",
    name: "Retractable Awnings",
    slug: "retractable",
    category: "awnings",
    shortDescription: "Motorized shade that extends your living space",
    description:
      "Our electric retractable awnings give you complete control over your outdoor comfort. Extend for shade on hot days, retract when you want sunshine. Featuring high-quality fabrics with UV protection and optional wind sensors for automatic retraction.",
    features: [
      "Electric motorized operation",
      "UV-protective fabrics",
      "Optional wind sensor automation",
      "Remote control included",
      "300+ fabric colours available",
      "5-year warranty included",
    ],
    image: "/retractable-awning-patio-outdoor-living.jpg",
    priceFrom: "£1,199",
  },
  {
    id: "patio-1",
    name: "Patio Awnings",
    slug: "patio",
    category: "awnings",
    shortDescription: "Create the perfect outdoor entertaining space",
    description:
      "Transform your patio into an all-weather entertaining area with our premium patio awnings. Designed for larger spans, these robust awnings can cover substantial areas while maintaining a clean, streamlined appearance.",
    features: [
      "Large span coverage",
      "Heavy-duty construction",
      "Integrated LED lighting option",
      "Heating element compatible",
      "Waterproof fabric options",
      "5-year warranty included",
    ],
    image: "/patio-awning-large-outdoor-entertaining.jpg",
    priceFrom: "£1,499",
  },
  {
    id: "commercial-1",
    name: "Commercial Awnings",
    slug: "commercial",
    category: "awnings",
    shortDescription: "Professional solutions for businesses",
    description:
      "Make your business stand out with our commercial awning solutions. From shop fronts to restaurant terraces, we provide custom-designed awnings that enhance your brand presence while offering practical shade and weather protection.",
    features: [
      "Custom branding & signage",
      "Heavy-duty commercial grade",
      "Multiple mounting options",
      "Planning permission support",
      "Maintenance packages available",
      "5-year warranty included",
    ],
    image: "/commercial-awning-restaurant-terrace.jpg",
    priceFrom: "£2,499",
  },
]

export const allProducts = [...garageDoors, ...awnings]

export function getProductBySlug(category: string, slug: string): Product | undefined {
  const products = category === "garage-doors" ? garageDoors : awnings
  return products.find((p) => p.slug === slug)
}
