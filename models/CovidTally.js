module.exports = class CovidTally {
  constructor(country, code , confirmed, recovered, critical, deaths, lastupdate) {
    this.country = country
    this.code = code
    this.confirmed = confirmed
    this.recovered = recovered
    this.critical = critical
    this.deaths = deaths
    this.lastupdate = lastupdate
  }
}