export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en', {
    dateStyle: 'medium'
  })
}
