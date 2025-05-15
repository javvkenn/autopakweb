// Helper functions to fetch data from Payload CMS

// Products
export async function fetchProducts() {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/products?depth=2`)
      if (!response.ok) throw new Error("Failed to fetch products")
      const data = await response.json()
      return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function fetchProductBySlug(slug: string) {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/products?where[slug][equals]=${slug}&depth=2`,
    )
    if (!response.ok) throw new Error("Failed to fetch product")
    const data = await response.json()
    return data.docs[0] || null
    } else {
      return []
    }
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error)
    return null
  }
}

// Industries
export async function fetchIndustries() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/industries?depth=2`)
    if (!response.ok) throw new Error("Failed to fetch industries")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching industries:", error)
    return []
  }
}

export async function fetchIndustryBySlug(slug: string) {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/industries?where[slug][equals]=${slug}&depth=2`,
    )
    if (!response.ok) throw new Error("Failed to fetch industry")
    const data = await response.json()
    return data.docs[0] || null
    } else {
      return []
    }
  } catch (error) {
    console.error(`Error fetching industry with slug ${slug}:`, error)
    return null
  }
}

// Blog Posts
export async function fetchBlogPosts({ limit = 10, page = 1, category = "" } = {}) {
  try {
    if (process.env.NODE_ENV !== 'production') {
    let url = `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/blog-posts?depth=2&limit=${limit}&page=${page}&where[status][equals]=published`

    if (category) {
      url += `&where[category.slug][equals]=${category}`
    }

    const response = await fetch(url)
    if (!response.ok) throw new Error("Failed to fetch blog posts")
    const data = await response.json()
    return data
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1 }
  }
}

export async function fetchBlogPostBySlug(slug: string) {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/blog-posts?where[slug][equals]=${slug}&where[status][equals]=published&depth=2`,
    )
    if (!response.ok) throw new Error("Failed to fetch blog post")
    const data = await response.json()
    return data.docs[0] || null
    } else {
      return []
    }
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

// Categories
export async function fetchCategories() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/categories`)
    if (!response.ok) throw new Error("Failed to fetch categories")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

// Testimonials
export async function fetchTestimonials({ featured = false } = {}) {
  try {
    if (process.env.NODE_ENV !== 'production') {
    let url = `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/testimonials?depth=1`

    if (featured) {
      url += "&where[featured][equals]=true"
    }

    const response = await fetch(url)
    if (!response.ok) throw new Error("Failed to fetch testimonials")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

// Pages
export async function fetchPageBySlug(slug: string) {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/pages?where[slug][equals]=${slug}&depth=2`,
    )
    if (!response.ok) throw new Error("Failed to fetch page")
    const data = await response.json()
    return data.docs[0] || null
    } else {
      return []
    }
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error)
    return null
  }
}

// Sliders
export async function fetchActiveSlider() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/sliders?where[status][equals]=active&limit=1`,
    )
    if (!response.ok) throw new Error("Failed to fetch slider")
    const data = await response.json()
    return data.docs[0] || null
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching slider:", error)
    return null
  }
}

// Services
export async function fetchServices() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/services?sort=order&limit=100`)
    if (!response.ok) throw new Error("Failed to fetch services")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching services:", error)
    return []
  }
}

// Team Members
export async function fetchTeamMembers() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/team-members?sort=order&depth=1`)
    if (!response.ok) throw new Error("Failed to fetch team members")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching team members:", error)
    return []
  }
}

// Core Values
export async function fetchCoreValues() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/core-values?sort=order&limit=100`)
    if (!response.ok) throw new Error("Failed to fetch core values")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching core values:", error)
    return []
  }
}

// Process Steps
export async function fetchProcessSteps() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/process-steps?sort=step&depth=1`)
    if (!response.ok) throw new Error("Failed to fetch process steps")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching process steps:", error)
    return []
  }
}

// Certifications
export async function fetchCertifications() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/certifications?sort=order&depth=1`)
    if (!response.ok) throw new Error("Failed to fetch certifications")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching certifications:", error)
    return []
  }
}

// FAQs
export async function fetchFAQs(category = "") {
  try {
    if (process.env.NODE_ENV !== 'production') {
    let url = `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/faqs?sort=order`

    if (category) {
      url += `&where[category][equals]=${category}`
    }

    const response = await fetch(url)
    if (!response.ok) throw new Error("Failed to fetch FAQs")
    const data = await response.json()
    return data.docs
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching FAQs:", error)
    return []
  }
}

// Company History
export async function fetchCompanyHistory() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/company-history?depth=1&limit=1`)
    if (!response.ok) throw new Error("Failed to fetch company history")
    const data = await response.json()
    return data.docs[0] || null
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching company history:", error)
    return null
  }
}

// Contact Info
export async function fetchContactInfo() {
  try {
    if (process.env.NODE_ENV !== 'production') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/contact-info?depth=1&limit=1`)
    if (!response.ok) throw new Error("Failed to fetch contact info")
    const data = await response.json()
    return data.docs[0] || null
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching contact info:", error)
    return null
  }
}
