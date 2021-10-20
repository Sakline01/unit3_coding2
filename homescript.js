async function getresult() {
    let res= await octokit.request('GET /search/users', {
        q: 'q'
      });
      let data=await res.json();
      console.log(data);
}