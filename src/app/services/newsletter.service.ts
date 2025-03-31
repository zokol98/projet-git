import { Injectable } from '@angular/core';
import { Newsletter } from '../models/newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  newsletters : Newsletter[] = []
  url = "http://10.252.252.53:8000"


  async storeNewsletter(emailParam:string):Promise<Newsletter>{
        const newsletterAdd = {
          email : emailParam
        }
    
        let rep =  await fetch(`${this.url}/api/newsletters`, {
                  method: 'POST',
                  body: JSON.stringify(newsletterAdd),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                .then(reponse => reponse.json())
        return rep 
      }
}
