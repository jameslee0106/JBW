
// A normal javascript class
class OccupationCategory {

    // Cannot implement useState because it is not a react component
    async fetchJobs() {
        const url = 'https://api.adzuna.com/v1/api/jobs/us/categories?app_id=f8df06cf&app_key=790c22f1845e68f55ef259db12a0a173'
        // console.log(url)
        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                }
            })
            const result = await response.json()
            console.log("I GOT HIT")
            return result;
          } catch (err) {
            console.log(err)
            alert('Unable to load search')
          }
        };
  }
  
  export const occupationCategory = new OccupationCategory()