import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vote-box',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  numberOfVotes: number = 0;

 upvoteButtonClick() {
   this.numberOfVotes++;
 }

 downvoteButtonClick() {
   this.numberOfVotes--;
 }


  constructor() { }

  ngOnInit() {
  }

}
