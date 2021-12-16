class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.slice(1).length} others like this story!`

    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!')
        }

        if (this.creator == username) {
            throw new Error('You can\'t like your own story!');
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes) {
            throw new Error('You can\'t dislike this story!');
        }

        const index = this._likes.indexOf(username);
        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {

        
        

        let comment = {
            Id: id,
            Username: username,
            Content: content,
            Replies: [],
        };


        let commentWithId = this._comments.find(c => c.Id == id);

        if (commentWithId) {
            let replyId = Number(commentWithId.Id + '.' + (commentWithId.Replies.length + 1));

            let reply = {
                Id: replyId,
                Username: username,
                Content: comment.Content,
            };

            commentWithId.Replies.push(reply);

            return `You replied successfully`;
        }

        comment.Id = this._comments.length + 1;
        this._comments.push(comment);

        this._comments.forEach(c => console.log(c));
        this._comments.forEach(c => c.Replies.forEach(r => console.log(r)));

        return `${username} commented on ${this.title}`
    }

    toString(sortingType) {

        let result = [];
        if (sortingType == 'asc') {
            this._comments = this._comments.sort((a, b) => a.Id - b.Id);
            this._comments.forEach(c => c.Replies = c.Replies.sort((a, b) => a.Id - b.Id));

        } else if (sortingType == 'desc') {
            this._comments = this._comments.sort((a, b) => b.Id - a.Id);
            this._comments.forEach(c => c.Replies = c.Replies.sort((a, b) => b.Id - a.Id));
        }

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes}`);


        if (this._comments.length == 0) {
            result.push('Comments:');
        } else {
            this._comments.forEach(c => result.push(`-- ${c.Id}. ${c.username}: ${c.content}`));
            this._comments.forEach(c => c.Replies.forEach(r => result.push(`--- ${r.Id}. ${r.username}: ${r.content}`)));
        }

        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));



