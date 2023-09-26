class BookmarkService {

    async fetchBookmark() {
        const url = 'http://localhost:4000/bookmark'
        try {
            const response = await fetch(url)
            const text = await response.text()
            console.log(text)
            return text;
          } catch (err) {
            console.log(err)
            alert('Unable to load search')
          }
        };
}
export const bookmarkService = new BookmarkService()