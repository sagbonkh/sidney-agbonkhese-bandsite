export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  async postComment(comment) {
    try {
      const response = await axios.post(
        `${this.baseUrl}comments/?api_key=${this.apiKey}`,
        comment
      );
    } catch (error) {
      console.error(error);
    }
  }
  async getComments() {
    const response = await axios.get(
      `${this.baseUrl}comments/?api_key=${this.apiKey}`
    );
    const comments = response.data;
    comments.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    return comments;
  }
  async getShows() {
    const response = await axios.get(
      `${this.baseUrl}showdates/?api_key=${this.apiKey}`
    );
    const shows = response.data;
    return shows;
  }
}
