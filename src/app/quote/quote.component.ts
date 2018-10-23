import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quotes(1,'Counting Days,','Muhammed Ali','Don’t count the days; make the days count.',new Date(1975, 3, 12 )),
    new Quotes(2,'Giving extra,','Jimmy Johnson','The difference between ordinary and extraordinary is that little extra.',new Date(2004, 6, 8)),
    new Quotes(3,'Hitting target,',' Henry David Thoreau','You must only aim right, but draw your bow with all your might', new Date(2006, 7, 10)),
    new Quotes(4,'Right Mindset,','Babe Ruth','Every strike brings closer to the next home run',new Date(1998, 5, 9)),
    new Quotes(5,'Time to start,','Napoleon Hill','Dont wait the time will never be just right',new Date(2012, 7, 10)),

  ]
  toogleDetails(index){
             this.quotes[index].showExplanation = !this.quotes[index].showExplanation;
         }
         addNewQuotes(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

   }

  deleteQuotes(isComplete,index){
          if (isComplete){
           let toDelete=confirm(`Are you sure you want to delete your quote ${this.quotes[index].quote}`)

            if(toDelete){
              this.quotes.splice(index,1);
              }
            }
         }


  constructor() { }

  ngOnInit() {
  }

}
