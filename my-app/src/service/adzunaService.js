
// A normal javascript class
class AdzunaService {

  // Cannot implement useState because it is not a react component
 
    async fetchJobs() {
        try {
          const response = await fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f8df06cf&app_key=790c22f1845e68f55ef259db12a0a173', {
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

        // fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f8df06cf&app_key=790c22f1845e68f55ef259db12a0a173`, {
        //     headers: {
        //       'Accept': 'application/json',
        //     }
        //   })
        //   .then(response => {
        //     return response.json();
        //   })
        //   .then(data => {
        //     console.log(data);
        //     // setDatabase(data);
        //   })
        //   .catch(error => {
        //     console.error('Error database:', error);
        //   });
      };
}

export const adzunaService = new AdzunaService()