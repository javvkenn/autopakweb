// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import Products from "./cms/collections/Products"
import Industries from "./cms/collections/Industries"
import BlogPosts from "./cms/collections/BlogPosts"
import Media from "./cms/collections/Media"
import Pages from "./cms/collections/Pages"
import Testimonials from "./cms/collections/Testimonials"
import Categories from "./cms/collections/Categories"
import Tags from "./cms/collections/Tags"
import Authors from "./cms/collections/Authors"
import Sliders from "./cms/collections/Sliders"
import Services from "./cms/collections/Services"
import TeamMembers from "./cms/collections/TeamMembers"
import CoreValues from "./cms/collections/CoreValues"
import ProcessSteps from "./cms/collections/ProcessSteps"
import Certifications from "./cms/collections/Certifications"
import FAQs from "./cms/collections/FAQs"
import CompanyHistory from "./cms/collections/CompanyHistory"
import ContactInfo from "./cms/collections/ContactInfo"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Products,
    Industries,
    BlogPosts,
    Media,
    Pages,
    Testimonials,
    Categories,
    Tags,
    Authors,
    Sliders,
    Services,
    TeamMembers,
    CoreValues,
    ProcessSteps,
    Certifications,
    FAQs,
    CompanyHistory,
    ContactInfo,],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
