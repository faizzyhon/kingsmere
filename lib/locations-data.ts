export interface Location {
  id: string
  name: string
  slug: string
  county: string
  description: string
  serviceAreas: string[]
  image: string
  metaDescription: string
}

export const locations: Location[] = [
  {
    id: "london",
    name: "London",
    slug: "london",
    county: "Greater London",
    description:
      "Kingsmere Home Improvements proudly serves all London boroughs with premium electric garage doors and awnings. From period properties in Kensington to modern developments in Canary Wharf, we provide tailored solutions for every London home.",
    serviceAreas: [
      "Westminster",
      "Kensington and Chelsea",
      "Camden",
      "Islington",
      "Hackney",
      "Tower Hamlets",
      "Greenwich",
      "Lewisham",
      "Southwark",
      "Lambeth",
      "Wandsworth",
      "Hammersmith and Fulham",
      "Richmond upon Thames",
      "Kingston upon Thames",
      "Croydon",
      "Bromley",
      "Bexley",
      "Havering",
      "Barking and Dagenham",
      "Redbridge",
      "Newham",
      "Waltham Forest",
      "Haringey",
      "Enfield",
      "Barnet",
      "Harrow",
      "Brent",
      "Ealing",
      "Hounslow",
      "Hillingdon",
      "Merton",
      "Sutton",
    ],
    image: "/location-london-homes.jpg",
    metaDescription:
      "Professional garage door and awning installation across all London boroughs. Free surveys, expert fitting, 5-year warranty. Call Kingsmere today.",
  },
  {
    id: "birmingham",
    name: "Birmingham",
    slug: "birmingham",
    county: "West Midlands",
    description:
      "Serving Birmingham and the wider West Midlands region, Kingsmere delivers exceptional home improvement solutions. Whether you're in Edgbaston, Solihull, or Sutton Coldfield, our team provides expert installation and ongoing support.",
    serviceAreas: [
      "Birmingham City Centre",
      "Edgbaston",
      "Harborne",
      "Moseley",
      "Kings Heath",
      "Solihull",
      "Sutton Coldfield",
      "Erdington",
      "Castle Bromwich",
      "Hall Green",
      "Selly Oak",
      "Northfield",
      "Longbridge",
      "Sheldon",
      "Yardley",
    ],
    image: "/location-birmingham-homes.jpg",
    metaDescription:
      "Expert garage doors and awnings in Birmingham. Family-run business with 5-year warranty. Serving all West Midlands areas. Free quotes available.",
  },
  {
    id: "manchester",
    name: "Manchester",
    slug: "manchester",
    county: "Greater Manchester",
    description:
      "Kingsmere brings premium garage doors and awnings to homes across Greater Manchester. From the city centre to Cheshire suburbs, we're your trusted local experts for home improvement solutions.",
    serviceAreas: [
      "Manchester City Centre",
      "Salford",
      "Trafford",
      "Stockport",
      "Oldham",
      "Rochdale",
      "Bury",
      "Bolton",
      "Wigan",
      "Tameside",
      "Altrincham",
      "Sale",
      "Stretford",
      "Didsbury",
      "Chorlton",
    ],
    image: "/location-manchester-homes.jpg",
    metaDescription:
      "Manchester garage door specialists. Electric roller doors. Professional awning installation. Free home surveys.",
  },
  {
    id: "bristol",
    name: "Bristol",
    slug: "bristol",
    county: "Bristol & Somerset",
    description:
      "Serving Bristol and the beautiful surrounding areas of Somerset and South Gloucestershire. Kingsmere provides quality garage doors and awnings with the personal service you'd expect from a family business.",
    serviceAreas: [
      "Bristol City Centre",
      "Clifton",
      "Redland",
      "Bishopston",
      "Henleaze",
      "Westbury-on-Trym",
      "Stoke Bishop",
      "Bedminster",
      "Southville",
      "Fishponds",
      "Filton",
      "Bradley Stoke",
      "Thornbury",
      "Keynsham",
      "Bath",
    ],
    image: "/location-bristol-homes.jpg",
    metaDescription:
      "Bristol's trusted garage door company. Roller doors and electric awnings for patios. 5-year warranty included.",
  },
  {
    id: "leeds",
    name: "Leeds",
    slug: "leeds",
    county: "West Yorkshire",
    description:
      "Kingsmere is proud to serve Leeds and West Yorkshire with premium home improvement solutions. Our expert team covers the entire region, bringing quality garage doors and awnings to your doorstep.",
    serviceAreas: [
      "Leeds City Centre",
      "Headingley",
      "Chapel Allerton",
      "Roundhay",
      "Horsforth",
      "Wetherby",
      "Garforth",
      "Morley",
      "Pudsey",
      "Yeadon",
      "Guiseley",
      "Otley",
      "Rothwell",
      "Kippax",
    ],
    image: "/location-leeds-homes.jpg",
    metaDescription:
      "Leeds garage door installation experts. Quality electric garage doors & awnings. Family business since 2016. Get your free quote today.",
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug)
}
