import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubdomainService {
  getSubdomain(): string | null {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');

    if (parts.length > 2) {
      const tldAndDomain = 2;
      const subdomainParts = parts.slice(0, -tldAndDomain).join('.'); // 'joey.info' de 'joey.info.example.com'

      return subdomainParts;
    } else {
      return parts[0]
    }

    return null;
  }
}
