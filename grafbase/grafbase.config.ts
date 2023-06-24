import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min:2,max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  faceBookbUrl: g.url().optional(),
  pinterestUrl: g.url().optional(),
  notes: g.relation(() => Note).list().optional(),
})

const Note = g.model('Note', {
  title: g.string().length({min: 3}),
  description: g.string().optional(),
  image: g.url(),
  pdfUrl: g.url(),
  createdBy: g.relation(()=> User),
})

export default config({
  schema: g 
})
