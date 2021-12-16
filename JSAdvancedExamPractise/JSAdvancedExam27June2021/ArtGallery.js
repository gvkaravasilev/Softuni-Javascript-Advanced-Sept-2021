class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);

        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        } else {
            if (this.listOfArticles.some(a => a.articleName == articleName)) {
                let refObject = this.listOfArticles.find(a => a.articleName);

                refObject.quantity += quantity;
            } else {
                this.listOfArticles.push({
                    articleModel: articleModel.toLowerCase(),
                    articleName,
                    quantity
                });
            }
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
    }

    inviteGuest(guestName, personality) {
        if (!this.guests.some(g => g.guestName == guestName)) {
            let guestPoints = 0;

            if (personality == 'Vip') {
                guestPoints = 500;
            } else if (personality == 'Middle') {
                guestPoints = 250;
            } else {
                guestPoints = 50;
            }
            this.guests.push({
                guestName,
                points: guestPoints,
                purchaseArticle: 0
            });

            return `You have successfully invited ${guestName}!`
        } else {
            throw new Error(`${guestName} has already been invited.`);
        }
    }

    buyArticle(articleModel, articleName, guestName) {
       
        if(this.listOfArticles.some(a => a.articleName == articleName) == false || this.possibleArticles.hasOwnProperty(articleModel.toLowerCase()) == false)
        {
            throw new Error('This article is not found.')
        }

        if(this.listOfArticles.some(a => a.articleName == articleName) == false ||
        this.possibleArticles.hasOwnProperty(articleModel.toLowerCase()) == false){
            throw new Error("This article is not found.");
        }

        if(!this.guests.find(g => g.guestName == guestName)){
            return `This guest is not invited.`
        }else{
            let guest = this.guests.find(g => g.guestName == guestName);
            let article = this.listOfArticles.find(a => a.articleName == articleName);

            let neededPoints = this.possibleArticles[articleModel];

            if(guest.points >= neededPoints){
                guest.points -= neededPoints;
                article.quantity--;
                guest.purchaseArticle++;

                return `${guestName} successfully purchased the article worth ${neededPoints} points.`
            }else{
                return `You need to more points to purchase the article.`;
            }
        }
    }

    showGalleryInfo(criteria){
        let result = [];
        if(criteria == 'article'){
            result.push("Articles information:");

            this.listOfArticles.forEach(a =>{
                result.push(`${a.articleModel} - ${a.articleModel} - ${a.quantity}`);
            })
        }else if(criteria == 'guest'){
            result.push("Guests information:");

            this.guests.forEach(g =>{
                result.push(`${g.guestName} - ${g.purchaseArticle}`);
            });
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));







