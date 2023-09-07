
// A normal javascript class
class AdzunaService {

  // Cannot implement useState because it is not a react component
    async fetchJobs(occupation, location) {
      const url = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f8df06cf&app_key=790c22f1845e68f55ef259db12a0a173&location0=US'
      const occ = !!occupation ? '&category=' + occupation : ""
      const loc = !!location ? '&location1=' + location : ""
      
      try {
          const response = await fetch(url + occ + loc, {
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

export const adzunaService = new AdzunaService()