class AddressCache {
  constructor (expireMins) {
    this.ips = new Map()
    this.intervalClear = setInterval(() => {
      this.ips.clear()
    }, expireMins * 60000)
  }

  getAddress (ip) {
    return this.ips.get(ip)
  }

  setAddress (ip, address) {
    this.ips.set(ip, address)
  }
}

module.exports = AddressCache
