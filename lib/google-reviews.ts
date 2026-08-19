export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/1pv0wz8nq&q=Absolute+Carpet+Clean+%26+Janitorial+Services"

export type GoogleReview = {
  name: string
  rating: 5
  quote?: string
  featured?: boolean
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "lynn black",
    rating: 5,
    featured: true,
    quote:
      "Matt did a wonderful job cleaning my windows, a job way overdue. They are sparkling! He is very hard working and professional and so easy to work with. He did my carpets a year and a half ago ...another job very well done!",
  },
  {
    name: "Kayla Chang",
    rating: 5,
    quote:
      "Highly recommend Matt and Christina are very responsive and professional. Happy with the results of tile cleaning and sealing service provided",
  },
  {
    name: "Susan Hall",
    rating: 5,
    featured: true,
    quote:
      "Absolute Carpet Care and Janitorial Services: Matt did a wonderful job on our condo in Kauai! The carpet in the bedroom and the tile floors had never been professionally cleaned. They look brand NEW. He also cleaned my area rugs and sofa and recliner and they look just beautiful. Very meticulous and thorough job. Mahalo!",
  },
  {
    name: "Lori Wright",
    rating: 5,
    featured: true,
    quote:
      "Matt goes above & beyond with his own level of extreme clean. We highly recommend him whether it be for carpet cleaning, tile/flooring, windows, furniture, etc. You won't be sorry! Excellent care & service.",
  },
  {
    name: "Liz Waybright",
    rating: 5,
    featured: true,
    quote:
      "Matt did an excellent job! He's very professional. Our carpet looks great and he got the stains out. Highly recommend him and we'll be using his company again in the future.",
  },
  {
    name: "Todd Brown",
    rating: 5,
    quote:
      "Matt did a great job as always for us. He also cleaned our couch which was badly needing it. I highly recommend Matt for any of your cleaning needs.",
  },
  {
    name: "Scott Pangerl",
    rating: 5,
    featured: true,
    quote:
      "Great service! Fit our condo into his busy schedule. Matt was a professional in getting in there and getting it done. He moved several tables and chairs to get the carpet underneath and then put them back where they belong. I would highly recommend Absolute Carpet.",
  },
  {
    name: "Kimberly Schmauch",
    rating: 5,
    featured: true,
    quote:
      "Matt was excellent!! We recently purchased a home with over 50 windows and screens. The windows, tracks and screens desperately needed to be cleaned as the house had not been occupied for a long time and the task was overwhelming to tackle. I called Matt and he came to my rescue! He did a phenomenal job and my windows, screens and tracks are sparkling. I would highly recommend him! Thank you Matt!",
  },
  {
    name: "Hope Chihara",
    rating: 5,
    quote:
      "I called Absolute to have my much needed carpets cleaned. I had an adopted dog for 8 wonderful years and she sadly just passed away. My carpet were a mess especially the end of my dog's life being very sick. I called Matthew and he answered and scheduled me right away. He was on time and very professional. Whipped through my carpets, he knows exactly what he is doing. They look, smell and feel so much better. The bonus is that he is reasonably priced. I will be calling him again and referring him to everyone I know. Thank you Matthew and Absolute!! 🤗",
  },
  {
    name: "Sarah Maiani",
    rating: 5,
    quote:
      "My potty-training toddler had a few accidents on our couch. I tried cleaning it myself, which was time consuming, and it was difficult to get the pee smell completely out. I finally had the couch professionally cleaned by Matt. The service was easy to schedule, he did a thorough cleaning, and I'm happy with the result. I recommend this business.",
  },
  {
    name: "Anna Bazalar",
    rating: 5,
    quote:
      "Matt was on time, professional, thorough, and my carpets looked so good and smelled nice. Very satisfied with his work. He'll be back to do our couches next. Excited to have found someone in the homesteads.",
  },
  {
    name: "Lindsey Alexander",
    rating: 5,
    quote:
      "They made my couch look brand new again!! AND best part they got all my pets smells out that have been driving me crazy! So happy with the outcome and will be calling again! Thank you!",
  },
  {
    name: "Allison Fraley",
    rating: 5,
    quote:
      "Very professional and hard working. Great customer service. Highly recommend. Excellent window cleaning. Mahalo Matt.",
  },
  {
    name: "Surf AllDay",
    rating: 5,
    quote:
      "Super excellent ! Responded right away and was very kind and went out of his way to make it happen in great timing for me. Would call again 100% for next time.",
  },
  {
    name: "attractaloha",
    rating: 5,
    quote: "They are awesome! They can clean and sanitize everything! I highly recommend them! 🌺🤙🏼",
  },
  {
    name: "Violet Ciroli",
    rating: 5,
    quote: "Matt made my old stained carpet look BRAND NEW! Thank you!",
  },
  {
    name: "Susan Storm",
    rating: 5,
    quote: "Cleaned my porcelain and travertine floors. Perfect work!!",
  },
  {
    name: "TTMO",
    rating: 5,
    quote: "This was excellent work",
  },
  {
    name: "Wailua Kauai",
    rating: 5,
  },
  {
    name: "Mb Summer Zaffino",
    rating: 5,
  },
]

export const HOMEPAGE_REVIEWS = GOOGLE_REVIEWS.filter((review) => review.featured).slice(0, 6)
