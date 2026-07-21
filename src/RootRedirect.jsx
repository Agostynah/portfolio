import { Navigate } from 'react-router-dom'
import { findBlogPostBySlug } from './data'
import { blogPostPath, homePath } from './lib/routes'

const SECTION_HASHES = ['blog', 'projects', 'about', 'contact']

export default function RootRedirect() {
  const hash = window.location.hash.replace('#', '')

  if (hash) {
    const enPost = findBlogPostBySlug('en', hash)
    if (enPost) return <Navigate to={blogPostPath('en', enPost.slug)} replace />

    const esPost = findBlogPostBySlug('es', hash)
    if (esPost) return <Navigate to={blogPostPath('es', esPost.slug)} replace />

    if (SECTION_HASHES.includes(hash)) {
      return <Navigate to={`${homePath('en')}#${hash}`} replace />
    }
  }

  return <Navigate to={homePath('en')} replace />
}
