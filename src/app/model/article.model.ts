import {User} from './user.model';
import {Tag} from './tag.model';
import {Category} from './category.model';

export class Article {

    public id: number;
    public title: string;
    public body: string;
    public user: User;
    public tags: Tag[];
    public category: Category;
    public last_comment_user_id: number;
    public likes_count: number;
    public view_count: number;
    public comments_count: number;
    public close_comment: number;
    public is_hidden: string;
    public is_excellent: string;
    public order: number;
    public last_comment_time: string;
    public created_at: string;
    public updated_at: string;
}
