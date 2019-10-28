export class Quote {
  showDescription: boolean;
    constructor( public id: number,public name: string,public description: string, public releaseDate: Date, public likeVote: number,public dislikeVote: number){
      this.showDescription=false;
    };
}
